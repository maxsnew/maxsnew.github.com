module App (State, Query(..), Effs, ui) where

import Prelude (class Eq, class Ord, type (~>), Unit, Void, absurd, bind, const, discard,
               map, pure, show, ($), (<$>), (<>))
import Control.Comonad (extract)
import Control.Monad.Aff (Aff)
import Control.Monad.Eff.Now as Now
import Control.Monad.Eff.Now (NOW)
import Data.Argonaut.Core as Arg
import Data.Argonaut.Parser (jsonParser)
import Data.Either (Either(..))
import Data.Maybe (Maybe(..))
import Data.Monoid (mempty)
import Data.StrMap as SM
import Data.Time (Time)
import Data.Traversable (foldMap)
import DOM (DOM)

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Network.HTTP.Affjax as AX

import GBFS as GBFS
import Common
import StationTable as STab

-- | The names of the child components
data Slot = HOME | WORK
derive instance eqButtonSlot :: Eq Slot
derive instance ordButtonSlot :: Ord Slot

data State 
  = Loading
  | Error String
  | HWData (Array ResolvedStation) Time

-- invariant: info.station_id == status.station_id
data Query a
    = Refresh a

type Effs eff = (now :: NOW, dom :: DOM, ajax :: AX.AJAX | eff )
type UI eff = H.Component HH.HTML -- ^ what we're rendering to
                          Query   -- ^ Messages
                          String  -- ^ Initial Data
                          Void    -- ^ Outgoing Messages
                          (Aff (Effs eff))

ui :: forall eff. UI eff
ui =
  H.parentComponent
    { initialState: const initialState
    , render: render
    , eval
    , receiver: const Nothing
    }
  where

  initialState :: State
  initialState = Loading

  render :: State -> H.ParentHTML Query STab.Query Slot (Aff (Effs eff))
  render st =
      case st of
        Loading -> HH.text "Loading..."
        Error err -> HH.div_ [ HH.text ("Error: " <> err), refreshButton ]
        HWData hwData time ->
          HH.div_ [ refreshButton
                  , HH.text $ "Last updated: " <> show time
                  , HH.slot HOME STab.stationTable (STab.mkTableData { place: home, stations: hwData, initLimit: 7 }) absurd
                  , HH.slot WORK STab.stationTable (STab.mkTableData { place: work, stations: hwData, initLimit: 6 }) absurd
                  ]

  eval :: Query ~> H.ParentDSL State Query STab.Query Slot Void (Aff (Effs eff))
  eval = case _ of
    Refresh next -> do
      infos    <- H.liftAff $ getParse GBFS.parseStationInfos infoUrl
      statuses <- H.liftAff $ getParse GBFS.parseStationStatuses statusUrl
      case mkHWData infos statuses of
        Nothing -> pure next
        Just hwData -> do
          time <- H.liftEff $ Now.nowTime
          H.put (HWData hwData (extract time))
          _ <- H.queryAll $ H.action $ STab.NewData hwData
          pure next

getParse :: forall a e.
            (Arg.Json -> Either String (GBFS.GbfsData a))
         -> String
         -> Aff (ajax :: AX.AJAX | e) (Either String a)
getParse parser url = do
  resp <- AX.get url
  pure $ parseResponse (resp.response)
  where
  parseResponse s = do
    js <- jsonParser s
    (_.data') <$> parser js

refreshButton :: forall t. HH.HTML t (Query Unit)
refreshButton = HH.button [ HP.title "refresh"
                          , HE.onClick $ HE.input_ Refresh
                          ]
                          [ HH.text "refresh"]

mergeHWData :: {info :: Array GBFS.StationInformation, status :: Array GBFS.StationStatus}
               -> Array ResolvedStation
mergeHWData is = foldMap findStatus statuses
  where
    infos = is.info
    statuses = is.status
    idMap :: SM.StrMap GBFS.StationInformation
    idMap = SM.unions $ map (\s -> SM.singleton s.station_id s) infos

    findStatus :: GBFS.StationStatus -> Array ResolvedStation
    findStatus status = case SM.lookup status.station_id idMap of
      Nothing -> mempty
      Just info  -> pure {info: info, status: status}

mkHWData :: Either String (Array GBFS.StationInformation) -> Either String (Array GBFS.StationStatus)
            -> Maybe (Array ResolvedStation)
mkHWData (Right info) (Right status) = Just $ mergeHWData { info, status }
mkHWData _ _ = Nothing