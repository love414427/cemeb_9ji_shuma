(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_spread_code-index"],{"03bd":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("3ca3"),n("ddb0"),n("d3b7");var o=i(n("c7eb")),a=i(n("1da1")),r=i(n("17f1")),s=n("6859"),u=n("ddb3"),c=n("26cb"),d=i(n("4cc1")),l={components:{home:d.default,zbCode:r.default},data:function(){return{imgUrls:[],indicatorDots:!1,posterImageStatus:!0,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1,spreadData:[{}],nickName:"",siteName:"",mpUrl:"",canvasImageUrl:"",posterImage:[],codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:225,hg:500}},computed:(0,c.mapGetters)({isLogin:"isLogin",userData:"userInfo",viewColor:"viewColor"}),watch:{isLogin:{handler:function(t,e){t&&this.userSpreadBannerList()},deep:!0},userData:{handler:function(t,e){t&&this.$set(this,"userInfo",t)},deep:!0}},onReady:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogin){e.next=9;break}return e.next=3,(0,s.getUserInfo)();case 3:return n=e.sent,t.val=window.location.host+"?spread="+n.data.uid,e.next=7,t.spreadMsgs();case 7:e.next=10;break;case 9:(0,u.toLogin)();case 10:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;this.$nextTick((function(){var e=uni.createSelectorQuery().select(".aaa");e.fields({size:!0},(function(e){t.wd=e.width,t.hg=e.height})).exec()}))},methods:{onLoadFun:function(t){this.$set(this,"userInfo",t),this.userSpreadBannerList()},qrR:function(t){this.codeSrc=t},spreadMsgs:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n,i,a,r,u,c;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,i={type:"h5"},e.next=4,(0,s.spreadMsg)(i);case 4:return a=e.sent,n.spreadData=a.data.poster,n.nickName=a.data.nickname,"?spread="+n.userInfo.uid,e.next=10,n.imgToBase(a.data.qrcode);case 10:r=e.sent,uni.showLoading({title:"海报生成中",mask:!0}),u=(0,o.default)().mark((function t(e){var i,s;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=void 0,t.next=3,n.imgToBase(a.data.poster[e].pic);case 3:s=t.sent,i=[r,s],n.$util.userPosterCanvas(i,a.data.nickname,a.data.mark,e,n.wd,n.hg,(function(t){n.$set(n.posterImage,e,t)})),uni.hideLoading();case 7:case"end":return t.stop()}}),t)})),c=0;case 14:if(!(c<a.data.poster.length)){e.next=19;break}return e.delegateYield(u(c),"t0",16);case 16:c++,e.next=14;break;case 19:case"end":return e.stop()}}),e)})))()},imgToBase:function(t){return(0,a.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.imgToBase)({image:t});case 2:return n=e.sent,e.abrupt("return",n.data.image);case 4:case"end":return e.stop()}}),e)})))()},codeImg:function(){},authColse:function(t){this.isShowAuth=t},bindchange:function(t){this.spreadList;this.swiperIndex=t.detail.current},savePosterPath:function(t){},downloadFilestoreImage:function(t){var e=this;return new Promise((function(n,i){var o=e;uni.downloadFile({url:t,success:function(t){n(t.tempFilePath)},fail:function(){return o.$util.Tips({title:""})}})}))},setShareInfoStatus:function(){var t=this;this.$wechat.isWeixin()&&(this.isLogin?(0,s.getUserInfo)().then((function(e){var n={desc:"分销海报",title:e.data.nickname+"-分销海报",link:"/pages/index/index?spread="+e.data.uid,imgUrl:t.spreadList[0]};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)})):(0,u.toLogin)())},userSpreadBannerList:function(){var t=this;uni.showLoading({title:"获取中",mask:!0}),(0,s.spreadBanner)().then((function(e){uni.hideLoading(),t.$set(t,"spreadList",e.data),t.$set(t,"poster",e.data[0].poster),t.setShareInfoStatus()})).catch((function(t){uni.hideLoading()}))}}};e.default=l},"17f1":function(t,e,n){"use strict";n.r(e);var i=n("26cc"),o=n("a01b");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("96a22");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"b739d126",null,!1,i["a"],void 0);e["default"]=s.exports},"1fa3":function(t,e,n){var i=n("5cfb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("27ad0d2c",i,!0,{sourceMap:!1,shadowMode:!1})},"1fab":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zb-code[data-v-b739d126]{position:relative}.zb-code-canvas[data-v-b739d126]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},"26cc":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"zb-code"},[e("v-uni-canvas",{staticClass:"zb-code-canvas",style:{width:this.cpSize+"px",height:this.cpSize+"px"},attrs:{"canvas-id":this.cid}}),e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],style:{width:this.cpSize+"px",height:this.cpSize+"px"},attrs:{src:this.result}})],1)},o=[]},"2ad5":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("53ca"));n("a9e3"),n("e9c4");var a,r=i(n("3275")),s={name:"zb-code",props:{cid:{type:String,default:"zb-code-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):a=new r.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),a.clear()},_saveCode:function(){""!=this.result&&uni.saveImageToPhotosAlbum({filePath:this.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=(0,o.default)(t),n=!1;return"number"==e&&""==String(t)||"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){n._makeCode()}),100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){n._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=s},3275:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("53ca"));n("14d9"),n("d9e2"),n("d401"),n("a9e3"),n("cb29"),n("e9c4");var o={};(function(){function t(t){var e,n,i;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),i=128+(63&t),[e,n,i])}function e(e,n){this.typeNumber=-1,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=e,this.utf8bytes=function(e){for(var n=[],i=0;i<e.length;i++)for(var o=e.charCodeAt(i),a=t(o),r=0;r<a.length;r++)n.push(a[r]);return n}(e),this.make()}e.prototype={constructor:e,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+n][e+i]=0<=n&&n<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=i&&i<=4)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;i<8;i++){this.makeImpl(i);var o=a.getLostPoint(this);(0==i||t>o)&&(t=o,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],o=t[n];if(null==this.modules[i][o])for(var r=-2;r<=2;r++)for(var s=-2;s<=2;s++)this.modules[i+r][o+s]=-2==r||2==r||-2==s||2==s||0==r&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var i=n[this.errorCorrectLevel]<<3|e,o=a.getBCHTypeInfo(i),r=0;r<15;r++){var s=!t&&1==(o>>r&1);r<6?this.modules[r][8]=s:r<8?this.modules[r+1][8]=s:this.modules[this.moduleCount-15+r][8]=s;s=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=s:r<9?this.modules[8][15-r-1+1]=s:this.modules[8][15-r-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new d,n=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,n);for(var i=0,o=this.utf8bytes.length;i<o;i++)t.put(this.utf8bytes[i],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(e.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(e.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,o=this.rsBlock.length/3,r=new Array,s=0;s<o;s++)for(var c=this.rsBlock[3*s+0],d=this.rsBlock[3*s+1],l=this.rsBlock[3*s+2],h=0;h<c;h++)r.push([l,d]);for(var f=new Array(r.length),p=new Array(r.length),g=0;g<r.length;g++){var v=r[g][0],m=r[g][1]-v;n=Math.max(n,v),i=Math.max(i,m),f[g]=new Array(v);for(s=0;s<f[g].length;s++)f[g][s]=255&t.buffer[s+e];e+=v;var b=a.getErrorCorrectPolynomial(m),w=new u(f[g],b.getLength()-1),y=w.mod(b);p[g]=new Array(b.getLength()-1);for(s=0;s<p[g].length;s++){var x=s+y.getLength()-p[g].length;p[g][s]=x>=0?y.get(x):0}}var C=new Array(this.totalDataCount),T=0;for(s=0;s<n;s++)for(g=0;g<r.length;g++)s<f[g].length&&(C[T++]=f[g][s]);for(s=0;s<i;s++)for(g=0;g<r.length;g++)s<p[g].length&&(C[T++]=p[g][s]);return C},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,o=7,r=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[i][s-u]){var c=!1;r<t.length&&(c=1==(t[r]>>>o&1));var d=a.getMask(e,i,s-u);d&&(c=!c),this.modules[i][s-u]=c,o--,-1==o&&(r++,o=7)}if(i+=n,i<0||this.moduleCount<=i){i-=n,n=-n;break}}}}},e.PAD0=236,e.PAD1=17;for(var n=[1,0,3,2],i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case i.PATTERN000:return(e+n)%2==0;case i.PATTERN001:return e%2==0;case i.PATTERN010:return n%3==0;case i.PATTERN011:return(e+n)%3==0;case i.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case i.PATTERN101:return e*n%2+e*n%3==0;case i.PATTERN110:return(e*n%2+e*n%3)%2==0;case i.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),n=0;n<t;n++)e=e.multiply(new u([1,r.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,o=0;o<e;o++)for(var a=0,r=t.modules[o][0],s=0;s<e;s++){var u=t.modules[o][s];if(s<e-6&&u&&!t.modules[o][s+1]&&t.modules[o][s+2]&&t.modules[o][s+3]&&t.modules[o][s+4]&&!t.modules[o][s+5]&&t.modules[o][s+6]&&(s<e-10?t.modules[o][s+7]&&t.modules[o][s+8]&&t.modules[o][s+9]&&t.modules[o][s+10]&&(n+=40):s>3&&t.modules[o][s-1]&&t.modules[o][s-2]&&t.modules[o][s-3]&&t.modules[o][s-4]&&(n+=40)),o<e-1&&s<e-1){var c=0;u&&c++,t.modules[o+1][s]&&c++,t.modules[o][s+1]&&c++,t.modules[o+1][s+1]&&c++,0!=c&&4!=c||(n+=3)}r^u?a++:(r=u,a>=5&&(n+=3+a-5),a=1),u&&i++}for(s=0;s<e;s++)for(a=0,r=t.modules[0][s],o=0;o<e;o++){u=t.modules[o][s];o<e-6&&u&&!t.modules[o+1][s]&&t.modules[o+2][s]&&t.modules[o+3][s]&&t.modules[o+4][s]&&!t.modules[o+5][s]&&t.modules[o+6][s]&&(o<e-10?t.modules[o+7][s]&&t.modules[o+8][s]&&t.modules[o+9][s]&&t.modules[o+10][s]&&(n+=40):o>3&&t.modules[o-1][s]&&t.modules[o-2][s]&&t.modules[o-3][s]&&t.modules[o-4][s]&&(n+=40)),r^u?a++:(r=u,a>=5&&(n+=3+a-5),a=1)}var d=Math.abs(100*i/e/e-50)/5;return n+=10*d,n}},r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},s=0;s<8;s++)r.EXP_TABLE[s]=1<<s;for(s=8;s<256;s++)r.EXP_TABLE[s]=r.EXP_TABLE[s-4]^r.EXP_TABLE[s-5]^r.EXP_TABLE[s-6]^r.EXP_TABLE[s-8];for(s=0;s<255;s++)r.LOG_TABLE[r.EXP_TABLE[s]]=s;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=r.gexp(r.glog(this.get(n))+r.glog(t.get(i)));return new u(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var i=new Array(e),o=0;o<e;o++)i[o]=this.get(o);while(i.length>=n){var a=r.glog(i[0])-r.glog(t.get(0));for(o=0;o<t.getLength();o++)i[o]^=r.gexp(r.glog(t.get(o))+a);while(0==i[0])i.shift()}return new u(i,0)}};var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function d(){this.buffer=new Array,this.length=0}e.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=c[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,o=0;o<n;o++){var a=e[3*o+0],r=e[3*o+2];i+=r*a}var s=t>9?2:1;if(this.utf8bytes.length+s<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},d.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var l=[];o=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var n in t)this.options[n]=t[n];for(var i=null,o=(n=0,l.length);n<o;n++)if(l[n].text==this.options.text&&l[n].text.correctLevel==this.options.correctLevel){i=l[n].obj;break}n==o&&(i=new e(this.options.text,this.options.correctLevel),l.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:i}));var a=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground};(function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),n=i.getModuleCount(),o=t.size,r=t.imageSize,s=(o/n).toPrecision(4),u=(o/n).toPrecision(4),c=0;c<n;c++)for(var d=0;d<n;d++){var l=Math.ceil((d+1)*s)-Math.floor(d*s),h=Math.ceil((c+1)*s)-Math.floor(c*s),f=a({row:c,col:d,count:n,options:t});e.setFillStyle(i.modules[c][d]?f:t.background),e.fillRect(Math.round(d*s),Math.round(c*u),l,h)}if(t.image){var p=Number(((o-r)/2).toFixed(2)),g=Number(((o-r)/2).toFixed(2));(function(e,n,i,o,a,r,s,u,c){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(n+r,i),e.arcTo(n+o,i,n+o,i+r,r),e.arcTo(n+o,i+a,n+o-r,i+a,r),e.arcTo(n,i+a,n,i+a-r,r),e.arcTo(n,i,n+r,i,r),e.closePath(),u&&e.fill(),c&&e.stroke()})(e,p,g,r,r,2,6,!0,!0),e.drawImage(t.image,p,g,r,r)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)})(this.options)},o.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var a=o;e.default=a},"46b2":function(t,e,n){"use strict";var i=n("d517"),o=n.n(i);o.a},"4cc1":function(t,e,n){"use strict";n.r(e);var i=n("6948"),o=n("4dc2");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("46b2");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0a89d374",null,!1,i["a"],void 0);e["default"]=s.exports},"4dc2":function(t,e,n){"use strict";n.r(e);var i=n("fa4c"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"5cfb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4f71c42c]{background-color:#a3a3a3!important}body.?%PAGE?%[data-v-4f71c42c]{background-color:#a3a3a3!important}.canvas[data-v-4f71c42c]{width:100%;position:absolute;top:0;left:0}.box[data-v-4f71c42c]{width:100%;height:100%;position:relative;border-radius:%?18?%;overflow:hidden}.box .user-msg[data-v-4f71c42c]{position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.box .user-msg .user-code[data-v-4f71c42c]{width:100%;display:flex;align-items:center;justify-content:center;justify-content:space-between}.box .user-msg .user-code uni-image[data-v-4f71c42c]{width:100%}.img-list[data-v-4f71c42c]{margin-right:40px}.distribution-posters uni-swiper[data-v-4f71c42c]{width:100%;height:%?1000?%;position:relative;margin-top:%?40?%}.distribution-posters .slide-image[data-v-4f71c42c]{width:100%;height:100%;margin:0 auto;border-radius:%?15?%}.distribution-posters[data-v-4f71c42c] .active{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.distribution-posters[data-v-4f71c42c] .quiet{-webkit-transform:scale(.83333);transform:scale(.83333);transition:all .2s ease-in 0s}.distribution-posters .keep[data-v-4f71c42c]{font-size:%?30?%;color:#fff;width:%?600?%;height:%?80?%;border-radius:%?50?%;text-align:center;line-height:%?80?%;margin:%?38?% auto;background-color:var(--view-theme)}.distribution-posters .preserve[data-v-4f71c42c]{color:#fff;text-align:center;margin-top:%?38?%}.distribution-posters .preserve .line[data-v-4f71c42c]{width:%?100?%;height:1px;background-color:#fff}.distribution-posters .preserve .tip[data-v-4f71c42c]{margin:0 %?30?%}',""]),t.exports=e},6292:function(t,e,n){"use strict";var i=n("1fa3"),o=n.n(i);o.a},"65e7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-0a89d374]{width:%?130?%;height:%?120?%}\n/*返回主页按钮*/.home[data-v-0a89d374]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-0a89d374]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-0a89d374]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-0a89d374]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-0a89d374]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-0a89d374]{width:100%;height:100%}.pictruea[data-v-0a89d374]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),t.exports=e},6948:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"},style:t.viewColor},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===t.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},o=[]},8347:function(t,e,n){"use strict";n.r(e);var i=n("03bd"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"896b":function(t,e,n){"use strict";n.r(e);var i=n("fa70"),o=n("8347");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6292");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"4f71c42c",null,!1,i["a"],void 0);e["default"]=s.exports},"96a22":function(t,e,n){"use strict";var i=n("f9fb"),o=n.n(i);o.a},a01b:function(t,e,n){"use strict";n.r(e);var i=n("2ad5"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d517:function(t,e,n){var i=n("65e7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("cbfd1e32",i,!0,{sourceMap:!1,shadowMode:!1})},f9fb:function(t,e,n){var i=n("1fab");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5477f052",i,!0,{sourceMap:!1,shadowMode:!1})},fa4c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("26cb"),o=n("f26a"),a={name:"Home",props:{},data:function(){return{domain:o.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,i.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=a},fa70:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={zbCode:n("17f1").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.viewColor},[n("v-uni-view",{staticClass:"distribution-posters"},[n("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"previous-margin":"40px","next-margin":"40px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchange.apply(void 0,arguments)}}},[t._l(t.spreadData,(function(e,i){return[n("v-uni-swiper-item",{key:i+"_0",staticClass:"aaa"},[n("div",{ref:"bill",refInFor:!0,staticClass:"box",class:t.swiperIndex==i?"active":"quiet"},[n("v-uni-view",{staticClass:"user-msg"},[n("v-uni-view",{staticClass:"user-code"},[t.posterImage[i]?n("v-uni-image",{staticClass:"canvas",style:{height:t.hg+"px"},attrs:{src:t.posterImage[i]}}):n("v-uni-canvas",{staticClass:"canvas",style:{height:t.hg+"px"},attrs:{"canvas-id":"myCanvas"+i}})],1)],1)],1)])]}))],2),n("div",{staticClass:"preserve acea-row row-center-wrapper"},[n("div",{staticClass:"line"}),n("div",{staticClass:"tip"},[t._v("长按保存图片")]),n("div",{staticClass:"line"})])],1),n("home"),n("v-uni-view",{staticClass:"qrimg"},[n("zb-code",{ref:"qrcode",attrs:{show:t.codeShow,cid:t.cid,val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,onval:t.onval,loadMake:t.loadMake},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1)],1)},a=[]}}]);