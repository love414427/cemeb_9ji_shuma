(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/assist/index"],{"0aa3":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("041f"),s=n("6859"),a=n("26cb"),c=n("3255"),u=n("f26a"),r={components:{home:function(){n.e("components/home/index").then(function(){return resolve(n("4cc1"))}.bind(null,n)).catch(n.oe)},passwordPopup:function(){Promise.all([n.e("common/vendor"),n.e("components/passwordPopup/index")]).then(function(){return resolve(n("5edd"))}.bind(null,n)).catch(n.oe)},authorize:function(){Promise.all([n.e("common/vendor"),n.e("components/Authorize")]).then(function(){return resolve(n("02f6"))}.bind(null,n)).catch(n.oe)}},data:function(){return{domain:u.HTTP_REQUEST_URL+"/static/diy/",topImage:"",assistList:[],active:0,type:0,scrollLeft:0,interval:0,status:1,page:1,limit:10,loading:!1,loadend:!1,pageloading:!1,userInfo:{},isAuto:!1,isShowAuth:!1}},onShareAppMessage:function(){return t.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),{title:"助力活动",path:"pages/activity/assist/index"}},onShareTimeline:function(){return{title:"助力活动",query:{key:""},imageUrl:""}},computed:(0,c.configMap)({statusBarHeight:0},(0,a.mapGetters)(["isLogin","viewColor","keyColor"])),watch:{isLogin:{handler:function(t,e){t&&(this.getUserInfo(),this.getAssistProductList())},deep:!0}},onLoad:function(){this.getAssistProductList(),this.isLogin&&this.getUserInfo()},methods:{goBack:function(){i.navigateBack()},onLoadFun:function(t){this.getUserInfo(),this.isShowAuth=!1},getAssistProductList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(t.pageloading=!0,(0,o.getAssistList)(e).then((function(e){var n=e.data.list,o=n.length<t.limit;t.page++,t.assistList=t.assistList.concat(n),i.stopPullDownRefresh(),t.pageloading=!1,t.loadend=o})).catch((function(e){t.pageloading=!1})))},openSubscribe:function(t){this.isLogin?(0,o.initiateAssistApi)(t).then((function(t){var e=t.data.product_assist_set_id;i.hideLoading(),i.navigateTo({url:"/pages/activity/assist_detail/index?id="+e})})).catch((function(t){i.showToast({title:t,icon:"none"})})):(this.isAuto=!0,this.isShowAuth=!0)},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){t.$set(t,"userInfo",e.data)}))}},onPullDownRefresh:function(){this.page=1,this.pageloading=!1,this.loadend=!1,this.assistList=[],this.getAssistProductList()},onReachBottom:function(){this.getAssistProductList()}};e.default=r}).call(this,n("bc2e")["default"],n("543d")["default"])},"50d1":function(t,e,n){"use strict";n.r(e);var i=n("841b"),o=n("e612");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("5c18");var a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},"5a3d":function(t,e,n){},"5c18":function(t,e,n){"use strict";var i=n("5a3d"),o=n.n(i);o.a},"841b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]},c76b:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4c7d");i(n("66fd"));var o=i(n("50d1"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},e612:function(t,e,n){"use strict";n.r(e);var i=n("0aa3"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a}},[["c76b","common/runtime","common/vendor"]]]);