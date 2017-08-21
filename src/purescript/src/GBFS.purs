module GBFS where

import Prelude (class Show, bind, pure, ($), (/=), (<$>), (<*>), (<<<), (<>), (=<<))
import Data.Either (Either(..))
import Data.Generic (class Generic, gShow)
import Data.Int as Int
import Data.Maybe (Maybe(..), maybe)
import Data.Traversable (traverse)
import Data.StrMap as SM

import Data.Argonaut.Core (Json)
import Data.Argonaut.Core as Arg
-- | API for General Bikeshare Feed Specification (GBFS)
-- | TODO: make these extensible records

type Err a = Either String a

type StationId = String

type GbfsData d = { last_updated :: Number
                  , ttl :: Number
                  , data' :: d
                  }

-- mapGbfsData :: forall a b. (a -> b) -> GbfsData a -> GbfsData b
-- mapGbfsData f d = 

newtype NTStationStatus = NTStationStatus StationStatus

derive instance genericNTStationStatus :: Generic NTStationStatus
instance showNTStationStatus :: Show NTStationStatus where
  show = gShow

type StationStatus = { station_id :: StationId
                     , num_bikes_available :: Int
                     -- , num_bikes_disabled :: Maybe Int
                     , num_docks_available :: Int
                     -- , num_docks_disabled :: Maybe Int
                     , is_renting :: Boolean
                     , is_installed :: Boolean
                     , is_returning :: Boolean
                     , last_reported :: Number
                     }

newtype NTStationInformation = NTStationInformation StationInformation

derive instance genericNTStationInformation :: Generic NTStationInformation
instance showNTStationInformation :: Show NTStationInformation where
  show = gShow
type StationInformation = { station_id :: StationId
                          , name :: String
                          , short_name :: String
                          , lat :: Number
                          , lon :: Number
                          -- TODO: some optional fields
                          -- , address :: Maybe String
                          }

parseGbfs :: Arg.Json -> Err (GbfsData Json)
parseGbfs =
  Arg.foldJsonObject
    expectedObject
    (\smap ->
      { last_updated: _, ttl: _, data': _ } <$> (parseNumber =<< lookupExpect "last_updated" smap)
                                            <*> (parseNumber =<< lookupExpect "ttl" smap)
                                            <*> lookupExpect "data" smap
    )
  where
    expectedObject = Left "Expected GBFS data object"

lookupExpect :: forall a. String -> SM.StrMap a -> Err a
lookupExpect fld = lookupField ("Expected object to contain " <> fld <> " field") fld
lookupField :: forall e a. e -> String -> SM.StrMap a -> Either e a
lookupField err fld smap = maybe (Left err) Right $ SM.lookup fld smap

parseStationData :: forall a. (Arg.Json -> Err a) -> Arg.Json -> Err (GbfsData a)
parseStationData parseData js = do
  gbfs <- parseGbfs js
  let d = gbfs.data'
  rawStations <- Arg.foldJsonObject expectedObject (lookupExpect "stations") d
  odat <- parseData rawStations
  pure $ gbfs { data' = odat }
  where
    expectedObject = Left "Expected Object with stations field"
  

parseStationStatuses :: Arg.Json -> Err (GbfsData (Array StationStatus))
parseStationStatuses =
  parseStationData (Arg.foldJsonArray
                      (expectedArrayOf "StationStatuses")
                      (traverse parseStationStatus))

expectedArrayOf :: forall a. String -> Err a
expectedArrayOf s = Left $ "Expected Array of " <> s

parseStationInfos :: Arg.Json -> Err (GbfsData (Array StationInformation))
parseStationInfos =
  parseStationData (Arg.foldJsonArray (expectedArrayOf "StationInfos") (traverse parseStationInfo))

parseStationInfo :: Arg.Json -> Err StationInformation
parseStationInfo =
  Arg.foldJsonObject
    (Left "Expected StationInfo")
    (\smap ->
      { station_id: _
      , name: _
      , short_name: _
      , lat: _
      , lon: _
      } <$> (parseStationId =<< lookupExpect "station_id" smap)
        <*> (parseStr =<< lookupExpect "name" smap)
        <*> (parseStr =<< lookupExpect "short_name" smap)
        <*> (parseNumber =<< lookupExpect "lat" smap)
        <*> (parseNumber =<< lookupExpect "lon" smap)
    )

parseStationStatus :: Arg.Json -> Err StationStatus
parseStationStatus =
  Arg.foldJsonObject
    (Left "Expected StationStatus")
    (\smap ->
      { station_id: _
      , num_bikes_available: _
      -- , num_bikes_disabled: _
      , num_docks_available: _
      -- , num_docks_disabled: _
      , is_renting: _
      , is_installed: _
      , is_returning: _
      , last_reported: _
      } <$> (parseStationId =<< lookupExpect "station_id" smap)
        <*> (parseInt =<< lookupExpect "num_bikes_available" smap)
        -- <*> (parseNumber =<< lookupExpect "num_bikes_disable" smap)
        <*> (parseInt =<< lookupExpect "num_docks_available" smap)
        -- <*> (parseNumber =<< lookupExpect "num_bikes_disabled" smap)
        <*> (parseBool =<< lookupExpect "is_renting" smap)
        <*> (parseBool =<< lookupExpect "is_installed" smap)
        <*> (parseBool =<< lookupExpect "is_returning" smap)
        <*> (parseNumber =<< lookupExpect "last_reported" smap)
      )

parseStationId :: Arg.Json -> Err StationId
parseStationId = parseStr

parseStr :: Arg.Json -> Err String
parseStr = Arg.foldJsonString (expected "string") pure

parseNumber :: Arg.Json -> Err Number
parseNumber = Arg.foldJsonNumber (expected "number") pure

parseInt :: Arg.Json -> Err Int
parseInt js = do
  num <- parseNumber js
  case Int.fromNumber num of
    Nothing -> expected "Int, got Number"
    Just i -> Right i
  

parseBool :: Arg.Json -> Err Boolean
parseBool = Arg.foldJsonNumber (expected "boolean") (pure <<< numToBool)
  where numToBool n = (n /= 0.0)

parseError :: forall a. Err a
parseError = Left "ParseError (sorry for the shitty error)"

expected :: forall a. String -> Err a
expected s = Left ("")
