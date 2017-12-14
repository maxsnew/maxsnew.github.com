// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_HTML_HTMLTrackElement_ReadyState = require("../DOM.HTML.HTMLTrackElement.ReadyState");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Data_Enum = require("../Data.Enum");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Prelude = require("../Prelude");
var readyState = function (dictPartial) {
    return function ($1) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(function ($2) {
            return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(DOM_HTML_HTMLTrackElement_ReadyState.boundedEnumReadyState)($2));
        })($foreign.readyStateIndex($1));
    };
};
module.exports = {
    readyState: readyState, 
    "default": $foreign["default"], 
    kind: $foreign.kind, 
    label: $foreign.label, 
    readyStateIndex: $foreign.readyStateIndex, 
    setDefault: $foreign.setDefault, 
    setKind: $foreign.setKind, 
    setLabel: $foreign.setLabel, 
    setSrc: $foreign.setSrc, 
    setSrclang: $foreign.setSrclang, 
    src: $foreign.src, 
    srclang: $foreign.srclang
};