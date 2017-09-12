// Generated by purs version 0.11.6
"use strict";
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Lens_Internal_Exchange = require("../Data.Lens.Internal.Exchange");
var Data_Lens_Internal_Re = require("../Data.Lens.Internal.Re");
var Data_Lens_Types = require("../Data.Lens.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var withIso = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Exchange.Exchange(Control_Category.id(Control_Category.categoryFn), Control_Category.id(Control_Category.categoryFn)));
        return f(v.value0)(v.value1);
    };
};
var under = function (l) {
    return withIso(l)(function (sa) {
        return function (bt) {
            return function (ts) {
                return function ($19) {
                    return sa(ts(bt($19)));
                };
            };
        };
    });
};
var re = function (t) {
    return Data_Newtype.unwrap(Data_Lens_Internal_Re.newtypeRe)(t(Control_Category.id(Control_Category.categoryFn)));
};
var iso = function (f) {
    return function (g) {
        return function (dictProfunctor) {
            return function (pab) {
                return Data_Profunctor.dimap(dictProfunctor)(f)(g)(pab);
            };
        };
    };
};
var mapping = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (l) {
            return function (dictProfunctor) {
                return withIso(l)(function (sa) {
                    return function (bt) {
                        return iso(Data_Functor.map(dictFunctor)(sa))(Data_Functor.map(dictFunctor1)(bt))(dictProfunctor);
                    };
                });
            };
        };
    };
};
var non = function (dictEq) {
    return function (def) {
        return function (dictProfunctor) {
            var g = function (a) {
                if (Data_Eq.eq(dictEq)(a)(def)) {
                    return Data_Maybe.Nothing.value;
                };
                if (Data_Boolean.otherwise) {
                    return new Data_Maybe.Just(a);
                };
                throw new Error("Failed pattern match at Data.Lens.Iso line 44, column 9 - line 45, column 33: " + [ a.constructor.name ]);
            };
            return iso(Data_Maybe.fromMaybe(def))(g)(dictProfunctor);
        };
    };
};
var uncurried = function (dictProfunctor) {
    return iso(Data_Tuple.uncurry)(Data_Tuple.curry)(dictProfunctor);
};
var flipped = function (dictProfunctor) {
    return iso(Data_Function.flip)(Data_Function.flip)(dictProfunctor);
};
var dimapping = function (dictProfunctor) {
    return function (dictProfunctor1) {
        return function (f) {
            return function (g) {
                return function (dictProfunctor2) {
                    return withIso(f)(function (sa) {
                        return function (bt) {
                            return withIso(g)(function (ssaa) {
                                return function (bbtt) {
                                    return iso(Data_Profunctor.dimap(dictProfunctor)(sa)(ssaa))(Data_Profunctor.dimap(dictProfunctor1)(bt)(bbtt))(dictProfunctor2);
                                };
                            });
                        };
                    });
                };
            };
        };
    };
};
var curried = function (dictProfunctor) {
    return iso(Data_Tuple.curry)(Data_Tuple.uncurry)(dictProfunctor);
};
var cloneIso = function (l) {
    return function (dictProfunctor) {
        return withIso(l)(function (x) {
            return function (y) {
                return function (p) {
                    return iso(x)(y)(dictProfunctor)(p);
                };
            };
        });
    };
};
var auf = function (dictProfunctor) {
    return function (l) {
        return withIso(l)(function (sa) {
            return function (bt) {
                return function (f) {
                    return function (g) {
                        return function (e) {
                            return bt(f(Data_Profunctor.rmap(dictProfunctor)(sa)(g))(e));
                        };
                    };
                };
            };
        });
    };
};
var au = function (l) {
    return withIso(l)(function (sa) {
        return function (bt) {
            return function (f) {
                return function (e) {
                    return sa(f(bt)(e));
                };
            };
        };
    });
};
module.exports = {
    au: au, 
    auf: auf, 
    cloneIso: cloneIso, 
    curried: curried, 
    dimapping: dimapping, 
    flipped: flipped, 
    iso: iso, 
    mapping: mapping, 
    non: non, 
    re: re, 
    uncurried: uncurried, 
    under: under, 
    withIso: withIso
};
