// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Symbol = require("../Data.Symbol");
var Prelude = require("../Prelude");
var Type_Row = require("../Type.Row");
var Builder = function (x) {
    return x;
};
var semigroupoidBuilder = Control_Semigroupoid.semigroupoidFn;
var merge = function (dictUnion) {
    return function (r2) {
        return function (r1) {
            return $foreign.unsafeMerge(r1)(r2);
        };
    };
};
var insert = function (dictRowCons) {
    return function (dictRowLacks) {
        return function (dictIsSymbol) {
            return function (l) {
                return function (a) {
                    return function (r1) {
                        return $foreign.unsafeInsert(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(a)(r1);
                    };
                };
            };
        };
    };
};
var $$delete = function (dictIsSymbol) {
    return function (dictRowLacks) {
        return function (dictRowCons) {
            return function (l) {
                return function (r2) {
                    return $foreign.unsafeDelete(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(r2);
                };
            };
        };
    };
};
var categoryBuilder = Control_Category.categoryFn;
var build = function (v) {
    return function (r1) {
        return v($foreign.copyRecord(r1));
    };
};
module.exports = {
    build: build, 
    "delete": $$delete, 
    insert: insert, 
    merge: merge, 
    semigroupoidBuilder: semigroupoidBuilder, 
    categoryBuilder: categoryBuilder
};
