(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/feedback/list"],{8271:function(t,e,n){},"924d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.list.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},a=[]},"934d":function(t,e,n){"use strict";var i=n("8271"),a=n.n(i);a.a},"946b":function(t,e,n){"use strict";n.r(e);var i=n("dac8"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},b978:function(t,e,n){"use strict";n.r(e);var i=n("924d"),a=n("946b");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("934d");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},d113:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4c7d");i(n("66fd"));var a=i(n("b978"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},dac8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("6859"),a=n("26cb"),c={components:{emptyPage:function(){n.e("components/emptyPage").then(function(){return resolve(n("c71c"))}.bind(null,n)).catch(n.oe)}},computed:(0,a.mapGetters)(["viewColor"]),data:function(){return{list:[],page:1,limit:10,isScroll:!0}},onLoad:function(){this.getList()},methods:{getList:function(){var t=this;this.isScroll&&(0,i.feedbackList)({page:this.page,limit:this.limit}).then((function(e){var n=e.data;t.isScroll=n.list.length>=t.limit,t.list=t.list.concat(n.list),t.page+=1}))},goDetail:function(e){t.navigateTo({url:"/pages/users/feedback/detail?id="+e.feedback_id})}},onReachBottom:function(){this.getList()}};e.default=c}).call(this,n("543d")["default"])}},[["d113","common/runtime","common/vendor"]]]);