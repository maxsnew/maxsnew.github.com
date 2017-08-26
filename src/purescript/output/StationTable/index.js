// Generated by purs version 0.11.6
"use strict";
var Common = require("../Common");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var Data_Array = require("../Data.Array");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Halogen = require("../Halogen");
var Halogen_Component = require("../Halogen.Component");
var Halogen_HTML = require("../Halogen.HTML");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Halogen_HTML_Events = require("../Halogen.HTML.Events");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var NewData = (function () {
    function NewData(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    NewData.create = function (value0) {
        return function (value1) {
            return new NewData(value0, value1);
        };
    };
    return NewData;
})();
var IncLimit = (function () {
    function IncLimit(value0) {
        this.value0 = value0;
    };
    IncLimit.create = function (value0) {
        return new IncLimit(value0);
    };
    return IncLimit;
})();
var ResetLimit = (function () {
    function ResetLimit(value0) {
        this.value0 = value0;
    };
    ResetLimit.create = function (value0) {
        return new ResetLimit(value0);
    };
    return ResetLimit;
})();
var renderStation = function (s) {
    return Halogen_HTML_Elements.tr_(Data_Functor.map(Data_Functor.functorArray)(function ($18) {
        return Halogen_HTML_Elements.td_(Control_Applicative.pure(Control_Applicative.applicativeArray)(Halogen_HTML_Core.text($18)));
    })([ s.info.name, Data_Show.show(Data_Show.showInt)(s.status.num_bikes_available), Data_Show.show(Data_Show.showInt)(s.status.num_docks_available) ]));
};
var renderStations = function (dat) {
    return Halogen_HTML_Elements.tbody_(Data_Functor.map(Data_Functor.functorArray)(renderStation)(dat));
};
var proximity = function (p1) {
    return function (p2) {
        return $$Math.pow(p1.lat - p2.lat)(2.0) + $$Math.pow(p1.lon - p2.lon)(2.0);
    };
};
var mkTableData = function (s) {
    return {
        place: s.place, 
        stations: s.stations, 
        initLimit: s.initLimit, 
        limit: s.initLimit
    };
};
var header = Halogen_HTML_Elements.thead_([ Halogen_HTML_Elements.tr_(Data_Functor.map(Data_Functor.functorArray)(function ($19) {
    return Halogen_HTML_Elements.th_(Control_Applicative.pure(Control_Applicative.applicativeArray)(Halogen_HTML_Core.text($19)));
})([ "Station", "Bikes", "Vacancies" ])) ]);
var stationTable = (function () {
    var render = function (st) {
        var proximityToPlace = function (dat) {
            return proximity(st.place)(dat.info);
        };
        var nearbyStations = Data_Array.take(st.limit)(Data_Array.sortWith(Data_Ord.ordNumber)(proximityToPlace)(st.stations));
        return Halogen_HTML_Elements.div_([ Halogen_HTML_Elements.h2_([ Halogen_HTML_Core.text("Places near " + st.place.name) ]), Halogen_HTML_Elements.table_([ header, renderStations(nearbyStations) ]), Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title("press for more"), Halogen_HTML_Events.onClick(Halogen_HTML_Events.input_(IncLimit.create)) ])([ Halogen_HTML_Core.text("press for more") ]), Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title("reset"), Halogen_HTML_Events.onClick(Halogen_HTML_Events.input_(ResetLimit.create)) ])([ Halogen_HTML_Core.text("reset") ]) ]);
    };
    var $$eval = function (v) {
        if (v instanceof NewData) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (st) {
                var $5 = {};
                for (var $6 in st) {
                    if ({}.hasOwnProperty.call(st, $6)) {
                        $5[$6] = st[$6];
                    };
                };
                $5.stations = v.value0;
                return $5;
            }))(function () {
                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
            });
        };
        if (v instanceof IncLimit) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (st) {
                var $10 = {};
                for (var $11 in st) {
                    if ({}.hasOwnProperty.call(st, $11)) {
                        $10[$11] = st[$11];
                    };
                };
                $10.limit = st.limit + 5 | 0;
                return $10;
            }))(function () {
                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
            });
        };
        if (v instanceof ResetLimit) {
            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (st) {
                var $14 = {};
                for (var $15 in st) {
                    if ({}.hasOwnProperty.call(st, $15)) {
                        $14[$15] = st[$15];
                    };
                };
                $14.limit = st.initLimit;
                return $14;
            }))(function () {
                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
            });
        };
        throw new Error("Failed pattern match at StationTable line 65, column 10 - line 76, column 16: " + [ v.constructor.name ]);
    };
    return Halogen_Component.component(Halogen_HTML_Core.bifunctorHTML)({
        initialState: function (x) {
            return x;
        }, 
        render: render, 
        "eval": $$eval, 
        receiver: Data_Function["const"](Data_Maybe.Nothing.value)
    });
})();
module.exports = {
    NewData: NewData, 
    IncLimit: IncLimit, 
    ResetLimit: ResetLimit, 
    mkTableData: mkTableData, 
    stationTable: stationTable
};
