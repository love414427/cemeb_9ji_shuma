(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/privacyAgreementPopup/index"],{"2fed":function(e,t,n){},"4ca9":function(e,t,n){"use strict";var r=n("5bf0"),c=n.n(r);c.a},"5bf0":function(e,t,n){},"67e0":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},c=[]},"7a9b":function(e,t,n){"use strict";n.r(t);var r=n("67e0"),c=n("c2fa");for(var o in c)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(o);n("ed0c"),n("4ca9");var i=n("f0c5"),a=Object(i["a"])(c["default"],r["b"],r["c"],!1,null,"b5b9cdd2",null,!1,r["a"],void 0);t["default"]=a.exports},9544:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n("9523")),o=n("26cb"),i=n("3255");r(n("823f")),n("cd6d");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}getApp();var u={data:function(){return{isShow:!1,agreementName:"",mpData:e.getStorageSync("copyRight")}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,i.configMap)({site_name:""},(0,o.mapGetters)(["viewColor"]))),mounted:function(){},methods:{showPoupon:function(e){this.isShow=!0,this.agreementName=e},handleAgree:function(){this.isShow=!1,this.$emit("onclose")},rejectAgreement:function(){this.isShow=!1,this.$emit("onReject")},privacy:function(t){e.navigateTo({url:"/pages/users/privacy/index?type="+t})}}};t.default=u}).call(this,n("543d")["default"])},c2fa:function(e,t,n){"use strict";n.r(t);var r=n("9544"),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=c.a},ed0c:function(e,t,n){"use strict";var r=n("2fed"),c=n.n(r);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/privacyAgreementPopup/index-create-component',
    {
        'components/privacyAgreementPopup/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7a9b"))
        })
    },
    [['components/privacyAgreementPopup/index-create-component']]
]);
