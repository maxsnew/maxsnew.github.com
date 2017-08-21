// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Monad_Except = require("../Control.Monad.Except");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Control_Monad_Free_Trans = require("../Control.Monad.Free.Trans");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Control_Parallel = require("../Control.Parallel");
var Control_Parallel_Class = require("../Control.Parallel.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Either = require("../Data.Either");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Identity = require("../Data.Identity");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Profunctor = require("../Data.Profunctor");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Transform = function (x) {
    return x;
};
var Emit = (function () {
    function Emit(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Emit.create = function (value0) {
        return function (value1) {
            return new Emit(value0, value1);
        };
    };
    return Emit;
})();
var CoTransform = (function () {
    function CoTransform(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    CoTransform.create = function (value0) {
        return function (value1) {
            return new CoTransform(value0, value1);
        };
    };
    return CoTransform;
})();
var Await = function (x) {
    return x;
};
var runProcess = function (dictMonadRec) {
    return Control_Monad_Free_Trans.runFreeT(Data_Identity.functorIdentity)(dictMonadRec)(function ($186) {
        return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(Data_Newtype.unwrap(Data_Identity.newtypeIdentity)($186));
    });
};
var profunctorAwait = new Data_Profunctor.Profunctor(function (f) {
    return function (g) {
        return function (v) {
            return Data_Profunctor.dimap(Data_Profunctor.profunctorFn)(f)(g)(v);
        };
    };
});
var loop = function (dictFunctor) {
    return function (dictMonad) {
        return function (me) {
            return Control_Monad_Rec_Class.tailRecM(Control_Monad_Free_Trans.monadRecFreeT(dictFunctor)(dictMonad))(function (v) {
                return Data_Functor.map(Control_Monad_Free_Trans.functorFreeT(dictFunctor)(((dictMonad.Bind1()).Apply0()).Functor0()))(Data_Maybe.maybe(new Control_Monad_Rec_Class.Loop(Data_Unit.unit))(Control_Monad_Rec_Class.Done.create))(me);
            })(Data_Unit.unit);
        };
    };
};
var fuseWithL = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictFunctor2) {
            return function (dictMonadRec) {
                return function (zap) {
                    return function (fs) {
                        return function (gs) {
                            var go = function (v) {
                                return Control_Monad_Except_Trans.runExceptT(Control_Bind.bind(Control_Monad_Except_Trans.bindExceptT(dictMonadRec.Monad0()))(Control_Monad_Except_Trans.ExceptT(Control_Monad_Free_Trans.resume(dictFunctor)(dictMonadRec)(v.value0)))(function (v1) {
                                    return Control_Bind.bind(Control_Monad_Except_Trans.bindExceptT(dictMonadRec.Monad0()))(Control_Monad_Except_Trans.ExceptT(Control_Monad_Free_Trans.resume(dictFunctor1)(dictMonadRec)(v.value1)))(function (v2) {
                                        return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(dictMonadRec.Monad0()))(Data_Functor.map(dictFunctor2)(function (t) {
                                            return Control_Monad_Free_Trans.freeT(function (v3) {
                                                return go(t);
                                            });
                                        })(zap(Data_Tuple.Tuple.create)(v1)(v2)));
                                    });
                                }));
                            };
                            return Control_Monad_Free_Trans.freeT(function (v) {
                                return go(new Data_Tuple.Tuple(fs, gs));
                            });
                        };
                    };
                };
            };
        };
    };
};
var fuseWith = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictFunctor2) {
            return function (dictMonadRec) {
                return function (dictParallel) {
                    return function (zap) {
                        return function (fs) {
                            return function (gs) {
                                var go = function (v) {
                                    return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(Control_Parallel_Class.sequential(dictParallel)(Control_Apply.apply((dictParallel.Applicative1()).Apply0())(Data_Functor.map(((dictParallel.Applicative1()).Apply0()).Functor0())(Control_Apply.lift2(Data_Either.applyEither)(zap(Data_Tuple.Tuple.create)))(Control_Parallel_Class.parallel(dictParallel)(Control_Monad_Free_Trans.resume(dictFunctor)(dictMonadRec)(v.value0))))(Control_Parallel_Class.parallel(dictParallel)(Control_Monad_Free_Trans.resume(dictFunctor1)(dictMonadRec)(v.value1)))))(function (v1) {
                                        if (v1 instanceof Data_Either.Left) {
                                            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Data_Either.Left(v1.value0));
                                        };
                                        if (v1 instanceof Data_Either.Right) {
                                            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Data_Either.Right(Data_Functor.map(dictFunctor2)(function (t) {
                                                return Control_Monad_Free_Trans.freeT(function (v2) {
                                                    return go(t);
                                                });
                                            })(v1.value0)));
                                        };
                                        throw new Error("Failed pattern match at Control.Coroutine line 80, column 5 - line 82, column 63: " + [ v1.constructor.name ]);
                                    });
                                };
                                return Control_Monad_Free_Trans.freeT(function (v) {
                                    return go(new Data_Tuple.Tuple(fs, gs));
                                });
                            };
                        };
                    };
                };
            };
        };
    };
};
var functorAwait = new Data_Functor.Functor(Data_Profunctor.rmap(profunctorAwait));
var joinConsumers = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorAwait)(functorAwait)(functorAwait)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return function (v2) {
                        return f(v(v2.value0))(v1(v2.value1));
                    };
                };
            };
        });
    };
};
var bifunctorTransform = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return function ($187) {
                return Data_Bifunctor.bimap(Data_Tuple.bifunctorTuple)(f)(g)(v($187));
            };
        };
    };
});
var functorTransform = new Data_Functor.Functor(Data_Bifunctor.rmap(bifunctorTransform));
var composeTransformers = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorTransform)(functorTransform)(functorTransform)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return function (i) {
                        var v2 = v(i);
                        var v3 = v1(v2.value0);
                        return new Data_Tuple.Tuple(v3.value0, f(v2.value1)(v3.value1));
                    };
                };
            };
        });
    };
};
var transform = function (dictMonad) {
    return function (f) {
        return Control_Monad_Free_Trans.liftFreeT(functorTransform)(dictMonad)(function (i) {
            return new Data_Tuple.Tuple(f(i), Data_Unit.unit);
        });
    };
};
var transformConsumer = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorTransform)(functorAwait)(functorAwait)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return function (i) {
                        var v2 = v(i);
                        return f(v2.value1)(v1(v2.value0));
                    };
                };
            };
        });
    };
};
var bifunctorEmit = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return new Emit(f(v.value0), g(v.value1));
        };
    };
});
var functorEmit = new Data_Functor.Functor(Data_Bifunctor.rmap(bifunctorEmit));
var connect = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorEmit)(functorAwait)(Data_Identity.functorIdentity)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return f(v.value1)(v1(v.value0));
                };
            };
        });
    };
};
var emit = function (dictMonad) {
    return function (o) {
        return Control_Monad_Free_Trans.liftFreeT(functorEmit)(dictMonad)(new Emit(o, Data_Unit.unit));
    };
};
var joinProducers = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorEmit)(functorEmit)(functorEmit)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return new Emit(new Data_Tuple.Tuple(v.value0, v1.value0), f(v.value1)(v1.value1));
                };
            };
        });
    };
};
var producer = function (dictMonad) {
    return function (recv) {
        return loop(functorEmit)(dictMonad)(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(functorEmit)(dictMonad))(Control_Monad_Trans_Class.lift(Control_Monad_Free_Trans.monadTransFreeT(functorEmit))(dictMonad)(recv))(function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Functor.voidLeft(Control_Monad_Free_Trans.functorFreeT(functorEmit)(((dictMonad.Bind1()).Apply0()).Functor0()))(emit(dictMonad)(v.value0))(Data_Maybe.Nothing.value);
            };
            if (v instanceof Data_Either.Right) {
                return Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorEmit)(dictMonad))(new Data_Maybe.Just(v.value0));
            };
            throw new Error("Failed pattern match at Control.Coroutine line 126, column 3 - line 128, column 29: " + [ v.constructor.name ]);
        }));
    };
};
var pullFrom = function (dictMonadRec) {
    return fuseWithL(functorAwait)(functorEmit)(Data_Identity.functorIdentity)(dictMonadRec)(function (f) {
        return function (v) {
            return function (v1) {
                return Control_Applicative.pure(Data_Identity.applicativeIdentity)(f(v(v1.value0))(v1.value1));
            };
        };
    });
};
var transformProducer = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorEmit)(functorTransform)(functorEmit)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    var v2 = v1(v.value0);
                    return new Emit(v2.value0, f(v.value1)(v2.value1));
                };
            };
        });
    };
};
var bifunctorCoTransform = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return new CoTransform(f(v.value0), function ($188) {
                return g(v.value1($188));
            });
        };
    };
});
var functorCoTransform = new Data_Functor.Functor(Data_Bifunctor.rmap(bifunctorCoTransform));
var composeCoTransformers = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorCoTransform)(functorCoTransform)(functorCoTransform)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return new CoTransform(v1.value0, function (i) {
                        return f(v.value1(i))(v1.value1(v.value0));
                    });
                };
            };
        });
    };
};
var cotransform = function (dictMonad) {
    return function (o) {
        return Control_Monad_Free_Trans.freeT(function (v) {
            return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Either.Right(new CoTransform(o, Control_Applicative.pure(Control_Monad_Free_Trans.applicativeFreeT(functorCoTransform)(dictMonad)))));
        });
    };
};
var fuseCoTransform = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorTransform)(functorCoTransform)(Data_Identity.functorIdentity)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    var v2 = v(v1.value0);
                    return f(v2.value1)(v1.value1(v2.value0));
                };
            };
        });
    };
};
var transformCoTransformL = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorTransform)(functorCoTransform)(functorCoTransform)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    return new CoTransform(v1.value0, function (i1) {
                        var v2 = v(i1);
                        return f(v2.value1)(v1.value1(v2.value0));
                    });
                };
            };
        });
    };
};
var transformCoTransformR = function (dictMonadRec) {
    return function (dictParallel) {
        return fuseWith(functorCoTransform)(functorTransform)(functorCoTransform)(dictMonadRec)(dictParallel)(function (f) {
            return function (v) {
                return function (v1) {
                    var v2 = v1(v.value0);
                    return new CoTransform(v2.value0, function ($189) {
                        return (function (v3) {
                            return f(v3)(v2.value1);
                        })(v.value1($189));
                    });
                };
            };
        });
    };
};
var $$await = function (dictMonad) {
    return Control_Monad_Free_Trans.liftFreeT(functorAwait)(dictMonad)(Control_Category.id(Control_Category.categoryFn));
};
var consumer = function (dictMonad) {
    return function (send) {
        return loop(functorAwait)(dictMonad)(Control_Bind.bind(Control_Monad_Free_Trans.bindFreeT(functorAwait)(dictMonad))($$await(dictMonad))(function (v) {
            return Control_Monad_Trans_Class.lift(Control_Monad_Free_Trans.monadTransFreeT(functorAwait))(dictMonad)(send(v));
        }));
    };
};
module.exports = {
    Await: Await, 
    CoTransform: CoTransform, 
    Emit: Emit, 
    Transform: Transform, 
    "await": $$await, 
    composeCoTransformers: composeCoTransformers, 
    composeTransformers: composeTransformers, 
    connect: connect, 
    consumer: consumer, 
    cotransform: cotransform, 
    emit: emit, 
    fuseCoTransform: fuseCoTransform, 
    fuseWith: fuseWith, 
    fuseWithL: fuseWithL, 
    joinConsumers: joinConsumers, 
    joinProducers: joinProducers, 
    loop: loop, 
    producer: producer, 
    pullFrom: pullFrom, 
    runProcess: runProcess, 
    transform: transform, 
    transformCoTransformL: transformCoTransformL, 
    transformCoTransformR: transformCoTransformR, 
    transformConsumer: transformConsumer, 
    transformProducer: transformProducer, 
    bifunctorEmit: bifunctorEmit, 
    functorEmit: functorEmit, 
    profunctorAwait: profunctorAwait, 
    functorAwait: functorAwait, 
    bifunctorTransform: bifunctorTransform, 
    functorTransform: functorTransform, 
    bifunctorCoTransform: bifunctorCoTransform, 
    functorCoTransform: functorCoTransform
};
