(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_pwd_edit-index"],{"02f6":function(t,e,n){"use strict";n.r(e);var i=n("65ba"),a=n("1029");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e49b");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2fda29d4",null,!1,i["a"],void 0);e["default"]=r.exports},"034a2":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"phone"},[t._v("当前手机号："+t._s(t.phone))]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:"设置新密码","placeholder-class":"placeholder",name:"password",value:t.password}})],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"password",placeholder:"确认新密码","placeholder-class":"placeholder",name:"qr_password",value:t.qr_password}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder",name:"captcha",value:t.captcha}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleVerify.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v("确认修改")])],1)],1),n("authorize",{attrs:{isAuto:t.isAuto,isShowAuth:t.isShowAuth},on:{onLoadFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadFun.apply(void 0,arguments)},authColse:function(e){arguments[0]=e=t.$handleEvent(e),t.authColse.apply(void 0,arguments)}}}),n("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}})],1)},a=[]},"0491":function(t,e,n){"use strict";n.r(e);var i=n("0f3b"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"0f3b":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),o=i(n("1da1")),s=i(n("e1ea")),r=n("58d4"),u=n("6859"),d=n("26cb"),c=i(n("02f6")),l=i(n("496c")),f={mixins:[s.default],components:{authorize:c.default,Verify:l.default},data:function(){return{userInfo:{},phone:"",password:"",captcha:"",qr_password:"",isAuto:!1,isShowAuth:!1}},computed:(0,d.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.getUserInfo():(this.isAuto=!0,this.isShowAuth=!0)},methods:{onLoadFun:function(t){this.isShowAuth=!1,this.getUserInfo()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,u.getUserInfo)().then((function(e){var n=e.data.phone,i=n.substr(0,3)+"****"+n.substr(7);t.$set(t,"userInfo",e.data),t.phone=i}))},code:function(t){var e=this;return(0,o.default)((0,a.default)().mark((function t(){var n;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,n.userInfo.phone){t.next=3;break}return t.abrupt("return",n.$util.Tips({title:"手机号码不存在,无法发送验证码！"}));case 3:return t.next=5,(0,r.registerVerify)(n.userInfo.phone).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}));case 5:case"end":return t.stop()}}),t)})))()},editPwd:function(t){var e=this,n=t.detail.value.password,i=t.detail.value.qr_password,a=t.detail.value.captcha;return n?i!=n?e.$util.Tips({title:"两次输入的密码不一致！"}):a?void(0,r.phoneRegisterReset)({account:e.userInfo.phone,captcha:a,password:n}).then((function(t){return e.$util.Tips({title:t.msg},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:"请输入验证码"}):e.$util.Tips({title:"请输入新密码"})},success:function(t){this.$refs.verify.hide(),this.code(t)},handleVerify:function(){this.$refs.verify.show()}}};e.default=f},"0f96":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),o=i(n("a50e")),s=n("cd6d"),r=n("937f"),u=n("26cb"),d=i(n("823f")),c=n("3255"),l=(i(n("42cb")),n("ddb3")),f=getApp(),p={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},components:{},data:function(){return{title:"用户登录",info:"请登录，将为您提供更好的服务！",isWeixin:this.$wechat.isWeixin(),canUseGetUserProfile:!1,code:null,top:0,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,editModal:!1,canGetPrivacySetting:!1}},computed:(0,a.default)((0,a.default)({},(0,u.mapGetters)(["isLogin","userInfo","viewColor"])),(0,c.configMap)(["routine_logo","first_avatar_switch","wechat_phone_switch"])),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)},isShowAuth:function(t){this.getCode(this.isShowAuth)}},created:function(){this.top=uni.getSystemInfoSync().windowHeight/2-70,wx.getUserProfile&&(this.canUseGetUserProfile=!0),this.setAuthStatus(),this.getCode(this.isShowAuth)},methods:{onclose:function(){this.canGetPrivacySetting=!1},onAgree:function(){var t=this;t.canUseGetUserProfile=!1,d.default.getUserProfile().then((function(e){var n=e.userInfo;n.code=t.code,n.spread=f.globalData.spid,n.spread_code=f.globalData.code,(0,s.commonAuth)({auth:{type:"routine",auth:n}}).then((function(e){if(200!=e.data.status)return uni.setStorageSync("auth_token",e.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var n=e.data.result.expires_time-o.default.time();t.$store.commit("UPDATE_USERINFO",e.data.result.user),t.$store.commit("LOGIN",{token:e.data.result.token,time:n}),t.$store.commit("SETUID",e.data.result.user.uid),o.default.set(r.EXPIRES_TIME,e.data.result.expires_time,n),o.default.set(r.USER_INFO,e.data.result.user,n),t.$emit("onLoadFun",e.data.result.user),e.data.result.user.isNew&&t.mp_is_new&&1==t.first_avatar_switch&&1==t.wechat_phone_switch&&(t.editModal=!0)})).catch((function(t){uni.hideLoading(),uni.showToast({title:t.message,icon:"none",duration:2e3})}))})).catch((function(t){uni.hideLoading()}))},setAuthStatus:function(){},getCode:function(t){t&&(this.code=1)},toWecahtAuth:function(){(0,l.toLogin)(!0)},getUserProfile:function(){var t=this;wx.getPrivacySetting?wx.getPrivacySetting({success:function(e){e.needAuthorization?(t.canGetPrivacySetting=!0,t.$nextTick((function(){t.$refs.privacyAgreement.showPoupon(e.privacyContractName)}))):t.onAgree()},fail:function(){},complete:function(){}}):this.onAgree()},close:function(){var t=getCurrentPages();t[t.length-1];this.$emit("authColse",!1),this.canGetPrivacySetting=!1}}};e.default=p},1029:function(t,e,n){"use strict";n.r(e);var i=n("0f96"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"65ba":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.isShowAuth&&t.code?n("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),t.isShowAuth&&t.code?n("v-uni-view",{staticClass:"Popup",class:{privacyPoupon:t.canGetPrivacySetting},style:"top:"+t.top+"px;"},[n("v-uni-view",{staticClass:"logo-auth"},[n("v-uni-image",{staticClass:"image",attrs:{src:t.routine_logo,mode:"aspectFit"}})],1),t.isWeixin?n("v-uni-text",{staticClass:"title"},[t._v("授权提醒")]):n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),t.isWeixin?n("v-uni-text",{staticClass:"tip"},[t._v("请授权用户信息，以便为您提供更好的服务！")]):n("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.info))]),n("v-uni-view",{staticClass:"bottom flex"},[n("v-uni-text",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),n("v-uni-button",{staticClass:"item grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWecahtAuth.apply(void 0,arguments)}}},[t.isWeixin?n("v-uni-text",{staticClass:"text"},[t._v("去授权")]):n("v-uni-text",{staticClass:"text"},[t._v("去登录")])],1)],1)],1):t._e()],1)},a=[]},b1da:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2d9fd256]{background-color:#fff!important}body.?%PAGE?%[data-v-2d9fd256]{background-color:#fff!important}.ChangePassword .phone[data-v-2d9fd256]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-2d9fd256]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-2d9fd256]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-2d9fd256]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-2d9fd256]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-2d9fd256]{width:%?340?%}.ChangePassword .list .item .code[data-v-2d9fd256]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-2d9fd256]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-2d9fd256]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}',""]),t.exports=e},b2b3:function(t,e,n){var i=n("b1da");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2a5f290f",i,!0,{sourceMap:!1,shadowMode:!1})},bfd2:function(t,e,n){var i=n("c51f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("eb258e76",i,!0,{sourceMap:!1,shadowMode:!1})},c51f:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Popup[data-v-2fda29d4]{flex:1;align-items:center;justify-content:center;width:%?500?%;background-color:#fff;position:fixed;top:%?500?%;left:%?125?%;z-index:900\n  /* \t&.privacyPoupon{\n\t\tz-index: 0\n\t} */}.Popup .logo-auth[data-v-2fda29d4]{z-index:-1;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?150?%;height:%?150?%;display:flex;align-items:center;justify-content:center;border:%?8?% solid #fff;border-radius:50%;background:#fff}.Popup .image[data-v-2fda29d4]{height:%?42?%;margin-top:%?-54?%}.Popup .title[data-v-2fda29d4]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%;align-items:center;justify-content:center;width:%?500?%;display:flex}.Popup .tip[data-v-2fda29d4]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%;display:flex;align-items:center;justify-content:center}.Popup .bottom .item[data-v-2fda29d4]{width:%?250?%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;margin-top:%?54?%;font-size:%?24?%;color:#666}.Popup .bottom .item .text[data-v-2fda29d4]{font-size:%?24?%;color:#666}.Popup .bottom .item.on[data-v-2fda29d4]{width:%?500?%}.flex[data-v-2fda29d4]{display:flex;flex-direction:row}.Popup .bottom .item.grant[data-v-2fda29d4]{font-weight:700;background-color:#e93323;\n  /* background-color: var(--view-theme); */border-radius:0;padding:0}.Popup .bottom .item.grant .text[data-v-2fda29d4]{font-size:%?28?%;color:#fff}.mask[data-v-2fda29d4]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);z-index:99}',""]),t.exports=e},ccff:function(t,e,n){"use strict";n.r(e);var i=n("034a2"),a=n("0491");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d631");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2d9fd256",null,!1,i["a"],void 0);e["default"]=r.exports},d631:function(t,e,n){"use strict";var i=n("b2b3"),a=n.n(i);a.a},e1ea:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},e49b:function(t,e,n){"use strict";var i=n("bfd2"),a=n.n(i);a.a}}]);