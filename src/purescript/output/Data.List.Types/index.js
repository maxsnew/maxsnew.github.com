// Generated by purs version 0.11.6
"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Comonad = require("../Control.Comonad");
var Control_Extend = require("../Control.Extend");
var Control_Monad = require("../Control.Monad");
var Control_MonadPlus = require("../Control.MonadPlus");
var Control_MonadZero = require("../Control.MonadZero");
var Control_Plus = require("../Control.Plus");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_NonEmpty = require("../Data.NonEmpty");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Data_Tuple = require("../Data.Tuple");
var Data_Unfoldable = require("../Data.Unfoldable");
var Prelude = require("../Prelude");
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var toList = function (v) {
    return new Cons(v.value0, v.value1);
};
var newtypeNonEmptyList = new Data_Newtype.Newtype(function (n) {
    return n;
}, NonEmptyList);
var nelCons = function (a) {
    return function (v) {
        return new Data_NonEmpty.NonEmpty(a, new Cons(v.value0, v.value1));
    };
};
var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldl(foldableList)(function (acc) {
            return function ($143) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f($143));
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    var go = function ($copy_b) {
        return function ($copy_v) {
            var $tco_var_b = $copy_b;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(b, v) {
                if (v instanceof Nil) {
                    $tco_done = true;
                    return b;
                };
                if (v instanceof Cons) {
                    $tco_var_b = f(b)(v.value0);
                    $copy_v = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Types line 78, column 12 - line 80, column 30: " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_b, $copy_v);
            };
            return $tco_result;
        };
    };
    return go;
}, function (f) {
    return function (b) {
        var rev = function ($copy_acc) {
            return function ($copy_v) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v) {
                    if (v instanceof Nil) {
                        $tco_done = true;
                        return acc;
                    };
                    if (v instanceof Cons) {
                        $tco_var_acc = new Cons(v.value0, acc);
                        $copy_v = v.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List.Types line 73, column 15 - line 75, column 33: " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_v);
                };
                return $tco_result;
            };
        };
        return function ($144) {
            return Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b)(rev(Nil.value)($144));
        };
    };
});
var foldableNonEmptyList = Data_NonEmpty.foldableNonEmpty(foldableList);
var functorList = new Data_Functor.Functor(function (f) {
    return Data_Foldable.foldr(foldableList)(function (x) {
        return function (acc) {
            return new Cons(f(x), acc);
        };
    })(Nil.value);
});
var functorNonEmptyList = Data_NonEmpty.functorNonEmpty(functorList);
var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
    return function (ys) {
        return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
    };
});
var monoidList = new Data_Monoid.Monoid(function () {
    return semigroupList;
}, Nil.value);
var semigroupNonEmptyList = new Data_Semigroup.Semigroup(function (v) {
    return function (as$prime) {
        return new Data_NonEmpty.NonEmpty(v.value0, Data_Semigroup.append(semigroupList)(v.value1)(toList(as$prime)));
    };
});
var showList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        if (v instanceof Nil) {
            return "Nil";
        };
        return "(" + (Data_Foldable.intercalate(foldableList)(Data_Monoid.monoidString)(" : ")(Data_Functor.map(functorList)(Data_Show.show(dictShow))(v)) + " : Nil)");
    });
};
var showNonEmptyList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyList " + (Data_Show.show(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow)))(v) + ")");
    });
};
var traversableList = new Data_Traversable.Traversable(function () {
    return foldableList;
}, function () {
    return functorList;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
}, function (dictApplicative) {
    return function (f) {
        return function ($145) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value))(Data_Foldable.foldl(foldableList)(function (acc) {
                return function ($146) {
                    return Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc)(f($146));
                };
            })(Control_Applicative.pure(dictApplicative)(Nil.value))($145));
        };
    };
});
var traversableNonEmptyList = Data_NonEmpty.traversableNonEmpty(traversableList);
var unfoldableList = new Data_Unfoldable.Unfoldable(function (f) {
    return function (b) {
        var go = function ($copy_source) {
            return function ($copy_memo) {
                var $tco_var_source = $copy_source;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(source, memo) {
                    var v = f(source);
                    if (v instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value)(memo);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        $tco_var_source = v.value0.value1;
                        $copy_memo = new Cons(v.value0.value0, memo);
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List.Types line 86, column 22 - line 88, column 52: " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_source, $copy_memo);
                };
                return $tco_result;
            };
        };
        return go(b)(Nil.value);
    };
});
var foldable1NonEmptyList = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableNonEmptyList;
}, function (dictSemigroup) {
    return function (v) {
        return Data_Foldable.foldl(foldableList)(Data_Semigroup.append(dictSemigroup))(v.value0)(v.value1);
    };
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return Data_Foldable.foldl(foldableList)(function (acc) {
                return function ($147) {
                    return Data_Semigroup.append(dictSemigroup)(acc)(f($147));
                };
            })(f(v.value0))(v.value1);
        };
    };
});
var extendNonEmptyList = new Control_Extend.Extend(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        var go = function (a) {
            return function (v1) {
                return {
                    val: new Cons(f(new Data_NonEmpty.NonEmpty(a, v1.acc)), v1.val), 
                    acc: new Cons(a, v1.acc)
                };
            };
        };
        return new Data_NonEmpty.NonEmpty(f(v), (Data_Foldable.foldr(foldableList)(go)({
            val: Nil.value, 
            acc: Nil.value
        })(v.value1)).val);
    };
});
var extendList = new Control_Extend.Extend(function () {
    return functorList;
}, function (f) {
    return function (v) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            var go = function (a$prime) {
                return function (v1) {
                    var acc$prime = new Cons(a$prime, v1.acc);
                    return {
                        val: new Cons(f(acc$prime), v1.val), 
                        acc: acc$prime
                    };
                };
            };
            return new Cons(f(v), (Data_Foldable.foldr(foldableList)(go)({
                val: Nil.value, 
                acc: Nil.value
            })(v.value1)).val);
        };
        throw new Error("Failed pattern match at Data.List.Types line 119, column 1 - line 119, column 35: " + [ f.constructor.name, v.constructor.name ]);
    };
});
var eq1List = new Data_Eq.Eq1(function (dictEq) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    return function ($copy_v2) {
                        var $tco_var_v = $copy_v;
                        var $tco_var_v1 = $copy_v1;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1, v2) {
                            if (!v2) {
                                $tco_done = true;
                                return false;
                            };
                            if (v instanceof Nil && v1 instanceof Nil) {
                                $tco_done = true;
                                return v2;
                            };
                            if (v instanceof Cons && v1 instanceof Cons) {
                                $tco_var_v = v.value1;
                                $tco_var_v1 = v1.value1;
                                $copy_v2 = v2 && Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                                return;
                            };
                            $tco_done = true;
                            return false;
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                        };
                        return $tco_result;
                    };
                };
            };
            return go(xs)(ys)(true);
        };
    };
});
var eqList = function (dictEq) {
    return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
};
var eqNonEmptyList = function (dictEq) {
    return Data_NonEmpty.eqNonEmpty(eq1List)(dictEq);
};
var ord1List = new Data_Ord.Ord1(function () {
    return eq1List;
}, function (dictOrd) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.EQ.value;
                        };
                        if (v instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.LT.value;
                        };
                        if (v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.GT.value;
                        };
                        if (v instanceof Cons && v1 instanceof Cons) {
                            var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
                            if (v2 instanceof Data_Ordering.EQ) {
                                $tco_var_v = v.value1;
                                $copy_v1 = v1.value1;
                                return;
                            };
                            $tco_done = true;
                            return v2;
                        };
                        throw new Error("Failed pattern match at Data.List.Types line 53, column 5 - line 53, column 20: " + [ v.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(xs)(ys);
        };
    };
});
var ordList = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqList(dictOrd.Eq0());
    }, Data_Ord.compare1(ord1List)(dictOrd));
};
var ordNonEmptyList = function (dictOrd) {
    return Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd);
};
var comonadNonEmptyList = new Control_Comonad.Comonad(function () {
    return extendNonEmptyList;
}, function (v) {
    return v.value0;
});
var applyList = new Control_Apply.Apply(function () {
    return functorList;
}, function (v) {
    return function (v1) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.List.Types line 94, column 1 - line 94, column 33: " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var applyNonEmptyList = new Control_Apply.Apply(function () {
    return functorNonEmptyList;
}, function (v) {
    return function (v1) {
        return new Data_NonEmpty.NonEmpty(v.value0(v1.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v.value1)(new Cons(v1.value0, Nil.value)))(Control_Apply.apply(applyList)(new Cons(v.value0, v.value1))(v1.value1)));
    };
});
var bindList = new Control_Bind.Bind(function () {
    return applyList;
}, function (v) {
    return function (v1) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(v1(v.value0))(Control_Bind.bind(bindList)(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.List.Types line 101, column 1 - line 101, column 31: " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindNonEmptyList = new Control_Bind.Bind(function () {
    return applyNonEmptyList;
}, function (v) {
    return function (f) {
        var v1 = f(v.value0);
        return new Data_NonEmpty.NonEmpty(v1.value0, Data_Semigroup.append(semigroupList)(v1.value1)(Control_Bind.bind(bindList)(v.value1)(function ($148) {
            return toList(f($148));
        })));
    };
});
var applicativeList = new Control_Applicative.Applicative(function () {
    return applyList;
}, function (a) {
    return new Cons(a, Nil.value);
});
var monadList = new Control_Monad.Monad(function () {
    return applicativeList;
}, function () {
    return bindList;
});
var altNonEmptyList = new Control_Alt.Alt(function () {
    return functorNonEmptyList;
}, Data_Semigroup.append(semigroupNonEmptyList));
var altList = new Control_Alt.Alt(function () {
    return functorList;
}, Data_Semigroup.append(semigroupList));
var plusList = new Control_Plus.Plus(function () {
    return altList;
}, Nil.value);
var alternativeList = new Control_Alternative.Alternative(function () {
    return applicativeList;
}, function () {
    return plusList;
});
var monadZeroList = new Control_MonadZero.MonadZero(function () {
    return alternativeList;
}, function () {
    return monadList;
});
var monadPlusList = new Control_MonadPlus.MonadPlus(function () {
    return monadZeroList;
});
var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
    return applyNonEmptyList;
}, function ($149) {
    return NonEmptyList(Data_NonEmpty.singleton(plusList)($149));
});
var monadNonEmptyList = new Control_Monad.Monad(function () {
    return applicativeNonEmptyList;
}, function () {
    return bindNonEmptyList;
});
var traversable1NonEmptyList = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1NonEmptyList;
}, function () {
    return traversableNonEmptyList;
}, function (dictApply) {
    return Data_Semigroup_Traversable.traverse1(traversable1NonEmptyList)(dictApply)(Control_Category.id(Control_Category.categoryFn));
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.mapFlipped(dictApply.Functor0())(Data_Foldable.foldl(foldableList)(function (acc) {
                return function ($150) {
                    return Control_Apply.lift2(dictApply)(Data_Function.flip(nelCons))(acc)(f($150));
                };
            })(Data_Functor.map(dictApply.Functor0())(Control_Applicative.pure(applicativeNonEmptyList))(f(v.value0)))(v.value1))(function (v1) {
                return Data_Foldable.foldl(foldableList)(Data_Function.flip(nelCons))(Control_Applicative.pure(applicativeNonEmptyList)(v1.value0))(v1.value1);
            });
        };
    };
});
module.exports = {
    Nil: Nil, 
    Cons: Cons, 
    NonEmptyList: NonEmptyList, 
    nelCons: nelCons, 
    toList: toList, 
    showList: showList, 
    eqList: eqList, 
    eq1List: eq1List, 
    ordList: ordList, 
    ord1List: ord1List, 
    semigroupList: semigroupList, 
    monoidList: monoidList, 
    functorList: functorList, 
    foldableList: foldableList, 
    unfoldableList: unfoldableList, 
    traversableList: traversableList, 
    applyList: applyList, 
    applicativeList: applicativeList, 
    bindList: bindList, 
    monadList: monadList, 
    altList: altList, 
    plusList: plusList, 
    alternativeList: alternativeList, 
    monadZeroList: monadZeroList, 
    monadPlusList: monadPlusList, 
    extendList: extendList, 
    newtypeNonEmptyList: newtypeNonEmptyList, 
    eqNonEmptyList: eqNonEmptyList, 
    ordNonEmptyList: ordNonEmptyList, 
    showNonEmptyList: showNonEmptyList, 
    functorNonEmptyList: functorNonEmptyList, 
    applyNonEmptyList: applyNonEmptyList, 
    applicativeNonEmptyList: applicativeNonEmptyList, 
    bindNonEmptyList: bindNonEmptyList, 
    monadNonEmptyList: monadNonEmptyList, 
    altNonEmptyList: altNonEmptyList, 
    extendNonEmptyList: extendNonEmptyList, 
    comonadNonEmptyList: comonadNonEmptyList, 
    semigroupNonEmptyList: semigroupNonEmptyList, 
    foldableNonEmptyList: foldableNonEmptyList, 
    traversableNonEmptyList: traversableNonEmptyList, 
    foldable1NonEmptyList: foldable1NonEmptyList, 
    traversable1NonEmptyList: traversable1NonEmptyList
};
