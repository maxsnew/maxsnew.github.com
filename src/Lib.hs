{-# LANGUAGE OverloadedStrings #-}
module Lib
    ( site
    ) where

import Hakyll

import Control.Monad
import Control.Monad.Error
import Data.Aeson.Types (typeMismatch)
import qualified Data.ByteString.Lazy as LBS
import qualified Data.List as List
import Data.Maybe (fromMaybe)
import Data.Map (Map)
import qualified Data.Map as Map
import Data.Monoid
import Data.Traversable
import Data.Text (Text)
import qualified Data.Text as T
import qualified Data.Yaml as Yaml
import Data.Yaml ((.:), (.:?), FromJSON)
import System.FilePath
import System.Process

site :: IO ()
site = do
  hakyllWith conf $ do
    match "*.md" mdpost

    match "ps/src/Main.purs" $ do
      route   $ constRoute "js/hubway.js"
      compile $ psCompiler

    match "js/*.js" $ do
      route   idRoute
      compile copyFileCompiler
  
    match "css/*.css" $ do
      route   idRoute
      compile compressCssCompiler

    forM_ ["docs/*", "img/*"] $ \p -> 
      match p rawOut
  
    match "templates/*" $ compile templateCompiler

    match "*.html" $ do
      route idRoute
      compile $ getResourceBody >>=
        loadAndApplyTemplate "templates/default.html" defaultContext

    match "publications.yaml" $ do
      route $ setExtension "html"
      compile $ yamlCompiler
                >>= loadAndApplyTemplate "templates/publications.html" groupedPubsContext
                >>= loadAndApplyTemplate "templates/default.html" defaultContext
        
-- Configuration
conf :: Configuration
conf = defaultConfiguration {
  providerDirectory = "content"
  , deployCommand   = "./src/deploy.sh"
  }

mdpost :: Rules ()
mdpost = do
  route   $ setExtension "html"
  compile $ pandocCompiler
    >>= loadAndApplyTemplate "templates/default.html" defaultContext
    >>= relativizeUrls

rawOut :: Rules ()
rawOut = do
  route   idRoute
  compile copyFileCompiler

yamlCompiler :: (FromJSON a) => Compiler (Item a)
yamlCompiler = do
  path <- getResourceFilePath
  rawItem <- getResourceLBS
  for rawItem $ \raw ->
    case Yaml.decodeEither . LBS.toStrict $ raw of
      Left err     -> throwError ["Failed to parse " <> path <> " : " <> show err]
      Right parsed -> return parsed

-- | Purescript

psCompiler :: Compiler (Item String)
psCompiler = do
  psFile <- getResourceFilePath
  let psBaseDir = takeDirectory . takeDirectory $ psFile
  js <- unsafeCompiler $ do
    _ <- flip readCreateProcess "" . shell . List.intercalate " && " $
      [ "cd " <> psBaseDir
      , "bower install"
      , "pulp build --to " <> tmpFile
      ]
    readFile $ psBaseDir </> tmpFile
  makeItem js
  where
    tmpFile = "tmp.js"

-- | Publications
data Publication = Publication { pTitle :: Text
                               , pAuthors :: Text
                               , pVenue :: Maybe Text
                               , pLinks :: Map Text Text
                               , pAbstract :: Bool
                               , pPreprint :: Bool
                               }
instance FromJSON Publication where
  parseJSON (Yaml.Object v) = 
    Publication      <$>
    v .: "title"     <*>
    v .: "authors"   <*>
    v .:? "venue"    <*>
    (withDefault mempty $ v .:? "links") <*>
    (withDefault False  $ v .:? "abstract") <*>
    (withDefault False  $ v .:? "preprint")
    where withDefault d = fmap (fromMaybe d)
  parseJSON invalid = typeMismatch "Publication" invalid

pField :: String -> (a -> Text) -> Context a
pField s m = field s (return . T.unpack . m . itemBody)

mField :: String -> (a -> Maybe Text) -> Context a
mField s m = field s (fromMay . m . itemBody)
  where fromMay Nothing  = fail ("missing field " ++ s)
        fromMay (Just t) = return . T.unpack $ t

linkContext :: Context (Text, Text)
linkContext =  pField "url" snd
            <> pField "text" fst

pubContext :: Context Publication
pubContext =  pField "title" pTitle
           <> pField "authors" pAuthors
           <> mField "venue" pVenue
           <> listFieldWith "links" linkContext (return . sequenceA . fmap (Map.toList . pLinks))

pubsContext :: Context (Text, [Publication])
pubsContext =
  pField "group-name" fst
  <> listFieldWith "papers" pubContext (return . traverse snd)

groupedPubsContext :: Context [Publication]
groupedPubsContext = listFieldWith "groups" pubsContext (return . traverse separate)
  where -- foo :: Item [Publication] -> Compiler [Item (Text, [Publication])]
        separate pubs = let (absPubs, notAbsPubs) = List.partition pAbstract pubs
                            (prePubs, paperPubs)  = List.partition pPreprint notAbsPubs
                        in [ ("Peer-Reviewed Papers", paperPubs), ("Drafts", prePubs), ("Abstracts", absPubs) ]
