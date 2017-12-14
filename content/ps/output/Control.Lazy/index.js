// Generated by purs version 0.11.6
"use strict";
var Data_Unit = require("../Data.Unit");
var Lazy = function (defer) {
    this.defer = defer;
};
var lazyUnit = new Lazy(function (v) {
    return Data_Unit.unit;
});
var lazyFn = new Lazy(function (f) {
    return function (x) {
        return f(Data_Unit.unit)(x);
    };
});
var defer = function (dict) {
    return dict.defer;
};
var fix = function (dictLazy) {
    return function (f) {
        return defer(dictLazy)(function (v) {
            return f(fix(dictLazy)(f));
        });
    };
};
module.exports = {
    Lazy: Lazy, 
    defer: defer, 
    fix: fix, 
    lazyFn: lazyFn, 
    lazyUnit: lazyUnit
};