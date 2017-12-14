// Generated by purs version 0.11.6
"use strict";
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Profunctor = require("../Data.Profunctor");
var Prelude = require("../Prelude");
var Choice = function (Profunctor0, left, right) {
    this.Profunctor0 = Profunctor0;
    this.left = left;
    this.right = right;
};
var right = function (dict) {
    return dict.right;
};
var left = function (dict) {
    return dict.left;
};
var splitChoice = function (dictCategory) {
    return function (dictChoice) {
        return function (l) {
            return function (r) {
                return Control_Semigroupoid.composeFlipped(dictCategory.Semigroupoid0())(left(dictChoice)(l))(right(dictChoice)(r));
            };
        };
    };
};
var fanin = function (dictCategory) {
    return function (dictChoice) {
        return function (l) {
            return function (r) {
                var join = Data_Profunctor.dimap(dictChoice.Profunctor0())(Data_Either.either(Control_Category.id(Control_Category.categoryFn))(Control_Category.id(Control_Category.categoryFn)))(Control_Category.id(Control_Category.categoryFn))(Control_Category.id(dictCategory));
                return Control_Semigroupoid.composeFlipped(dictCategory.Semigroupoid0())(splitChoice(dictCategory)(dictChoice)(l)(r))(join);
            };
        };
    };
};
var choiceFn = new Choice(function () {
    return Data_Profunctor.profunctorFn;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Data_Either.Left) {
            return Data_Either.Left.create(v(v1.value0));
        };
        if (v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(v1.value0);
        };
        throw new Error("Failed pattern match at Data.Profunctor.Choice line 32, column 1 - line 32, column 33: " + [ v.constructor.name, v1.constructor.name ]);
    };
}, Data_Functor.map(Data_Either.functorEither));
module.exports = {
    Choice: Choice, 
    fanin: fanin, 
    left: left, 
    right: right, 
    splitChoice: splitChoice, 
    choiceFn: choiceFn
};