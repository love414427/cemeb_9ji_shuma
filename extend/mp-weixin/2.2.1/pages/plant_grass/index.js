(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plant_grass/index"],{"27a4":function(t,e,o){"use strict";(function(t,e){var i=o("4ea4");o("4c7d");i(o("66fd"));var n=i(o("9272"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(n.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},6248:function(t,e,o){},"8c01":function(t,e,o){"use strict";var i=o("6248"),n=o.n(i);n.a},9272:function(t,e,o){"use strict";o.r(e);var i=o("afff"),n=o("d407");for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("8c01");var a=o("f0c5"),r=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,"6443e3bd",null,!1,i["a"],void 0);e["default"]=r.exports},afff:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return i}));var i={easyLoadimage:function(){return Promise.all([o.e("common/vendor"),o.e("components/easy-loadimage/easy-loadimage")]).then(o.bind(null,"2243"))},WaterfallsFlow:function(){return o.e("components/WaterfallsFlow/WaterfallsFlow").then(o.bind(null,"7612"))}},n=function(){var t=this,e=t.$createElement,o=(t._self._c,0===t.tabActive?t.isLogin&&t.followList.length>0:null),i=0===t.tabActive&&o?t.__map(t.followList,(function(e,o){var i=t.__get_orig(e),n=e.relevance&&e.relevance.length>0,s=n?e.relevance.length:null,a=!e.show&&e.content.length>110,r=a?e.content.substring(0,90):null;return{$orig:i,g1:n,g2:s,g3:a,g4:r}})):null,n=0===t.tabActive?0==t.followList.length&&!t.focusLoading&&t.isLogin:null,s=t.__map(t.menuList,(function(e,o){var i=t.__get_orig(e),n=t.cateGoods[e.category_id]&&t.cateGoods[e.category_id].goods.length,s=t.cateGoods[e.category_id]&&0==t.cateGoods[e.category_id].goods.length&&!t.cateGoods[e.category_id].goodsLoading;return{$orig:i,g6:n,g7:s}}));t._isMounted||(t.e0=function(e){t.tabActive=0,t.top=200},t.e1=function(e){t.tabActive=1,t.top=300}),t.$mp.data=Object.assign({},{$root:{g0:o,l0:i,g5:n,l1:s}})},s=[]},d407:function(t,e,o){"use strict";o.r(e);var i=o("fec0"),n=o.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},fec0:function(t,e,o){"use strict";(function(t){var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("448a")),s=i(o("9523")),a=o("cd6d"),r=o("3fd7"),c=o("6859"),u=o("26cb"),h=o("f26a"),l=o("3255");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){(0,s.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g=getApp(),m={components:{authorize:function(){Promise.all([o.e("common/vendor"),o.e("components/Authorize")]).then(function(){return resolve(o("02f6"))}.bind(null,o)).catch(o.oe)},WaterfallsFlow:function(){o.e("components/plantWaterfallsFlow/WaterfallsFlow").then(function(){return resolve(o("300a"))}.bind(null,o)).catch(o.oe)},productConSwiper:function(){o.e("components/plantConSwiper/index").then(function(){return resolve(o("89a1"))}.bind(null,o)).catch(o.oe)},mentioned:function(){Promise.all([o.e("common/vendor"),o.e("components/mentioned")]).then(function(){return resolve(o("94b6"))}.bind(null,o)).catch(o.oe)},comment:function(){Promise.all([o.e("common/vendor"),o.e("components/comment")]).then(function(){return resolve(o("633e"))}.bind(null,o)).catch(o.oe)},easyLoadimage:function(){Promise.all([o.e("common/vendor"),o.e("components/easy-loadimage/easy-loadimage")]).then(function(){return resolve(o("2243"))}.bind(null,o)).catch(o.oe)},customTab:function(){o.e("components/customTab").then(function(){return resolve(o("40b7"))}.bind(null,o)).catch(o.oe)}},data:function(){return{domain:h.HTTP_REQUEST_URL,menuButtonInfo:t.getMenuButtonBoundingClientRect(),tabClick:0,tabLeft:0,isLeft:0,isWidth:0,windowHeight:0,swiperHeight:0,childIndex:0,showComment:!1,triggered:!1,triggeredDiscover:!1,userInfo:{},goods:[],followList:[],menuList:[],moreList:[],commList:[],goodsList:[],navShow:!1,navActive:0,tabActive:1,keyword:"",sortPrice:!0,focusLoading:!1,goodsLoading:!1,goodsLoaded:!1,focusLoaded:!1,loadTitle:"加载更多",isShowAuth:!1,isAuto:!1,where:{category_id:0,page:1,limit:30},focusWhere:{page:1,limit:30},storeScroll:!0,_freshing:!1,storeTop:0,storeHeight:0,navHeight:0,avatar:"",hederBg:"../static/images/plant_header.png",top:300,shareInfo:{},actionSheetHidden:!0,authorUid:0,swiperCur:0,circular:!0,isScroll:!1,interval:3e3,currentItemId:0,swiperCurrent:0,scrollTop:0,cateGoods:{},newData:{},activeRouter:"",showTab:!1,bottom:0}},onPageScroll:function(e){e.scrollTop;t.$emit("scroll")},created:function(){var e=this;t.getSystemInfo({success:function(t){e.isWidth=t.windowWidth/6,e.windowHeight=t.windowHeight,e.$set(e,"swiperHeight",e.windowHeight-150)}})},computed:f(f({},(0,u.mapGetters)(["isLogin","uid","viewColor"])),(0,l.configMap)({community_reply_status:0,community_app_switch:[],community_status:0,navigation:{}})),watch:{},onLoad:function(e){var o=this;t.$on("startLike",(function(t){for(var e=0;e<o.cateGoods[o.currentItemId]["goods"].length;e++){var i=o.cateGoods[o.currentItemId]["goods"][e];t.community_id==i["community_id"]&&(i["count_start"]=t.relevance_id?i["count_start"]+1:i["count_start"]-1,i["relevance_id"]=!!t.relevance_id)}}))},onShow:function(){g.getConfigData(),this.getCateList(),this.getGoods();var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e,this.getNav(),this.isLogin?(this.focusLoading=!1,this.focusLoaded=!1,this.focusWhere.page=1,this.followList=[],this.getUserInfo(),this.getFocusArtical()):this.userInfo={}},mounted:function(){var e=this,o=t.createSelectorQuery().in(this);o.select("#main").boundingClientRect((function(t){e.storeHeight=t.height,e.storeTop=t.top})).exec()},onShareAppMessage:function(){return this.$set(this,"actionSheetHidden",!this.actionSheetHidden),{title:this.shareInfo.title||"",imageUrl:this.shareInfo.image[0]||"",path:"/pages/plantGrass/plant_detail/index?id="+this.shareInfo.community_id+"&spid="+this.uid}},onShareTimeline:function(){return this.$set(this,"actionSheetHidden",!this.actionSheetHidden),{title:this.shareInfo.title||"",query:{id:this.shareInfo.community_id,spid:this.uid},imageUrl:this.shareInfo.image[0]||""}},methods:{goRouter:function(e){var o=getCurrentPages(),i=o[o.length-1].$page.fullPath;e.link!=i&&t.switchTab({url:e.link,fail:function(o){t.redirectTo({url:e.link})}})},getNav:function(){var e=this;(0,a.getNavigation)().then((function(o){e.newData=o.data,e.newData.status&&e.newData.status.status?(t.hideTabBar(),e.$set(e,"swiperHeight",e.windowHeight-50)):t.showTabBar()}))},goRelease:function(){this.isLogin?t.navigateTo({url:"/pages/plantGrass/plant_release/index"}):(this.isAuto=!0,this.isShowAuth=!0)},followScroll:function(e){t.$emit("scroll")},shareFriend:function(t){this.shareInfo=t},onLoadFun:function(){this.isShowAuth=!1,this.getUserInfo(),this.getFocusArtical()},authColse:function(t){this.isShowAuth=t},authOpen:function(){!1===this.isLogin&&(this.isAuto=!0,this.isShowAuth=!0)},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(e){t.userInfo=e.data}))},getCateList:function(){var t=this;(0,r.getTopicList)().then((function(e){var o=[{cate_name:"推荐",category_id:0,children:[]}];2!=t.community_app_switch.length&&2!=t.community_app_switch[0]||(o=[{cate_name:"推荐",category_id:0,children:[]},{cate_name:"视频",category_id:-1,children:[]}]),t.menuList=Array.from(new Set([].concat((0,n.default)(o),(0,n.default)(e.data))))}))},swiperChange:function(t){var e=t.detail,o=e.current,i=e.source,n=e.currentItemId;if(("autoplay"===i||"touch"===i)&&(this.currentItemId=n,this.swiperCur=o,this.selectMenu(this.menuList[this.swiperCur],this.swiperCur,!1),this.menuList.length>6)){var s=this.swiperCur-2;s=s<=0?0:s;var a=(this.swiperCur-2)*this.isWidth;this.$nextTick((function(){this.$set(this,"tabLeft",a)}))}},selectMenu:function(t,e,o){this.currentItemId=t.category_id,this.swiperCurrent=e,this.swiperCur=e,this.isScroll=o,this.tabClick=e,this.isLeft=e*this.isWidth,this.setMenuLeft(e)},setMenuLeft:function(t){this.getGoods()},showMore:function(t){this.$set(t,"show",!0)},scrollLeft:function(e){t.$emit("scroll"),this.scrollTop=e.detail.scrollTop,this.navShow=e.detail.scrollTop>=this.storeHeight-200,this.navShow&&this.$set(this,"swiperHeight",this.windowHeight-50),e.detail.scrollTop>e.detail.scrollHeight-1500&&this.getGoods()},getGoods:function(){var e=this,o=this;this.cateGoods[this.currentItemId]||this.$set(this.cateGoods,this.currentItemId,{where:f(f({},this.where),{},{category_id:this.currentItemId}),goods:[]});var i=this.cateGoods[this.currentItemId],n=this.currentItemId;i.goodsLoading||i.goodsLoaded||(i.goodsLoading=!0,i.loadTitle="",(0,r.graphicLstApi)(i.where).then((function(t){i.goodsLoading=!1,i.goodsLoaded=t.data.list.length<o.where.limit,1==i.where.page&&(i.goods=[]),i.goods.push.apply(i.goods,t.data.list),i.where.page=i.where.page+1,e.$set(e.cateGoods,n,f({},i)),e.triggeredDiscover=!1,e.$forceUpdate()})).catch((function(o){i.goodsLoading=!1,t.showToast({title:o,icon:"none"}),e.$set(e.cateGoods,n,i)})))},getFocusArtical:function(){var e=this;e.focusLoading||e.focusLoaded||(e.focusLoading=!0,e.loadTitle="",(0,r.focusArticleLst)(e.focusWhere).then((function(t){e.focusLoading=!1,e.focusLoaded=t.data.list.length<e.focusWhere.limit,t.data.list.forEach((function(t){t.show=!1})),e.followList.push.apply(e.followList,t.data.list),e.focusWhere.page=e.focusWhere.page+1})).catch((function(o){e.focusLoading=!1,t.showToast({title:o,icon:"none"})})))},onPulling:function(t){t.detail.deltaY<0||(1==this.tabActive?this.triggeredDiscover=!0:this.triggered=!0)},onRefreshDiscover:function(){var e=this;this._freshing||(this._freshing=!0,setTimeout((function(){e._freshing=!1,e.cateGoods={},e.getGoods(),e.triggeredDiscover=!1,e.scrollTop=0,t.stopPullDownRefresh(),e._freshing=!1}),1e3))},onRefresh:function(){var e=this;this._freshing||(this._freshing=!0,setTimeout((function(){e.loadendfollow=!1,e.loadend=!1,e.followList=[],e.focusWhere.page=1,e.params.page=1,e.getFocusArtical(),setTimeout((function(){(0===e.followList.length||e.focusLoaded)&&e.getGoods()}),400),e.triggered=!1,t.stopPullDownRefresh(),e._freshing=!1}),1e3))},onRestore:function(){this.triggeredDiscover=!1},onAbort:function(){},scrollHome:function(t){this.navShow=t.detail.scrollTop>=this.storeHeight-20},likeToggle:function(t){var e=t.relevance_id?0:1;(0,r.graphicStartApi)(t.community_id,{status:e}).then((function(e){t.relevance_id?(t.count_start--,t.count_start=0==t.count_start?0:t.count_start,t.relevance_id=!1):(t.count_start++,t.relevance_id=!0)}))},openMore:function(t){this.$refs.mentioned.showPopup(),this.moreList=t.relevance,this.authorUid=t.uid},openCommon:function(t,e){this.switchTab(0),this.showComment=!0,this.$refs.comment.getData(t,e)},commentSucces:function(t){this.followList[t]["count_reply"]++},closePopup:function(){this.$refs.mentioned.closePopup()},close:function(){this.switchTab(1),this.showComment=!1},onTouchmove:function(e){var o=this,i=t.createSelectorQuery().in(this);i.select("#goods").boundingClientRect((function(t){t.bottom<1500&&(1==o.tabActive?o.getGoods():o.getFocusArtical())})).exec()},switchTab:function(e){this.newData=this.navigation,this.newData.status&&this.newData.status.status?1==e?(this.showTab=!0,t.hideTabBar()):(this.showTab=!1,t.hideTabBar()):1==e?(this.showTab=!1,t.showTabBar()):(this.showTab=!1,t.hideTabBar())},goVideo:function(e){t.navigateTo({url:"/pages/short_video/nvueSwiper/index?id="+e.community_id})}},onReachBottom:function(){1==this.tabActive?this.getGoods():this.getFocusArtical()},beforeDestroy:function(){t.$off("startLike")}};e.default=m}).call(this,o("543d")["default"])}},[["27a4","common/runtime","common/vendor"]]]);