// Generated by purs version 0.11.6
"use strict";
var Control_Alternative = require("../Control.Alternative");
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Parallel_Class = require("../Control.Parallel.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Foldable = require("../Data.Foldable");
var Data_Traversable = require("../Data.Traversable");
var Prelude = require("../Prelude");
var parTraverse_ = function (dictParallel) {
    return function (dictFoldable) {
        return function (f) {
            return function ($17) {
                return Control_Parallel_Class.sequential(dictParallel)(Data_Foldable.traverse_(dictParallel.Applicative1())(dictFoldable)(function ($18) {
                    return Control_Parallel_Class.parallel(dictParallel)(f($18));
                })($17));
            };
        };
    };
};
var parTraverse = function (dictParallel) {
    return function (dictTraversable) {
        return function (f) {
            return function ($19) {
                return Control_Parallel_Class.sequential(dictParallel)(Data_Traversable.traverse(dictTraversable)(dictParallel.Applicative1())(function ($20) {
                    return Control_Parallel_Class.parallel(dictParallel)(f($20));
                })($19));
            };
        };
    };
};
var parSequence_ = function (dictParallel) {
    return function (dictFoldable) {
        return parTraverse_(dictParallel)(dictFoldable)(Control_Category.id(Control_Category.categoryFn));
    };
};
var parSequence = function (dictParallel) {
    return function (dictTraversable) {
        return parTraverse(dictParallel)(dictTraversable)(Control_Category.id(Control_Category.categoryFn));
    };
};
var parOneOfMap = function (dictParallel) {
    return function (dictAlternative) {
        return function (dictFoldable) {
            return function (dictFunctor) {
                return function (f) {
                    return function ($21) {
                        return Control_Parallel_Class.sequential(dictParallel)(Data_Foldable.oneOfMap(dictFoldable)(dictAlternative.Plus1())(function ($22) {
                            return Control_Parallel_Class.parallel(dictParallel)(f($22));
                        })($21));
                    };
                };
            };
        };
    };
};
var parOneOf = function (dictParallel) {
    return function (dictAlternative) {
        return function (dictFoldable) {
            return function (dictFunctor) {
                return function ($23) {
                    return Control_Parallel_Class.sequential(dictParallel)(Data_Foldable.oneOfMap(dictFoldable)(dictAlternative.Plus1())(Control_Parallel_Class.parallel(dictParallel))($23));
                };
            };
        };
    };
};
var parApply = function (dictParallel) {
    return function (mf) {
        return function (ma) {
            return Control_Parallel_Class.sequential(dictParallel)(Control_Apply.apply((dictParallel.Applicative1()).Apply0())(Control_Parallel_Class.parallel(dictParallel)(mf))(Control_Parallel_Class.parallel(dictParallel)(ma)));
        };
    };
};
module.exports = {
    parApply: parApply, 
    parOneOf: parOneOf, 
    parOneOfMap: parOneOfMap, 
    parSequence: parSequence, 
    parSequence_: parSequence_, 
    parTraverse: parTraverse, 
    parTraverse_: parTraverse_
};
