// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var form = function ($0) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._form($0));
};
module.exports = {
    form: form, 
    defaultSelected: $foreign.defaultSelected, 
    disabled: $foreign.disabled, 
    index: $foreign.index, 
    label: $foreign.label, 
    selected: $foreign.selected, 
    setDefaultSelected: $foreign.setDefaultSelected, 
    setDisabled: $foreign.setDisabled, 
    setLabel: $foreign.setLabel, 
    setSelected: $foreign.setSelected, 
    setText: $foreign.setText, 
    setValue: $foreign.setValue, 
    text: $foreign.text, 
    value: $foreign.value
};
