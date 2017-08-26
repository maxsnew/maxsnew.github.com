// Generated by purs version 0.11.6
"use strict";
var Control_Apply = require("../Control.Apply");
var Data_Eq = require("../Data.Eq");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var StatusCode = function (x) {
    return x;
};
var showStatusCode = new Data_Show.Show(function (v) {
    return "(StatusCode " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var genericStatusCode = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Network.HTTP.StatusCode.StatusCode" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(StatusCode))(Data_Generic.fromSpine(Data_Generic.genericInt)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Network.HTTP.StatusCode.StatusCode", [ {
        sigConstructor: "Network.HTTP.StatusCode.StatusCode", 
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericInt)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Network.HTTP.StatusCode.StatusCode", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericInt)(v);
    } ]);
});
var eqStatusCode = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return v === v1;
    };
});
module.exports = {
    StatusCode: StatusCode, 
    genericStatusCode: genericStatusCode, 
    eqStatusCode: eqStatusCode, 
    showStatusCode: showStatusCode
};
