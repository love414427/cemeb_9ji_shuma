(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_form-index"],{3899:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-a9f1bf0e] uni-radio .wx-radio-input.wx-radio-input-checked,[data-v-a9f1bf0e] uni-radio .uni-radio-input.uni-radio-input-checked{border:1px solid var(--view-theme)!important;background-color:var(--view-theme)!important}[data-v-a9f1bf0e] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked,[data-v-a9f1bf0e] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked{border:1px solid var(--view-theme)!important;background-color:var(--view-theme)!important;color:#fff!important}uni-form[data-v-a9f1bf0e]{font-size:%?28?%;color:#282828}uni-form uni-input[data-v-a9f1bf0e],\nuni-form uni-radio-group[data-v-a9f1bf0e]{flex:1;text-align:right}uni-form uni-input[data-v-a9f1bf0e]{font-size:%?26?%}uni-form uni-label[data-v-a9f1bf0e]{margin-right:%?50?%}uni-form uni-radio[data-v-a9f1bf0e]{margin-right:%?8?%}uni-form uni-checkbox-group[data-v-a9f1bf0e]{height:%?90?%}uni-form uni-checkbox[data-v-a9f1bf0e]{margin-right:%?20?%}uni-form uni-button[data-v-a9f1bf0e]{height:%?86?%;border-radius:%?43?%;margin:%?66?% %?30?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?86?%;color:#fff}.panel[data-v-a9f1bf0e]{padding-right:%?30?%;padding-left:%?30?%;background-color:#fff}.panel ~ .panel[data-v-a9f1bf0e]{margin-top:%?14?%}.panel .acea-row[data-v-a9f1bf0e]{height:%?90?%}.panel .acea-row ~ .acea-row[data-v-a9f1bf0e]{border-top:1px solid #eee}.panel .name[data-v-a9f1bf0e]{width:%?150?%}.input-placeholder[data-v-a9f1bf0e]{font-size:%?26?%;color:#bbb}.icon-xiangyou[data-v-a9f1bf0e]{margin-left:%?25?%;font-size:%?18?%;color:#bfbfbf}.popup[data-v-a9f1bf0e]{position:fixed;bottom:0;left:0;z-index:99;width:100%;padding-bottom:%?100?%;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;background-color:#f5f5f5;overflow:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s}.popup.on[data-v-a9f1bf0e]{-webkit-transform:translateY(0);transform:translateY(0)}.popup .title[data-v-a9f1bf0e]{position:relative;height:%?137?%;font-size:%?32?%;line-height:%?137?%;text-align:center}.popup uni-scroll-view[data-v-a9f1bf0e]{height:%?466?%;padding-right:%?30?%;padding-left:%?30?%;box-sizing:border-box}.popup uni-label[data-v-a9f1bf0e]{padding:%?35?% %?30?%;border-radius:%?16?%;margin-bottom:%?20?%;background-color:#fff}.popup .text[data-v-a9f1bf0e]{flex:1;min-width:0;font-size:%?28?%;color:#282828}.popup .info[data-v-a9f1bf0e]{margin-top:%?10?%;font-size:%?22?%;color:#909090}.popup .icon-guanbi[data-v-a9f1bf0e]{position:absolute;top:50%;right:%?30?%;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?30?%;color:#707070;cursor:pointer}.popup uni-button[data-v-a9f1bf0e]{height:%?86?%;border-radius:%?43?%;margin-right:%?30?%;margin-left:%?30?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?86?%;color:#fff}uni-button[disabled][data-v-a9f1bf0e]:not([type]), uni-button[disabled][type=default][data-v-a9f1bf0e]{opacity:.5;background-color:var(--view-theme);color:#fff}.popup .text .acea-row[data-v-a9f1bf0e]{display:inline-flex;max-width:100%}.popup .name[data-v-a9f1bf0e]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%}.popup .label[data-v-a9f1bf0e]{width:%?56?%;height:%?28?%;border:1px solid #e93323;margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:#e93323}.popup .type[data-v-a9f1bf0e]{width:%?124?%;height:%?42?%;margin-top:%?14?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.popup .type.special[data-v-a9f1bf0e]{background-color:#fde9e7;color:#e93323}',""]),e.exports=t},4609:function(e,t,i){"use strict";var a=i("920be"),n=i.n(a);n.a},"46b2":function(e,t,i){"use strict";var a=i("d517"),n=i.n(a);n.a},"48a6":function(e,t,i){"use strict";i.r(t);var a=i("d7b4"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"4cc1":function(e,t,i){"use strict";i.r(t);var a=i("6948"),n=i("4dc2");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("46b2");var r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0a89d374",null,!1,a["a"],void 0);t["default"]=c.exports},"4dc2":function(e,t,i){"use strict";i.r(t);var a=i("fa4c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"51fd":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{style:e.viewColor},[i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"panel"},[1==e.receipt_title_type?i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("发票类型")]),i("v-uni-input",{attrs:{name:"receipt_type",value:e.typeName,disabled:"true"}})],1):i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("发票类型")]),i("v-uni-input",{attrs:{name:"receipt_type",value:e.typeName,disabled:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.callType.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("抬头类型")]),i("v-uni-radio-group",{attrs:{name:"receipt_title_type"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHeader.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-radio",{attrs:{value:"1",checked:1==e.receipt_title_type}}),i("v-uni-text",[e._v("个人")])],1),i("v-uni-label",[i("v-uni-radio",{attrs:{value:"2",checked:2==e.receipt_title_type}}),i("v-uni-text",[e._v("企业")])],1)],1)],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("发票抬头")]),i("v-uni-input",{attrs:{name:"receipt_title",value:e.receipt_title,placeholder:1==e.receipt_title_type?"需要开具发票的姓名":"需要开具发票的企业名称"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"===e.receipt_title_type&&"2"===e.receipt_title_type,expression:"receipt_title_type === '2' && receipt_title_type === '2'"}],staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("税号")]),i("v-uni-input",{attrs:{name:"duty_paragraph",value:e.duty_paragraph,maxlength:"20",placeholder:"纳税人识别号"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("邮箱")]),i("v-uni-input",{attrs:{name:"email",value:e.email,placeholder:"您的联系邮箱"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"==e.receipt_title_type&&"2"==e.receipt_type,expression:"receipt_title_type == '2' && receipt_type == '2'"}],staticClass:"panel"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v("开户银行")]),i("v-uni-input",{attrs:{name:"bank_name",value:e.bank_name,maxlength:"15",placeholder:"您的开户银行"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v("银行账号")]),i("v-uni-input",{attrs:{name:"bank_code",value:e.bank_code,placeholder:"您的银行账号"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v("企业地址")]),i("v-uni-input",{attrs:{name:"address",value:e.address,maxlength:"30",placeholder:"您所在的企业地址"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v("企业电话")]),i("v-uni-input",{attrs:{name:"tel",value:e.tel,placeholder:"您的企业电话"}})],1)],1),i("v-uni-checkbox-group",{staticClass:"acea-row row-middle panel",attrs:{name:"isDefault"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDefault.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{checked:!!e.is_default}}),i("v-uni-text",[e._v("设置为默认抬头")])],1)],1),i("v-uni-button",{class:e.loading?"disabled":"",attrs:{"form-type":"submit",disabled:e.loading}},[e._v("保存")])],1),i("v-uni-view",{class:{mask:e.popupType||e.popupTitle}}),i("v-uni-view",{staticClass:"popup",class:{on:e.popupType}},[i("v-uni-view",{staticClass:"title"},[e._v("发票类型选择"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeType.apply(void 0,arguments)}}})],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-radio-group",{attrs:{name:"invoice-type"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeType.apply(void 0,arguments)}}},e._l(e.invoiceTypeList,(function(t){return i("v-uni-label",{key:t.type,staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"info"},[e._v(e._s(t.info))])],1),i("v-uni-radio",{attrs:{value:t.type,checked:e.receipt_type==t.type}})],1)})),1)],1),i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeType.apply(void 0,arguments)}}},[e._v("确定")])],1),i("v-uni-view",{staticClass:"popup",class:{on:e.popupTitle}},[i("v-uni-view",{staticClass:"title"},[e._v("抬头选择"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeTitle.apply(void 0,arguments)}}})],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-radio-group",{attrs:{name:"invoice-title"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTitle.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v("西安众邦网络科技有限公司")]),i("v-uni-view",{staticClass:"label"},[e._v("默认")])],1),i("v-uni-view",{staticClass:"type"},[e._v("普通发票")])],1),i("v-uni-radio",{attrs:{value:"西安众邦网络科技有限公司",checked:"西安众邦网络科技有限公司"===e.receipt_title}})],1)],1)],1),i("v-uni-button",[e._v("添加新的抬头")])],1),i("home")],1)},n=[]},"65e7":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".pictrueBox[data-v-0a89d374]{width:%?130?%;height:%?120?%}\n/*返回主页按钮*/.home[data-v-0a89d374]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-0a89d374]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-0a89d374]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-0a89d374]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-0a89d374]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-0a89d374]{width:100%;height:100%}.pictruea[data-v-0a89d374]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),e.exports=t},6948:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"touch-action":"none"},style:e.viewColor},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:e.top+"px",bottom:e.bottom},attrs:{id:"right-nav"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.setTouchMove.apply(void 0,arguments)}}},[e.homeActive?i("v-uni-view",{staticClass:"homeCon",class:!0===e.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):e._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===e.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},n=[]},"920be":function(e,t,i){var a=i("3899");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("20f1a16a",a,!0,{sourceMap:!1,shadowMode:!1})},d517:function(e,t,i){var a=i("65e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("cbfd1e32",a,!0,{sourceMap:!1,shadowMode:!1})},d7b4:function(e,t,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac1f"),i("00b4"),i("d3b7"),i("159b"),i("a434"),i("99af"),i("7db0");var n=a(i("4cc1")),o=i("6859"),r=i("26cb"),c={components:{home:n.default},props:{},computed:(0,r.mapGetters)(["viewColor"]),data:function(){return{loading:!1,id:"",mer_id:"",receipt_title_type:"1",receipt_type:"1",drawer_phone:"",receipt_title:"",duty_paragraph:"",tel:"",address:"",bank_name:"",bank_code:"",is_default:0,email:"",isDefault:[],typeName:"增值税电子普通发票",popupType:!1,popupTitle:!1,invoiceTypeList:[{type:"1",name:"增值税电子普通发票",info:"默认发送至所提供的电子邮件"},{type:"2",name:"增值税专用发票",info:"纸质发票开出后将以邮寄形式交付"}],addInvoice:[]}},onLoad:function(e){e.id&&(this.id=e.id,this.getInvoiceDetail(),this.id&&uni.setNavigationBarTitle({title:"编辑发票"})),e.mer_id&&(this.mer_id=e.mer_id)},methods:{getInvoiceDetail:function(){var e=this;uni.showLoading({title:"加载中"}),(0,o.invoiceDetail)(this.id).then((function(t){uni.hideLoading(),e.receipt_title_type=t.data.receipt_title_type,e.receipt_type=t.data.receipt_type,e.receipt_title=t.data.receipt_title,e.typeName=1==e.receipt_type?"增值税电子普通发票":"增值税专用发票",e.email=t.data.email,e.duty_paragraph=t.data.duty_paragraph,e.bank_name=t.data.bank_name,e.bank_code=t.data.bank_code,e.address=t.data.address,e.tel=t.data.tel,e.is_default=t.data.is_default})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t})}))},formSubmit:function(e){var t=this,i=e.detail.value;if("2"===i.receipt_title_type){if(!i.receipt_title)return this.$util.Tips({title:"请输入需要开具发票的企业名称"});if(!i.duty_paragraph)return this.$util.Tips({title:"请输入纳税人识别码"});if(2==this.receipt_type){if(!i.bank_name)return this.$util.Tips({title:"请输入开户行"});if(!i.bank_code)return this.$util.Tips({title:"请输入银行账号"});if(!/^(\d{9}|\d{14}|\d{18})$/.test(i.bank_code))return this.$util.Tips({title:"请输入正确的银行账号"});if(!/(^(\d{3,4})?\d{7,8})$|(^1(3|4|5|7|8|9|6)\d{9}$)/i.test(i.tel))return this.$util.Tips({title:"请输入正确的电话号码"})}}else if(!i.receipt_title)return this.$util.Tips({title:"请输入需要开具发票的姓名"});if(i.email&&!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(i.email))return this.$util.Tips({title:"请输入正确的邮箱"});this.loading=!0,i.receipt_type=this.receipt_type,i.is_default=this.is_default,uni.showLoading({title:"保存中",mask:!0}),this.id?(0,o.invoiceUpdate)(this.id,i).then((function(e){uni.hideLoading(),t.$util.Tips({title:"添加成功",icon:"success"}),setTimeout((function(){return history.back()}),1e3)})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e}),t.loading=!1})):(0,o.invoiceSave)(i).then((function(e){var a=t;if(uni.hideLoading(),a.$util.Tips({title:"添加成功",icon:"success"}),a.mer_id){i.mer_id=a.mer_id,uni.getStorage({key:"invoice_Data",success:function(e){a.addInvoice=e.data}});var n=[i];a.addInvoice.length&&a.addInvoice.forEach((function(e,t){e.mer_id==a.mer_id&&a.addInvoice.splice(t,1)})),n=a.addInvoice.length&&a.addInvoice[0]["mer_id"]?n.concat(a.addInvoice):n,uni.setStorage({key:"invoice_Data",data:n,success:function(){}})}setTimeout((function(){return history.back()}),1e3)})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e}),t.loading=!1}))},callType:function(){this.popupType=!0},changeType:function(e){var t=this;this.receipt_type=e.detail.value,this.typeName=this.invoiceTypeList.find((function(e){return e.type===t.receipt_type})).name},closeType:function(){this.popupType=!1},callTitle:function(){this.popupTitle=!0},changeTitle:function(e){this.receipt_title=e.detail.value},closeTitle:function(){this.popupTitle=!1},changeHeader:function(e){this.receipt_title_type=e.detail.value,1==e.detail.value&&(this.receipt_type=1,this.typeName="增值税电子普通发票")},changeDefault:function(e){this.is_default=e.detail.value.length?1:0}}};t.default=c},dc50:function(e,t,i){"use strict";i.r(t);var a=i("51fd"),n=i("48a6");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("4609");var r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a9f1bf0e",null,!1,a["a"],void 0);t["default"]=c.exports},fa4c:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("26cb"),n=i("f26a"),o={name:"Home",props:{},data:function(){return{domain:n.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(e){e.touches[0].clientY<545&&e.touches[0].clientY>66&&(this.top=e.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};t.default=o}}]);