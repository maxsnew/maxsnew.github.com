// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Argonaut_Core = require("../Data.Argonaut.Core");
var Data_Either = require("../Data.Either");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Generic = require("../Data.Generic");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Data_StrMap = require("../Data.StrMap");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var NTStationStatus = function (x) {
    return x;
};
var NTStationInformation = function (x) {
    return x;
};
var parseError = new Data_Either.Left("ParseError (sorry for the shitty error)");
var lookupField = function (err) {
    return function (fld) {
        return function (smap) {
            return Data_Maybe.maybe(new Data_Either.Left(err))(Data_Either.Right.create)(Data_StrMap.lookup(fld)(smap));
        };
    };
};
var lookupExpect = function (fld) {
    return lookupField("Expected object to contain " + (fld + " field"))(fld);
};
var genericNTStationStatus = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "GBFS.NTStationStatus" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(NTStationStatus))((function (r) {
            if (r instanceof Data_Generic.SRecord && r.value0.length === 7) {
                return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(function (is__installed1) {
                    return function (is__renting1) {
                        return function (is__returning1) {
                            return function (last__reported1) {
                                return function (num__bikes__available1) {
                                    return function (num__docks__available1) {
                                        return function (station__id1) {
                                            return {
                                                is_installed: is__installed1, 
                                                is_renting: is__renting1, 
                                                is_returning: is__returning1, 
                                                last_reported: last__reported1, 
                                                num_bikes_available: num__bikes__available1, 
                                                num_docks_available: num__docks__available1, 
                                                station_id: station__id1
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                }))(Data_Generic.fromSpine(Data_Generic.genericBool)(r["value0"][0].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericBool)(r["value0"][1].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericBool)(r["value0"][2].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericNumber)(r["value0"][3].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericInt)(r["value0"][4].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericInt)(r["value0"][5].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericString)(r["value0"][6].recValue(Data_Unit.unit)));
            };
            return Data_Maybe.Nothing.value;
        })(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("GBFS.NTStationStatus", [ {
        sigConstructor: "GBFS.NTStationStatus", 
        sigValues: [ function ($dollarq1) {
            return new Data_Generic.SigRecord([ {
                recLabel: "is_installed", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericBool)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "is_renting", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericBool)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "is_returning", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericBool)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "last_reported", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericNumber)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "num_bikes_available", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericInt)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "num_docks_available", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericInt)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "station_id", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
                }
            } ]);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("GBFS.NTStationStatus", [ function ($dollarq) {
        return new Data_Generic.SRecord([ {
            recLabel: "is_installed", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericBool)(v.is_installed);
            }
        }, {
            recLabel: "is_renting", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericBool)(v.is_renting);
            }
        }, {
            recLabel: "is_returning", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericBool)(v.is_returning);
            }
        }, {
            recLabel: "last_reported", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericNumber)(v.last_reported);
            }
        }, {
            recLabel: "num_bikes_available", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericInt)(v.num_bikes_available);
            }
        }, {
            recLabel: "num_docks_available", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericInt)(v.num_docks_available);
            }
        }, {
            recLabel: "station_id", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericString)(v.station_id);
            }
        } ]);
    } ]);
});
var showNTStationStatus = new Data_Show.Show(Data_Generic.gShow(genericNTStationStatus));
var genericNTStationInformation = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "GBFS.NTStationInformation" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(NTStationInformation))((function (r) {
            if (r instanceof Data_Generic.SRecord && r.value0.length === 5) {
                return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(function (lat1) {
                    return function (lon1) {
                        return function (name1) {
                            return function (short__name1) {
                                return function (station__id1) {
                                    return {
                                        lat: lat1, 
                                        lon: lon1, 
                                        name: name1, 
                                        short_name: short__name1, 
                                        station_id: station__id1
                                    };
                                };
                            };
                        };
                    };
                }))(Data_Generic.fromSpine(Data_Generic.genericNumber)(r["value0"][0].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericNumber)(r["value0"][1].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericString)(r["value0"][2].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericString)(r["value0"][3].recValue(Data_Unit.unit))))(Data_Generic.fromSpine(Data_Generic.genericString)(r["value0"][4].recValue(Data_Unit.unit)));
            };
            return Data_Maybe.Nothing.value;
        })(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("GBFS.NTStationInformation", [ {
        sigConstructor: "GBFS.NTStationInformation", 
        sigValues: [ function ($dollarq1) {
            return new Data_Generic.SigRecord([ {
                recLabel: "lat", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericNumber)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "lon", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericNumber)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "name", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "short_name", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
                }
            }, {
                recLabel: "station_id", 
                recValue: function ($dollarq2) {
                    return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
                }
            } ]);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("GBFS.NTStationInformation", [ function ($dollarq) {
        return new Data_Generic.SRecord([ {
            recLabel: "lat", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericNumber)(v.lat);
            }
        }, {
            recLabel: "lon", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericNumber)(v.lon);
            }
        }, {
            recLabel: "name", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericString)(v.name);
            }
        }, {
            recLabel: "short_name", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericString)(v.short_name);
            }
        }, {
            recLabel: "station_id", 
            recValue: function ($dollarq1) {
                return Data_Generic.toSpine(Data_Generic.genericString)(v.station_id);
            }
        } ]);
    } ]);
});
var showNTStationInformation = new Data_Show.Show(Data_Generic.gShow(genericNTStationInformation));
var expectedArrayOf = function (s) {
    return Data_Either.Left.create("Expected Array of " + s);
};
var expected = function (s) {
    return new Data_Either.Left("");
};
var parseBool = (function () {
    var numToBool = function (n) {
        return n !== 0.0;
    };
    return Data_Argonaut_Core.foldJsonNumber(expected("boolean"))(function ($64) {
        return Control_Applicative.pure(Data_Either.applicativeEither)(numToBool($64));
    });
})();
var parseNumber = Data_Argonaut_Core.foldJsonNumber(expected("number"))(Control_Applicative.pure(Data_Either.applicativeEither));
var parseGbfs = (function () {
    var expectedObject = new Data_Either.Left("Expected GBFS data object");
    return Data_Argonaut_Core.foldJsonObject(expectedObject)(function (smap) {
        return Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Data_Functor.map(Data_Either.functorEither)(function (v) {
            return function (v1) {
                return function (v2) {
                    return {
                        last_updated: v, 
                        ttl: v1, 
                        "data'": v2
                    };
                };
            };
        })(Control_Bind.bindFlipped(Data_Either.bindEither)(parseNumber)(lookupExpect("last_updated")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseNumber)(lookupExpect("ttl")(smap))))(lookupExpect("data")(smap));
    });
})();
var parseStationData = function (parseData) {
    return function (js) {
        var expectedObject = new Data_Either.Left("Expected Object with stations field");
        return Control_Bind.bind(Data_Either.bindEither)(parseGbfs(js))(function (v) {
            return Control_Bind.bind(Data_Either.bindEither)(Data_Argonaut_Core.foldJsonObject(expectedObject)(lookupExpect("stations"))(v["data'"]))(function (v1) {
                return Control_Bind.bind(Data_Either.bindEither)(parseData(v1))(function (v2) {
                    return Control_Applicative.pure(Data_Either.applicativeEither)((function () {
                        var $58 = {};
                        for (var $59 in v) {
                            if ({}.hasOwnProperty.call(v, $59)) {
                                $58[$59] = v[$59];
                            };
                        };
                        $58["data'"] = v2;
                        return $58;
                    })());
                });
            });
        });
    };
};
var $$parseInt = function (js) {
    return Control_Bind.bind(Data_Either.bindEither)(parseNumber(js))(function (v) {
        var v1 = Data_Int.fromNumber(v);
        if (v1 instanceof Data_Maybe.Nothing) {
            return expected("Int, got Number");
        };
        if (v1 instanceof Data_Maybe.Just) {
            return new Data_Either.Right(v1.value0);
        };
        throw new Error("Failed pattern match at GBFS line 154, column 3 - line 156, column 22: " + [ v1.constructor.name ]);
    });
};
var parseStr = Data_Argonaut_Core.foldJsonString(expected("string"))(Control_Applicative.pure(Data_Either.applicativeEither));
var parseStationId = parseStr;
var parseStationStatus = Data_Argonaut_Core.foldJsonObject(new Data_Either.Left("Expected StationStatus"))(function (smap) {
    return Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Data_Functor.map(Data_Either.functorEither)(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return function (v6) {
                                return {
                                    station_id: v, 
                                    num_bikes_available: v1, 
                                    num_docks_available: v2, 
                                    is_renting: v3, 
                                    is_installed: v4, 
                                    is_returning: v5, 
                                    last_reported: v6
                                };
                            };
                        };
                    };
                };
            };
        };
    })(Control_Bind.bindFlipped(Data_Either.bindEither)(parseStationId)(lookupExpect("station_id")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)($$parseInt)(lookupExpect("num_bikes_available")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)($$parseInt)(lookupExpect("num_docks_available")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseBool)(lookupExpect("is_renting")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseBool)(lookupExpect("is_installed")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseBool)(lookupExpect("is_returning")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseNumber)(lookupExpect("last_reported")(smap)));
});
var parseStationStatuses = parseStationData(Data_Argonaut_Core.foldJsonArray(expectedArrayOf("StationStatuses"))(Data_Traversable.traverse(Data_Traversable.traversableArray)(Data_Either.applicativeEither)(parseStationStatus)));
var parseStationInfo = Data_Argonaut_Core.foldJsonObject(new Data_Either.Left("Expected StationInfo"))(function (smap) {
    return Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Control_Apply.apply(Data_Either.applyEither)(Data_Functor.map(Data_Either.functorEither)(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return {
                            station_id: v, 
                            name: v1, 
                            short_name: v2, 
                            lat: v3, 
                            lon: v4
                        };
                    };
                };
            };
        };
    })(Control_Bind.bindFlipped(Data_Either.bindEither)(parseStationId)(lookupExpect("station_id")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseStr)(lookupExpect("name")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseStr)(lookupExpect("short_name")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseNumber)(lookupExpect("lat")(smap))))(Control_Bind.bindFlipped(Data_Either.bindEither)(parseNumber)(lookupExpect("lon")(smap)));
});
var parseStationInfos = parseStationData(Data_Argonaut_Core.foldJsonArray(expectedArrayOf("StationInfos"))(Data_Traversable.traverse(Data_Traversable.traversableArray)(Data_Either.applicativeEither)(parseStationInfo)));
module.exports = {
    NTStationInformation: NTStationInformation, 
    NTStationStatus: NTStationStatus, 
    expected: expected, 
    expectedArrayOf: expectedArrayOf, 
    lookupExpect: lookupExpect, 
    lookupField: lookupField, 
    parseBool: parseBool, 
    parseError: parseError, 
    parseGbfs: parseGbfs, 
    "parseInt": $$parseInt, 
    parseNumber: parseNumber, 
    parseStationData: parseStationData, 
    parseStationId: parseStationId, 
    parseStationInfo: parseStationInfo, 
    parseStationInfos: parseStationInfos, 
    parseStationStatus: parseStationStatus, 
    parseStationStatuses: parseStationStatuses, 
    parseStr: parseStr, 
    genericNTStationStatus: genericNTStationStatus, 
    showNTStationStatus: showNTStationStatus, 
    genericNTStationInformation: genericNTStationInformation, 
    showNTStationInformation: showNTStationInformation
};
