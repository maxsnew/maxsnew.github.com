// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var DOM_Node_Types = require("../DOM.Node.Types");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var contentDocument = function ($0) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._contentDocument($0));
};
module.exports = {
    contentDocument: contentDocument, 
    height: $foreign.height, 
    name: $foreign.name, 
    setHeight: $foreign.setHeight, 
    setName: $foreign.setName, 
    setSrc: $foreign.setSrc, 
    setSrcdoc: $foreign.setSrcdoc, 
    setWidth: $foreign.setWidth, 
    src: $foreign.src, 
    srcdoc: $foreign.srcdoc, 
    width: $foreign.width
};