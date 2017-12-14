// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Apply = require("../Control.Apply");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_DateTime = require("../Data.DateTime");
var Data_DateTime_Instant = require("../Data.DateTime.Instant");
var Data_DateTime_Locale = require("../Data.DateTime.Locale");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Time_Duration = require("../Data.Time.Duration");
var Prelude = require("../Prelude");
var locale = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_DateTime_Locale.Locale.create(Data_Maybe.Nothing.value))($foreign.nowOffset);
var nowDate = Control_Apply.apply(Control_Monad_Eff.applyEff)(Data_Functor.map(Control_Monad_Eff.functorEff)(Data_DateTime_Locale.LocalValue.create)(locale))(Data_Functor.map(Control_Monad_Eff.functorEff)(function ($0) {
    return Data_DateTime.date(Data_DateTime_Instant.toDateTime($0));
})($foreign.now));
var nowDateTime = Control_Apply.apply(Control_Monad_Eff.applyEff)(Data_Functor.map(Control_Monad_Eff.functorEff)(Data_DateTime_Locale.LocalValue.create)(locale))(Data_Functor.map(Control_Monad_Eff.functorEff)(Data_DateTime_Instant.toDateTime)($foreign.now));
var nowTime = Control_Apply.apply(Control_Monad_Eff.applyEff)(Data_Functor.map(Control_Monad_Eff.functorEff)(Data_DateTime_Locale.LocalValue.create)(locale))(Data_Functor.map(Control_Monad_Eff.functorEff)(function ($1) {
    return Data_DateTime.time(Data_DateTime_Instant.toDateTime($1));
})($foreign.now));
module.exports = {
    locale: locale, 
    nowDate: nowDate, 
    nowDateTime: nowDateTime, 
    nowTime: nowTime, 
    now: $foreign.now
};
