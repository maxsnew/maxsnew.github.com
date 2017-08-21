// Generated by purs version 0.11.6
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM_HTML_Indexed = require("../DOM.HTML.Indexed");
var DOM_HTML_Indexed_ButtonType = require("../DOM.HTML.Indexed.ButtonType");
var DOM_HTML_Indexed_FormMethod = require("../DOM.HTML.Indexed.FormMethod");
var DOM_HTML_Indexed_InputType = require("../DOM.HTML.Indexed.InputType");
var DOM_HTML_Indexed_MenuType = require("../DOM.HTML.Indexed.MenuType");
var DOM_HTML_Indexed_MenuitemType = require("../DOM.HTML.Indexed.MenuitemType");
var DOM_HTML_Indexed_OnOff = require("../DOM.HTML.Indexed.OnOff");
var DOM_HTML_Indexed_OrderedListType = require("../DOM.HTML.Indexed.OrderedListType");
var DOM_HTML_Indexed_PreloadValue = require("../DOM.HTML.Indexed.PreloadValue");
var DOM_HTML_Indexed_StepValue = require("../DOM.HTML.Indexed.StepValue");
var DOM_Node_Types = require("../DOM.Node.Types");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_MediaType = require("../Data.MediaType");
var Data_Newtype = require("../Data.Newtype");
var Data_String = require("../Data.String");
var Data_Unit = require("../Data.Unit");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_Query_InputF = require("../Halogen.Query.InputF");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var IProp = function (x) {
    return x;
};
var ref = (function () {
    var go = function (p) {
        return function (mel) {
            return Data_Maybe.Just.create(new Halogen_Query_InputF.RefUpdate(p, Data_Functor.map(Data_Maybe.functorMaybe)(Data_Foreign.toForeign)(mel), Data_Unit.unit));
        };
    };
    return function ($6) {
        return Unsafe_Coerce.unsafeCoerce(Halogen_HTML_Core.ref)(go($6));
    };
})();
var prop = function (dictIsProp) {
    return Unsafe_Coerce.unsafeCoerce(Halogen_HTML_Core.prop(dictIsProp));
};
var readOnly = prop(Halogen_HTML_Core.booleanIsProp)("readOnly");
var rel = prop(Halogen_HTML_Core.stringIsProp)("rel");
var required = prop(Halogen_HTML_Core.booleanIsProp)("required");
var rowSpan = prop(Halogen_HTML_Core.intIsProp)("rowSpan");
var rows = prop(Halogen_HTML_Core.intIsProp)("rows");
var selected = prop(Halogen_HTML_Core.booleanIsProp)("selected");
var spellcheck = prop(Halogen_HTML_Core.booleanIsProp)("spellcheck");
var src = prop(Halogen_HTML_Core.stringIsProp)("src");
var step = prop(Halogen_HTML_Core.stepValueIsProp)("step");
var tabIndex = prop(Halogen_HTML_Core.intIsProp)("tabIndex");
var target = prop(Halogen_HTML_Core.stringIsProp)("target");
var title = prop(Halogen_HTML_Core.stringIsProp)("title");
var type_ = function (dictIsProp) {
    return prop(dictIsProp)("type");
};
var value = prop(Halogen_HTML_Core.stringIsProp)("value");
var width = prop(Halogen_HTML_Core.intIsProp)("width");
var preload = prop(Halogen_HTML_Core.preloadValueIsProp)("preload");
var poster = prop(Halogen_HTML_Core.stringIsProp)("poster");
var placeholder = prop(Halogen_HTML_Core.stringIsProp)("placeholder");
var pattern = prop(Halogen_HTML_Core.stringIsProp)("pattern");
var noValidate = prop(Halogen_HTML_Core.booleanIsProp)("noValidate");
var newtypeIProp = new Data_Newtype.Newtype(function (n) {
    return n;
}, IProp);
var name = prop(Halogen_HTML_Core.stringIsProp)("name");
var muted = prop(Halogen_HTML_Core.booleanIsProp)("muted");
var multiple = prop(Halogen_HTML_Core.booleanIsProp)("multiple");
var min = prop(Halogen_HTML_Core.numberIsProp)("min");
var method = prop(Halogen_HTML_Core.formMethodIsProp)("method");
var max = prop(Halogen_HTML_Core.numberIsProp)("max");
var loop = prop(Halogen_HTML_Core.booleanIsProp)("loop");
var id_ = prop(Halogen_HTML_Core.stringIsProp)("id");
var href = prop(Halogen_HTML_Core.stringIsProp)("href");
var height = prop(Halogen_HTML_Core.intIsProp)("height");
var $$for = prop(Halogen_HTML_Core.stringIsProp)("htmlFor");
var enctype = prop(Halogen_HTML_Core.mediaTypeIsProp)("enctype");
var draggable = prop(Halogen_HTML_Core.booleanIsProp)("draggable");
var disabled = prop(Halogen_HTML_Core.booleanIsProp)("disabled");
var enabled = function ($7) {
    return disabled(!$7);
};
var controls = prop(Halogen_HTML_Core.booleanIsProp)("controls");
var cols = prop(Halogen_HTML_Core.intIsProp)("cols");
var colSpan = prop(Halogen_HTML_Core.intIsProp)("colSpan");
var classes = function ($8) {
    return prop(Halogen_HTML_Core.stringIsProp)("className")(Data_String.joinWith(" ")(Data_Functor.map(Data_Functor.functorArray)(Data_Newtype.unwrap(Halogen_HTML_Core.newtypeClassName))($8)));
};
var class_ = function ($9) {
    return prop(Halogen_HTML_Core.stringIsProp)("className")(Data_Newtype.unwrap(Halogen_HTML_Core.newtypeClassName)($9));
};
var checked = prop(Halogen_HTML_Core.booleanIsProp)("checked");
var charset = prop(Halogen_HTML_Core.stringIsProp)("charset");
var autoplay = prop(Halogen_HTML_Core.booleanIsProp)("autoplay");
var autofocus = prop(Halogen_HTML_Core.booleanIsProp)("autofocus");
var autocomplete = function ($10) {
    return prop(Halogen_HTML_Core.onOffIsProp)("autocomplete")((function (b) {
        if (b) {
            return DOM_HTML_Indexed_OnOff.On.value;
        };
        return DOM_HTML_Indexed_OnOff.Off.value;
    })($10));
};
var attrNS = function ($11) {
    return Unsafe_Coerce.unsafeCoerce(Halogen_HTML_Core.attr(Control_Applicative.pure(Data_Maybe.applicativeMaybe)($11)));
};
var attr = Unsafe_Coerce.unsafeCoerce(Halogen_HTML_Core.attr(Data_Maybe.Nothing.value));
var alt = prop(Halogen_HTML_Core.stringIsProp)("alt");
var action = prop(Halogen_HTML_Core.stringIsProp)("action");
var accept = prop(Halogen_HTML_Core.mediaTypeIsProp)("accept");
module.exports = {
    IProp: IProp, 
    accept: accept, 
    action: action, 
    alt: alt, 
    attr: attr, 
    attrNS: attrNS, 
    autocomplete: autocomplete, 
    autofocus: autofocus, 
    autoplay: autoplay, 
    charset: charset, 
    checked: checked, 
    class_: class_, 
    classes: classes, 
    colSpan: colSpan, 
    cols: cols, 
    controls: controls, 
    disabled: disabled, 
    draggable: draggable, 
    enabled: enabled, 
    enctype: enctype, 
    "for": $$for, 
    height: height, 
    href: href, 
    id_: id_, 
    loop: loop, 
    max: max, 
    method: method, 
    min: min, 
    multiple: multiple, 
    muted: muted, 
    name: name, 
    noValidate: noValidate, 
    pattern: pattern, 
    placeholder: placeholder, 
    poster: poster, 
    preload: preload, 
    prop: prop, 
    readOnly: readOnly, 
    ref: ref, 
    rel: rel, 
    required: required, 
    rowSpan: rowSpan, 
    rows: rows, 
    selected: selected, 
    spellcheck: spellcheck, 
    src: src, 
    step: step, 
    tabIndex: tabIndex, 
    target: target, 
    title: title, 
    type_: type_, 
    value: value, 
    width: width, 
    newtypeIProp: newtypeIProp
};
