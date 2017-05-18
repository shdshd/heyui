webpackJsonp([47],{520:function(t,e,_){var v=_(0)(null,_(958),null,null);v.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/plugin/dropdownmenu.vue",v.esModule&&Object.keys(v.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),v.options.functional&&console.error("[vue-loader] dropdownmenu.vue: functional components are not supported with templates, they should use render functions."),t.exports=v.exports},958:function(t,e,_){t.exports={render:function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"doc"},[_("h2",[t._v("DropdownMenu 下拉菜单")]),t._v(" "),_("h3",[t._v("基本调用")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu1"}}),t._v(" "),_("h3",[t._v("不同参数调用")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu2"}}),t._v(" "),_("h3",[t._v("组合调用")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu9"}}),t._v(" "),_("h3",[t._v("不同位置")]),t._v(" "),t._m(0),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu3"}}),t._v(" "),_("h3",[t._v("不同的触发方式")]),t._v(" "),t._m(1),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu4"}}),t._v(" "),_("h3",[t._v("不默认添加右侧的icon")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu5"}}),t._v(" "),_("h3",[t._v("和dom同样宽度")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu6"}}),t._v(" "),_("h3",[t._v("自定义宽度")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu7"}}),t._v(" "),_("h3",[t._v("添加未读数")]),t._v(" "),_("example",{attrs:{demo:"plugins/dropdownmenu8"}}),t._v(" "),_("h3",[t._v("DropdownMenu 参数")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("placement")]),t._v(": top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("trigger")]),t._v(": hover, click")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("datas")]),t._v(" "),_("td",[t._v("选择的数据")]),t._v(" "),_("td",[t._v("Array, Object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("dict")]),t._v(" "),_("td",[t._v("调用全局定义的字典")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("trigger")]),t._v(" "),_("td",[t._v("触发方式")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("click, hover")]),t._v(" "),_("td",[t._v("click")])]),t._v(" "),_("tr",[_("td",[t._v("equalWidth")]),t._v(" "),_("td",[t._v("是否和触发的dom等宽")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("是否禁用")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("toggleIcon")]),t._v(" "),_("td",[t._v("是否显示展示状态的icon")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("true")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("自定义menu的宽度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("placement")]),t._v(" "),_("td",[t._v("menu显示的位置")]),t._v(" "),_("td",[t._v("Stirng")]),t._v(" "),_("td",[t._v("top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end")]),t._v(" "),_("td",[t._v("bottom-start")])]),t._v(" "),_("tr",[_("td",[t._v("showCount")]),t._v(" "),_("td",[t._v("menu是否显示未读标志数")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("maxCount")]),t._v(" "),_("td",[t._v("未读标志数最大数字")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("99")])])])}]},t.exports.render._withStripped=!0}});