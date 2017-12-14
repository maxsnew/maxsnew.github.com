// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Ref = require("../Control.Monad.Eff.Ref");
var Data_Foldable = require("../Data.Foldable");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Map = require("../Data.Map");
var Data_Maybe = require("../Data.Maybe");
var Data_StrMap = require("../Data.StrMap");
var Data_Traversable = require("../Data.Traversable");
var Halogen_Aff_Effects = require("../Halogen.Aff.Effects");
var Halogen_Component = require("../Halogen.Component");
var Halogen_Data_OrdBox = require("../Halogen.Data.OrdBox");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var DriverState = function (x) {
    return x;
};
var unRenderStateX = Unsafe_Coerce.unsafeCoerce;
var unDriverStateX = Unsafe_Coerce.unsafeCoerce;
var renderStateX_ = function (dictApplicative) {
    return function (f) {
        return unDriverStateX(function (st) {
            return Data_Foldable.traverse_(dictApplicative)(Data_Foldable.foldableMaybe)(f)(st.rendering);
        });
    };
};
var mkRenderStateX = function (v) {
    return Unsafe_Coerce.unsafeCoerce;
};
var renderStateX = function (dictFunctor) {
    return function (f) {
        return unDriverStateX(function (st) {
            return mkRenderStateX(st.prjQuery)(f(st.rendering));
        });
    };
};
var mkDriverStateXRef = Unsafe_Coerce.unsafeCoerce;
var initDriverState = function (component) {
    return function (input) {
        return function (handler) {
            return function (prjQuery) {
                return function (lchs) {
                    return function __do() {
                        var v = Control_Monad_Eff_Ref.newRef(Unsafe_Coerce.unsafeCoerce({}))();
                        var v1 = Control_Monad_Eff_Ref.newRef(Data_Map.empty)();
                        var v2 = Control_Monad_Eff_Ref.newRef(Data_Map.empty)();
                        var v3 = Control_Monad_Eff_Ref.newRef(Data_Functor.voidLeft(Data_Maybe.functorMaybe)(component.initializer)(Data_List_Types.Nil.value))();
                        var v4 = Control_Monad_Eff_Ref.newRef(new Data_Maybe.Just(Data_List_Types.Nil.value))();
                        var v5 = Control_Monad_Eff_Ref.newRef(Data_Maybe.Nothing.value)();
                        var v6 = Control_Monad_Eff_Ref.newRef(0)();
                        var v7 = Control_Monad_Eff_Ref.newRef(new Data_Maybe.Just(Data_Map.empty))();
                        var ds = {
                            component: component, 
                            state: component.initialState(input), 
                            refs: Data_StrMap.empty, 
                            children: Data_Map.empty, 
                            childrenIn: v1, 
                            childrenOut: v2, 
                            selfRef: v, 
                            handler: handler, 
                            pendingQueries: v3, 
                            pendingOuts: v4, 
                            pendingHandlers: v5, 
                            rendering: Data_Maybe.Nothing.value, 
                            prjQuery: prjQuery, 
                            fresh: v6, 
                            subscriptions: v7, 
                            lifecycleHandlers: lchs
                        };
                        Control_Monad_Eff_Ref.writeRef(v)(ds)();
                        return mkDriverStateXRef(v);
                    };
                };
            };
        };
    };
};
module.exports = {
    DriverState: DriverState, 
    initDriverState: initDriverState, 
    mkDriverStateXRef: mkDriverStateXRef, 
    renderStateX: renderStateX, 
    renderStateX_: renderStateX_, 
    unDriverStateX: unDriverStateX, 
    unRenderStateX: unRenderStateX
};
