(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/short_video/nvueSwiper/index"],{3847:function(t,i,e){"use strict";e.r(i);var n=e("f97a"),a=e("78d8");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("4015"),e("f65d");var s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d0ba6292",null,!1,n["a"],void 0);i["default"]=u.exports},4015:function(t,i,e){"use strict";var n=e("5629"),a=e.n(n);a.a},5629:function(t,i,e){},"732b":function(t,i,e){"use strict";(function(t){var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a,o=n(e("2eee")),s=n(e("9523")),u=n(e("c973")),c=(e("ddb3"),e("26cb")),r=e("3255"),d=e("f26a"),l=e("3fd7"),h=e("6859"),f=(n(e("43a2")),getApp()),p={components:{comment:function(){Promise.all([e.e("common/vendor"),e.e("components/comment")]).then(function(){return resolve(e("633e"))}.bind(null,e)).catch(e.oe)},mentioned:function(){Promise.all([e.e("common/vendor"),e.e("components/mentioned")]).then(function(){return resolve(e("94b6"))}.bind(null,e)).catch(e.oe)},authorize:function(){Promise.all([e.e("common/vendor"),e.e("components/Authorize")]).then(function(){return resolve(e("02f6"))}.bind(null,e)).catch(e.oe)}},computed:(0,r.configMap)({community_reply_status:0},(0,c.mapGetters)(["isLogin","uid"])),data:function(){return{imgHost:d.HTTP_REQUEST_URL,videoID:0,pinlunNum:0,windowWidth:0,windowHeight:0,platform:"",deleteHeight:0,dataList:[],shareItem:null,k:0,max:2,oldVideo:"",voice:"",timeout:"",authorUid:0,current:0,heightNum:1.3,touchNum:0,aixinLeft:0,aixinTop:0,Rotate:0,currentNav:1,limit:6,page:1,oldCurrent:1,H5ShareBox:!1,showComment:!1,loadVideo:!0,loadend:!1,userInfo:{},moreList:[],posters:!1,weixinStatus:!1,isShowAuth:!1,isAuto:!1,showManage:!1,isUser:!1,isSatrt:0,userUid:0,posterImageStatus:!1,storeImage:"",PromotionCode:"",canvasStatus:!1,posterImage:"",posterbackgd:"../static/img/index/posterbackgd.png",avatar:"/static/images/f.png",codeImg:"",autoplay:!1,circular:!0,interval:3e3,duration:500,actionSheetHidden:!1,isRoutine:!0}},watch:{k:function(i,e){var n=this,a=i+2;if(this.max<a&&(this.max=a),this.oldCurrent!=this.currentNav)return this.oldCurrent=this.currentNav,!1;this.dataList[e].playIng=!1,this.dataList[e].isplay=!0,this.dataList[e].state="pause",t.createVideoContext(this.dataList[e].community_id+""+e,this).pause(),this.dataList[i].state="play",this.dataList[i].isplay=!1,this.dataList[i].playIng=!0,setTimeout((function(){t.createVideoContext(n.dataList[i].community_id+""+i,n).play()}),250),this.videoShare(this.dataList[i])}},onLoad:function(t){this.getOptions(t),this.videoID=t.id,this.isUser=1==t.user,this.userUid=t.uid?t.uid:0,this.isSatrt=1==t.tab?1:0,this.get(),this.isLogin&&(this.getUserInfo(),this.downloadFilePromotionCode(this.videoID))},onShow:function(){},onHide:function(){this.dataList[this.k].state="pause",t.createVideoContext(this.dataList[this.k].community_id+""+this.k,this).pause()},onReady:function(){this.windowWidth=t.getSystemInfoSync().windowWidth,this.windowHeight=t.getSystemInfoSync().windowHeight},onShareAppMessage:function(t){var i=this.uid?this.uid:0;return{title:this.shareItem.title||"",path:"/pages/short_video/nvueSwiper/index?id="+this.shareItem.community_id+"&pid="+i,imageUrl:this.shareItem.image[0]||""}},onShareTimeline:function(t){return{title:this.shareItem.title||"",query:{id:this.shareItem.community_id,pid:this.uid},imageUrl:this.shareItem.image[0]||""}},methods:(a={videoShare:function(i){this.shareItem=i,i&&1==i.status?t.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}):t.hideShareMenu()},navTap:function(t){this.currentNav=t,this.dataList.forEach((function(t){t.state="pause"})),this.k=0,this.page=1,this.loadVideo=!0,this.loadend=!1,this.dataList=[],1==t?this.get():this.getFocusList()},getUserInfo:function(){var t=this;(0,h.getUserInfo)().then((function(i){t.userInfo=i.data}))},followAuthor:function(i){var e=this;if(!1===this.isLogin)this.isAuto=!0,this.isShowAuth=!0;else{(0,l.followAuthorApi)(i.uid,{status:1}).then((function(t){200===t.status&&(i.is_fans=!0),e.$util.Tips({title:t.message})})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})}))}},deleteTopic:function(i){var e=this;t.showModal({content:"确定要删除该话题么？",success:function(n){n.confirm?(0,l.deletePlantApi)(i.community_id).then((function(n){200===n.status&&(e.$util.Tips({title:n.message}),setTimeout((function(){t.redirectTo({url:"/pages/plantGrass/plant_user/index?id="+i.uid})}),1e3))})):n.cancel}})},onLoadFun:function(){this.isShowAuth=!1,this.getUserInfo()},authColse:function(t){this.isShowAuth=t},play:function(t){this.dataList[t].isplay=!1,this.dataList[t].playIng=!0,this.dataList[t].state="play",this.dataList[t].loading=!1},waiting:function(t){this.dataList[t].loading=!0},pinlunFun:function(t){var i=this;this.pinlunNum=t,this.dataList.forEach((function(t){t.community_id==i.videoID&&(t.count_reply=t.count_reply+1)}))},getOptions:function(t){if(t.scene){var i=this.$util.getUrlParams(decodeURIComponent(t.scene));i.pid&&(f.globalData.spid=i.pid)}t.pid&&(f.globalData.spid=t.pid)},moreTap:function(t){t.isMore=!t.isMore},moveHandle:function(){},closeScrollview:function(){this.showComment=!1},toComment:function(t,i){this.showComment=!0,this.$refs.comments.getData(t,i)},ended:function(){},tapVideoHover:function(i,e){var n=this;this.touchNum++,setTimeout((function(){1==n.touchNum&&(n.dataList[n.k].state="play"==i||"continue"==i?"pause":"continue","continue"==n.dataList[n.k].state&&t.createVideoContext(n.dataList[n.k].community_id+""+n.k,n).play(),"pause"==n.dataList[n.k].state&&t.createVideoContext(n.dataList[n.k].community_id+""+n.k,n).pause()),n.touchNum=0}),200)},change:function(t){this.k=t.detail.current,this.posterImage=!1,this.isLogin&&this.dataList[this.k]&&this.downloadFilePromotionCode(this.dataList[this.k]["community_id"])},animationfinish:function(t){this.k==this.dataList.length-1&&(this.loadVideo=!0,1==this.currentNav?this.GET():this.getFocusList())},GET:function(){var i=this;i.loadVideo&&(i.loadend||(i.loadVideo=!0,i.isUser?(0,l.myVideoList)(i.userUid,{page:i.page,limit:i.limit,is_star:i.isSatrt,community_id:i.videoID}).then((function(t){i.videoData(t.data.list),i.loadVideo=!1,i.loadend=t.data.list.length<i.limit})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})})):(0,l.videoList)({page:i.page,limit:i.limit,id:i.videoID}).then((function(t){i.loadVideo=!1,i.videoData(t.data.list),i.loadend=t.data.list.length<i.limit})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})}))))},get:function(){var i=this;i.isUser?(0,l.myVideoList)(i.userUid,{page:i.page,limit:i.limit,is_star:i.isSatrt,community_id:i.videoID}).then((function(t){i.page=i.page+1,i.videoData(t.data.list)})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})})):(0,l.videoList)({page:i.page,limit:i.limit,id:i.videoID}).then((function(t){i.page=i.page+1,i.videoData(t.data.list)})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})}))},getFocusList:function(){var i=this;i.loadVideo&&(i.loadend||(i.loadVideo=!0,(0,l.focusArticleLst)({page:i.page,limit:i.limit}).then((function(t){i.loadVideo=!1,i.loadend=t.data.list.length<i.limit,i.page=i.page+1,i.videoData(t.data.list)})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})}))))},videoData:function(i){if(0!=i.length){for(var e=i,n=0;n<e.length;n++)e[n]["isMore"]=!1,e[n]["playIng"]=!1,e[n]["state"]="pause",e[n]["isplay"]=!0,e[n]["loading"]=!1,this.dataList.push(e[n]),0==n&&0==this.k&&(this.dataList[0].isplay=!1,this.dataList[0].playIng=!0,this.dataList[0].state="play",this.dataList[0].loading=!1,t.createVideoContext(this.dataList[0].community_id+"0",this).play());0==this.k&&this.videoShare(this.dataList[0])}},share:function(){this.H5ShareBox=!0},listenerActionSheet:function(){!1===this.isLogin?(this.isAuto=!0,this.isShowAuth=!0):this.posters=!0},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},goFriend:function(){this.posters=!1},downloadFilePromotionCode:function(t){var i=this;(0,l.getVideoCode)(t,{type:"routine"}).then(function(){var t=(0,u.default)(o.default.mark((function t(e){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.codeImg=e.data.url;case 1:case"end":return t.stop()}}),t)})));return function(i){return t.apply(this,arguments)}}()).catch((function(t){i.$set(i,"PromotionCode","")}))},savePosterPath:function(){var i=this;t.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:i.posterImage,success:function(t){i.posterImageClose(),i.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){i.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:i.posterImage,success:function(t){i.posterImageClose(),i.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){i.$util.Tips({title:"保存失败"})}})}})}})},goPoster:function(){var i=this;return(0,u.default)(o.default.mark((function e(){var n,a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i.isLogin,!i.posterImage){e.next=5;break}return i.posterImageStatus=!0,i.posters=!1,e.abrupt("return");case 5:if(n=i,n.posters=!1,n.$set(n,"canvasStatus",!0),t.showLoading({title:"海报生成中",mask:!0}),!n.dataList[n.k].author.avatar){e.next=23;break}return e.t0=n.posterbackgd,e.next=13,n.fileStoreImage(n.dataList[n.k].image[0]);case 13:return e.t1=e.sent,e.next=16,n.fileStoreImage(n.codeImg);case 16:return e.t2=e.sent,e.next=19,n.fileStoreImage(n.dataList[n.k].author.avatar);case 19:e.t3=e.sent,a=[e.t0,e.t1,e.t2,e.t3],e.next=32;break;case 23:return e.t4=n.posterbackgd,e.next=26,n.fileStoreImage(n.dataList[n.k].image[0]);case 26:return e.t5=e.sent,e.next=29,n.fileStoreImage(n.codeImg);case 29:e.t6=e.sent,e.t7=n.avatar,a=[e.t4,e.t5,e.t6,e.t7];case 32:n.$util.videoPosterCanvas(a,n.dataList[n.k].content,n.dataList[n.k].author.nickname,(function(t){n.$set(n,"posterImage",t),n.$set(n,"posterImageStatus",!0),n.$set(n,"actionSheetHidden",!n.actionSheetHidden),n.$set(n,"canvasStatus",!1)}),(function(t){n.$set(n,"canvasStatus",!1)}));case 33:case"end":return e.stop()}}),e)})))()},fileStoreImage:function(i){var e=this,n="https:"==i.split("//")[0];return n||(i="https://"+i.split("//")[1]),new Promise((function(n,a){t.downloadFile({url:i,success:function(t){n(t.tempFilePath)},fail:function(){return e.$util.Tips({title:""})}})}))}},(0,s.default)(a,"savePosterPath",(function(){var i=this;t.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:i.posterImage,success:function(t){i.posterImageClose(),i.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){i.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:i.posterImage,success:function(t){i.posterImageClose(),i.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){i.$util.Tips({title:"保存失败"})}})}})}})})),(0,s.default)(a,"imgToBase",(function(t){return(0,u.default)(o.default.mark((function i(){var e;return o.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,h.imgToBase)({image:t});case 2:return e=i.sent,i.abrupt("return",e.data.image);case 4:case"end":return i.stop()}}),i)})))()})),(0,s.default)(a,"cLike",(function(i){if(this.isLogin){var e=i.relevance_id?0:1;(0,l.graphicStartApi)(i.community_id,{status:e}).then((function(t){i.relevance_id?(i.count_start--,i.count_start=0==i.count_start?0:i.count_start,i.relevance_id=!1):(i.count_start++,i.relevance_id=!0)})).catch((function(i){return t.showToast({title:i,icon:"none",duration:2e3})}))}else this.isAuto=!0,this.isShowAuth=!0})),(0,s.default)(a,"openMore",(function(t){this.$refs.mentioned.showPopup(),this.moreList=t.relevance,this.authorUid=t.uid})),(0,s.default)(a,"closePopup",(function(){this.$refs.mentioned.closePopup()})),(0,s.default)(a,"goDetail",(function(i){1===i.product_type?t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(i.product_id,"&time=").concat(i.stop_time,"&spid=").concat(this.uid)}):2===i.product_type?t.navigateTo({url:"/pages/activity/presell_details/index?id=".concat(i.activity_id,"&spid=").concat(this.uid)}):0===i.product_type?t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.product_id,"&spid=").concat(this.uid)}):4===i.product_type?t.navigateTo({url:"/pages/activity/combination_details/index?id=".concat(i.activity_id,"&spid=").concat(this.uid)}):40===i.product_type&&t.navigateTo({url:"/pages/activity/combination_status/index?id=".concat(i.activity_id,"&spid=").concat(this.uid)})})),a)};i.default=p}).call(this,e("543d")["default"])},"78d8":function(t,i,e){"use strict";e.r(i);var n=e("732b"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},9721:function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("4c7d");n(e("66fd"));var a=n(e("3847"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},eaa8:function(t,i,e){},f65d:function(t,i,e){"use strict";var n=e("eaa8"),a=e.n(n);a.a},f97a:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__map(t.dataList,(function(i,e){var n=t.__get_orig(i),a=t.max>e?i.isMore||i.content.length<=15:null,o=t.max>e&&!a?i.content.slice(0,15):null,s=t.max>e?1==i.relevance.length&&t.k===e:null,u=t.max>e&&!s?i.relevance.length>1&&t.k===e:null,c=t.max>e?i.relevance.length>0&&t.k===e:null,r=t.max>e&&c?i.relevance.length:null;return{$orig:n,g0:a,g1:o,g2:s,g3:u,g4:c,g5:r}}))),n=!t.dataList.length&&!t.loadVideo;t._isMounted||(t.e0=function(i){t.showManage=!1},t.e1=function(i){i.stopPropagation(),t.showManage=!t.showManage},t.e2=function(i){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{l0:e,g6:n}})},a=[]}},[["9721","common/runtime","common/vendor"]]]);