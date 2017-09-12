// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Comonad = require("../Control.Comonad");
var Control_Extend = require("../Control.Extend");
var Control_Monad = require("../Control.Monad");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Eq = require("../Data.Eq");
var Data_Functor = require("../Data.Functor");
var Data_Ord = require("../Data.Ord");
var Prelude = require("../Prelude");
var Yoneda = function (x) {
    return x;
};
var runYoneda = function (v) {
    return function (k) {
        return v(k);
    };
};
var lowerYoneda = function (v) {
    return v(Control_Category.id(Control_Category.categoryFn));
};
var liftYoneda = function (dictFunctor) {
    return function (m) {
        return function (k) {
            return Data_Functor.map(dictFunctor)(k)(m);
        };
    };
};
var monadTransYoneda = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return liftYoneda(((dictMonad.Bind1()).Apply0()).Functor0());
});
var hoistYoneda = function (nat) {
    return function (v) {
        return Data_Functor.map(Data_Functor.functorFn)(nat)(v);
    };
};
var functorYoneda = new Data_Functor.Functor(function (f) {
    return function (m) {
        return function (k) {
            return runYoneda(m)(function ($34) {
                return k(f($34));
            });
        };
    };
});
var extendYoneda = function (dictExtend) {
    return new Control_Extend.Extend(function () {
        return functorYoneda;
    }, function (f) {
        return function (v) {
            return function (k) {
                return Control_Extend.extend(dictExtend)(function ($35) {
                    return k(f(liftYoneda(dictExtend.Functor0())($35)));
                })(v(Control_Category.id(Control_Category.categoryFn)));
            };
        };
    });
};
var eqYoneda = function (dictEq1) {
    return function (dictEq) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq1(dictEq1)(dictEq)(lowerYoneda(x))(lowerYoneda(y));
            };
        });
    };
};
var ordYoneda = function (dictOrd1) {
    return function (dictOrd) {
        return new Data_Ord.Ord(function () {
            return eqYoneda(dictOrd1.Eq10())(dictOrd.Eq0());
        }, function (x) {
            return function (y) {
                return Data_Ord.compare1(dictOrd1)(dictOrd)(lowerYoneda(x))(lowerYoneda(y));
            };
        });
    };
};
var eq1Yoneda = function (dictEq1) {
    return new Data_Eq.Eq1(function (dictEq) {
        return Data_Eq.eq(eqYoneda(dictEq1)(dictEq));
    });
};
var ord1Yoneda = function (dictOrd1) {
    return new Data_Ord.Ord1(function () {
        return eq1Yoneda(dictOrd1.Eq10());
    }, function (dictOrd) {
        return Data_Ord.compare(ordYoneda(dictOrd1)(dictOrd));
    });
};
var comonadYoneda = function (dictComonad) {
    return new Control_Comonad.Comonad(function () {
        return extendYoneda(dictComonad.Extend0());
    }, function ($36) {
        return Control_Comonad.extract(dictComonad)(lowerYoneda($36));
    });
};
var applyYoneda = function (dictApply) {
    return new Control_Apply.Apply(function () {
        return functorYoneda;
    }, function (v) {
        return function (v1) {
            return function (k) {
                return Control_Apply.apply(dictApply)(v(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(k)))(v1(Control_Category.id(Control_Category.categoryFn)));
            };
        };
    });
};
var bindYoneda = function (dictBind) {
    return new Control_Bind.Bind(function () {
        return applyYoneda(dictBind.Apply0());
    }, function (v) {
        return function (g) {
            return function (k) {
                return Control_Bind.bind(dictBind)(v(Control_Category.id(Control_Category.categoryFn)))(function (a) {
                    return runYoneda(g(a))(k);
                });
            };
        };
    });
};
var applicativeYoneda = function (dictApplicative) {
    return new Control_Applicative.Applicative(function () {
        return applyYoneda(dictApplicative.Apply0());
    }, function ($37) {
        return liftYoneda((dictApplicative.Apply0()).Functor0())(Control_Applicative.pure(dictApplicative)($37));
    });
};
var monadYoneda = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeYoneda(dictMonad.Applicative0());
    }, function () {
        return bindYoneda(dictMonad.Bind1());
    });
};
module.exports = {
    Yoneda: Yoneda, 
    hoistYoneda: hoistYoneda, 
    liftYoneda: liftYoneda, 
    lowerYoneda: lowerYoneda, 
    runYoneda: runYoneda, 
    eqYoneda: eqYoneda, 
    eq1Yoneda: eq1Yoneda, 
    ordYoneda: ordYoneda, 
    ord1Yoneda: ord1Yoneda, 
    functorYoneda: functorYoneda, 
    applyYoneda: applyYoneda, 
    applicativeYoneda: applicativeYoneda, 
    bindYoneda: bindYoneda, 
    monadYoneda: monadYoneda, 
    monadTransYoneda: monadTransYoneda, 
    extendYoneda: extendYoneda, 
    comonadYoneda: comonadYoneda
};
