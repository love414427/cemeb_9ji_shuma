(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_list-index"],{"2fa7":function(t,e,i){var a=i("caed");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("f47b9a74",a,!0,{sourceMap:!1,shadowMode:!1})},4158:function(t,e,i){"use strict";i.r(e);var a=i("e7b51"),o=i("deee");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("7ae5");var r=i("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"0a57da5c",null,!1,a["a"],void 0);e["default"]=s.exports},"46b2":function(t,e,i){"use strict";var a=i("d517"),o=i.n(a);o.a},"4cc1":function(t,e,i){"use strict";i.r(e);var a=i("6948"),o=i("4dc2");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("46b2");var r=i("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"0a89d374",null,!1,a["a"],void 0);e["default"]=s.exports},"4dc2":function(t,e,i){"use strict";i.r(e);var a=i("fa4c"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"65e7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-0a89d374]{width:%?130?%;height:%?120?%}\n/*返回主页按钮*/.home[data-v-0a89d374]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-0a89d374]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-0a89d374]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-0a89d374]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-0a89d374]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-0a89d374]{width:100%;height:100%}.pictruea[data-v-0a89d374]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),t.exports=e},6948:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"},style:t.viewColor},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===t.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},o=[]},"7ae5":function(t,e,i){"use strict";var a=i("2fa7"),o=i.n(a);o.a},b86a:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a434"),i("d401"),i("d3b7"),i("25f0"),i("159b");var o=a(i("5530")),n=i("59c6"),r=i("6859"),s=(i("4d59"),a(i("fecf"))),c=a(i("4cc1")),d=a(i("ab68")),u=i("26cb"),l=a(i("02f6")),v=a(i("c71c")),p=i("3255"),_=i("f26a"),f=(getApp(),{components:{payment:s.default,emptyPage:v.default,home:c.default,authorize:l.default,addInvoicing:d.default},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],presellProList:[],presellOrderCount:0,orderData:{},orderStatus:0,page:1,limit:20,domain:_.HTTP_REQUEST_URL,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:this.$store.getters.globalData.alipay_open},{name:"余额支付",icon:"icon-yuezhifu",value:"balance",title:"可用余额:",number:0,payStatus:this.$store.getters.globalData.yue_pay_status}],pay_close:!1,pay_order_id:"",invoice_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,isReady:!0,invoice:{invoice:!1,add:!1}}},computed:(0,o.default)((0,o.default)({},(0,u.mapGetters)(["isLogin","viewColor"])),(0,p.configMap)(["hide_mer_status","community_status","alipay_open","yue_pay_status"])),watch:{alipay_open:function(t){this.payMode[1].payStatus=t},yue_pay_status:function(t){this.payMode[2].payStatus=t}},onShow:function(){this.isLogin?(this.page=1,this.loadend=!1,this.loading=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo(),this.getpreSellOrderList()):(this.isAuto=!0,this.isShowAuth=!0)},onReady:function(){},mounted:function(){},methods:{goMall:function(t){0==this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id="+t.mer_id})},onLoadFun:function(){this.isShowAuth=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},getUserInfo:function(){var t=this;(0,r.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this;(0,n.orderData)().then((function(e){t.$set(t,"orderData",e.data)}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.unOrderCancel)(e).then((function(e){return i.$util.Tips({title:e.message,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.order_id=e,this.pay_order_id=e.toString(),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(t){if(!t)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});0==this.orderStatus?uni.navigateTo({url:"/pages/order_details/stay?order_id="+t}):uni.navigateTo({url:"/pages/order_details/index?order_id="+t})},goOrderDetails_Evaluation:function(t){if(!t)return that.$util.Tips({title:"缺少订单号无法查看订单详情和评价"});0==this.orderStatus?uni.navigateTo({url:"/pages/order_details/stay?order_id="+t}):uni.navigateTo({url:"/pages/order_details/index?order_id="+t})},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.loading=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",t.isReady&&(t.isReady=!1,0==t.orderStatus?(0,n.groupOrderList)({page:t.page,limit:t.limit}).then((function(e){t.isReady=!0;var i=e.data.list||[],a=i.length<t.limit;t.orderList=1==t.page?i:t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=a,t.loading=!1,t.loadTitle=a?"我也是有底线的":"加载更多",t.page=t.page+1})):(0,n.getOrderList)({status:t.orderStatus-1,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list||[],a=i.length<t.limit;t.orderList=1==t.page?i:t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=a,t.loading=!1,t.loadTitle=a?"我也是有底线的":"加载更多",t.page=t.page+1,t.isReady=!0})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"}))))},getpreSellOrderList:function(){var t=this;(0,n.getOrderList)({status:10,page:1,limit:1}).then((function(e){var i=e.data.list||[];t.presellOrderCount=e.data.count,t.$set(t,"presellProList",i)}))},getProductCount:function(){var t=this;0!==this.orderStatus&&this.orderList.forEach((function(e,i){var a=0;e.orderProduct&&(e.orderProduct.forEach((function(t){a+=t.product_num})),t.orderList[i]["orderNum"]=a)}))},delOrder:function(t,e){var i=this;(0,n.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData(),i.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},confirmOrder:function(t,e){var i=this;uni.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(a){a.confirm&&(0,n.orderTake)(t.order_id).then((function(t){return i.$util.Tips({title:"操作成功",icon:"success"},(function(){i.orderList.splice(e,1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))}})},applyInvoice:function(t){this.invoice_order_id=t,this.invoice.invoice=!0,this.$refs.addInvoicing.popupTitle=!1,this.$refs.addInvoicing.getInvoiceDefault(),this.$refs.addInvoicing.getInvoiceList()},changeInvoiceClose:function(t){t&&this.getInvoiceData(t),this.$set(this.invoice,"invoice",!1)},getInvoiceData:function(t){var e=this;(0,n.applyInvoiceApi)(e.invoice_order_id,t).then((function(t){return e.$util.Tips({title:t.message})})).catch((function(t){return e.$util.Tips({title:t})}))}},onReachBottom:function(){this.getOrderList()}});e.default=f},caed:function(t,e,i){var a=i("24fb"),o=i("1de5"),n=i("076a");e=a(!1);var r=o(n);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.my-order .header[data-v-0a57da5c]{height:%?260?%;padding:0 %?30?%;background-color:var(--view-theme)}.t-color[data-v-0a57da5c]{color:var(--view-theme)}.p-color[data-v-0a57da5c]{color:var(--view-priceColor)}.b-color[data-v-0a57da5c]{background-color:var(--view-theme)}.my-order .header .picTxt[data-v-0a57da5c]{height:%?190?%}.my-order .header .picTxt .text[data-v-0a57da5c]{color:hsla(0,0%,100%,.8);font-size:%?26?%}.my-order .header .picTxt .text .name[data-v-0a57da5c]{font-size:%?34?%;font-weight:700;color:#fff;margin-bottom:%?20?%}.my-order .header .picTxt .pictrue[data-v-0a57da5c]{width:%?122?%;height:%?109?%}.my-order .header .picTxt .pictrue uni-image[data-v-0a57da5c]{width:100%;height:100%}.my-order .nav[data-v-0a57da5c]{background-color:#fff;width:%?690?%;height:%?140?%;border-radius:%?16?%;margin:%?20?% auto 0 auto}.my-order .nav .item[data-v-0a57da5c]{text-align:center;font-size:%?26?%;color:#282828;padding:%?29?% 0}.my-order .nav .item.on[data-v-0a57da5c]{font-weight:700;border-bottom:%?5?% solid var(--view-theme)}.my-order .nav .item .num[data-v-0a57da5c]{margin-top:%?18?%}.my-order .list[data-v-0a57da5c]{width:%?690?%;margin:%?14?% auto 0 auto}.my-order .list .item[data-v-0a57da5c]{background-color:#fff;border-radius:%?16?%;margin-bottom:%?14?%}.my-order .list .item .title[data-v-0a57da5c]{height:%?84?%;padding:0 %?30?%;border-bottom:1px solid #eee;font-size:%?28?%;color:#282828}.my-order .list .item .title .left-wrapper .iconfont[data-v-0a57da5c]{margin-top:%?5?%}.my-order .list .item .title .left-wrapper .store-name[data-v-0a57da5c]{margin:0 %?10?%}.my-order .list .item .title .left-wrapper .icon-xiangyou[data-v-0a57da5c]{font-size:%?20?%}.my-order .list .item .title .sign[data-v-0a57da5c]{font-size:%?24?%;padding:0 %?7?%;height:%?36?%;margin-right:%?15?%}.my-order .list .item .item-info[data-v-0a57da5c]{padding:0 %?30?%;margin-top:%?22?%}.my-order .list .item .item-info .pictrue[data-v-0a57da5c]{width:%?120?%;height:%?120?%}.my-order .list .item .item-info .pictrue uni-image[data-v-0a57da5c]{width:100%;height:100%;border-radius:%?6?%}.my-order .list .item .item-info .text[data-v-0a57da5c]{width:%?486?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.my-order .list .item .item-info .text .name[data-v-0a57da5c]{width:%?320?%;color:#282828}.event_bg[data-v-0a57da5c]{background:#ff7f00}.event_color[data-v-0a57da5c]{color:#ff7f00}.my-order .list .item .event_name[data-v-0a57da5c]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.my-order .list .item .event_ship[data-v-0a57da5c]{font-size:%?20?%;margin-top:%?10?%}.my-order .list .event_price[data-v-0a57da5c]{margin:0 0 %?50?% %?120?%}.my-order .list .item .item-info .text .money[data-v-0a57da5c]{text-align:right}.my-order .list .item .totalPrice[data-v-0a57da5c]{font-size:%?26?%;color:#282828;text-align:right;margin:%?27?% 0 0 %?30?%;padding:0 %?30?% %?30?% 0}.my-order .list .item .totalPrice .money[data-v-0a57da5c]{font-size:%?28?%;font-weight:700}.my-order .list .item .bottom[data-v-0a57da5c]{height:%?107?%;padding:0 %?30?%;border-top:1px solid #f0f0f0}.my-order .list .item .bottom .bnt[data-v-0a57da5c]{width:%?176?%;height:%?60?%;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:%?50?%;font-size:%?27?%}.my-order .list .item .bottom .bnt.cancelBnt[data-v-0a57da5c]{border:1px solid #ddd;color:#aaa}.my-order .list .item .bottom .bnt.colorBnt[data-v-0a57da5c]{border:1px solid var(--view-theme);color:var(--view-theme)}.my-order .list .item .bottom .bnt .icon-fabu[data-v-0a57da5c]{font-size:%?26?%;margin-right:%?10?%}.my-order .list .item .bottom .bnt ~ .bnt[data-v-0a57da5c]{margin-left:%?17?%}.noCart[data-v-0a57da5c]{margin-top:%?171?%;padding-top:%?0.1?%}.noCart .pictrue[data-v-0a57da5c]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.noCart .pictrue uni-image[data-v-0a57da5c]{width:100%;height:100%}.event_container[data-v-0a57da5c]{width:%?690?%;background-image:url('+r+");background-size:cover;background-repeat:no-repeat;margin:%?20?% auto;padding:%?26?% %?30?%;border-radius:%?16?%}.event_container .info[data-v-0a57da5c]{width:%?420?%}.event_container .info .title[data-v-0a57da5c]{color:#282828;font-size:%?26?%}.event_container .info .desc[data-v-0a57da5c]{color:#999;font-size:%?24?%;margin-top:%?30?%}.event_container .photo[data-v-0a57da5c]{width:%?180?%}.event_container .photo .picture[data-v-0a57da5c]{width:%?120?%;height:%?120?%}.event_container .photo .picture uni-image[data-v-0a57da5c]{width:100%;height:100%;border-radius:%?8?%}.event_container .photo .more_btn[data-v-0a57da5c]{color:#fff;background:#f97e3b;width:%?40?%;height:%?40?%;border-radius:%?40?%;text-align:center;line-height:%?40?%;position:relative;top:%?40?%}.event_container .photo .more_btn uni-text[data-v-0a57da5c]{font-size:%?20?%}.search[data-v-0a57da5c]{height:%?70?%;padding:0 %?30?%;border-radius:%?35?%;margin:%?-35?% %?30?% 0;background-color:#fff;font-size:%?26?%;color:#999}.search .iconfont[data-v-0a57da5c]{margin-right:%?10?%;font-size:%?23?%}",""]),t.exports=e},d517:function(t,e,i){var a=i("65e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("cbfd1e32",a,!0,{sourceMap:!1,shadowMode:!1})},deee:function(t,e,i){"use strict";i.r(e);var a=i("b86a"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},e7b51:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.viewColor},[i("v-uni-view",{staticClass:"my-order"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[t._v("订单信息")]),i("v-uni-view",[t._v("消费订单："+t._s(t.orderData.orderCount||0)+" 总消费：￥"+t._s(t.orderData.orderPrice||0))])],1),i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.domain+"/static/images/orderTime.png"}})],1)],1)],1),i("v-uni-navigator",{staticClass:"search acea-row row-middle",attrs:{url:"/pages/users/order_list/search","hover-class":"none"}},[i("v-uni-text",{staticClass:"iconfont icon-sousuo"}),t._v("搜索我的订单")],1),i("v-uni-view",{staticClass:"nav acea-row row-around"},[i("v-uni-view",{staticClass:"item",class:-1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(-1)}}},[i("v-uni-view",[t._v("全部")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.all||0))])],1),i("v-uni-view",{staticClass:"item",class:0==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(0)}}},[i("v-uni-view",[t._v("待付款")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noPay||0))])],1),i("v-uni-view",{staticClass:"item",class:1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(1)}}},[i("v-uni-view",[t._v("待发货")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noPostage||0))])],1),i("v-uni-view",{staticClass:"item",class:2==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(2)}}},[i("v-uni-view",[t._v("待收货")]),i("v-uni-view",{staticClass:"num "},[t._v(t._s(t.orderData.noDeliver||0))])],1),i("v-uni-view",{staticClass:"item",class:3==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(3)}}},[i("v-uni-view",[t._v("待评价")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.noComment||0))])],1)],1),t.presellProList.length>0?i("v-uni-view",{staticClass:"event_container"},[i("v-uni-navigator",{staticClass:"acea-row row-between",attrs:{url:"/pages/users/presell_order_list/index","hover-class":"none"}},[i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[t._v("预售尾款订单转到这里了！")]),i("v-uni-view",{staticClass:"desc"},[t._v("有"),i("v-uni-text",{staticClass:"t-color"},[t._v(t._s(t.presellOrderCount))]),t._v("笔预售尾款订单待付款，请点击查看")],1)],1),i("v-uni-view",{staticClass:"photo acea-row row-between"},[i("v-uni-view",{staticClass:"picture"},[i("v-uni-image",{attrs:{src:t.presellProList[0].orderProduct[0].cart_info.productAttr&&t.presellProList[0].orderProduct[0].cart_info.productAttr.image||t.presellProList[0].orderProduct[0].cart_info.product.image}})],1),i("v-uni-view",{staticClass:"more_btn"},[i("v-uni-text",{staticClass:"iconfont icon-gengduo3"})],1)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"list"},[t.orderList.length>0?i("v-uni-view",[0==t.orderStatus?t._l(t.orderList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.group_order_id)}}},[i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"acea-row row-middle left-wrapper"},[t._v(t._s(e.group_order_sn))]),i("v-uni-view",{staticClass:"t-color"},[t._v(t._s(2===e.orderList[0].activity_type&&2==e.orderList[0].orderProduct[0].cart_info.productPresell.presell_type?"待付定金":"待付款"))])],1),t._l(e.orderList,(function(a,o){return i("v-uni-view",{key:a.order_id+o},[2===a.activity_type?i("v-uni-view",[t._l(a.orderProduct,(function(e,o){return[i("v-uni-view",{staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.cart_info.productAttr&&e.cart_info.productAttr.image||e.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line1"},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("预售")]),i("v-uni-text",[t._v(t._s(e.cart_info.product.store_name))]),i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("发货时间："),1===e.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===e.cart_info.productPresell.delivery_type?"支付成功后":"预售结束后")+t._s(e.cart_info.productPresell.delivery_day)+"天内")]):t._e(),2===e.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===e.cart_info.productPresell.delivery_type?"支付尾款后":"预售结束后")+t._s(e.cart_info.productPresell.delivery_day)+"天内")]):t._e()],1)],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v("￥"+t._s(e.cart_info.productPresellAttr.presell_price))]),i("v-uni-view",[t._v("x"+t._s(e.product_num))])],1)],1),2===e.cart_info.productPresell.presell_type?i("v-uni-view",{staticClass:"event_price"},[t._v("定金待支付"),i("v-uni-text",{staticClass:"t-color"},[t._v("￥"+t._s(a.pay_price))]),t._v("尾款待支付"),i("v-uni-text",{staticClass:"t-color"},[t._v("￥"+t._s(a.presellOrder.pay_price))])],1):t._e()],1)]}))],2):i("v-uni-view",[t._l(a.orderProduct,(function(a,o){return[i("v-uni-view",{staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a.cart_info.productAttr&&a.cart_info.productAttr.image||a.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line2"},[0!=a.product_type&&10!=a.product_type?i("v-uni-text",{class:"font_bg-red type"+a.product_type},[t._v(t._s(1==a.product_type?"秒杀":2==a.product_type?"预售":3==a.product_type?"助力":4==a.product_type?"拼团":""))]):t._e(),t._v(t._s(a.cart_info.product.store_name))],1),4==e.orderList[0].activity_type?i("v-uni-view",{staticClass:"money"},[a.cart_info.activeSku?i("v-uni-view",[t._v("￥"+t._s(a.cart_info.activeSku.active_price))]):t._e(),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1):i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v("￥"+t._s(a.cart_info.productAttr.price))]),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1)],1)],1)]}))],2)],1)})),2!==e.orderList[0].activity_type?i("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.total_num||0)+"件商品，总金额"),i("v-uni-text",{staticClass:"money p-color"},[t._v("￥"+t._s(e.pay_price))])],1):t._e(),i("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goPay(e.pay_price,e.group_order_id)}}},[t._v("立即付款")])],1)],2)],1)})):t._l(t.orderList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"acea-row row-middle left-wrapper",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goMall(e)}}},[i("v-uni-text",{staticClass:"iconfont icon-shangjiadingdan"}),i("v-uni-view",{staticClass:"store-name"},[t._v(t._s(e.merchant.mer_name))]),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),0==e.status?i("v-uni-view",{staticClass:"t-color"},[1==e.order_type?i("v-uni-text",[t._v(t._s(e.takeOrderCount>0?"部分核销":"待核销"))]):i("v-uni-text",[t._v("待发货")])],1):t._e(),1==e.status?i("v-uni-view",{staticClass:"t-color"},[t._v("待收货")]):t._e(),2==e.status?i("v-uni-view",{staticClass:"t-color"},[t._v("待评价")]):t._e(),3==e.status?i("v-uni-view",{staticClass:"t-color"},[t._v("已完成")]):t._e(),-1==e.status?i("v-uni-view",{staticClass:"t-color"},[t._v("已退款")]):t._e()],1),2===e.activity_type?i("v-uni-view",t._l(e.orderProduct,(function(a,o){return i("v-uni-view",{key:o,staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a.cart_info.productAttr&&a.cart_info.productAttr.image||a.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name "},[i("v-uni-view",{staticClass:"name",class:0===e.status?"line1":"line2"},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("预售")]),i("v-uni-text",[t._v(t._s(a.cart_info.product.store_name))]),0==e.status?i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("发货时间："),1===a.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===a.cart_info.productPresell.delivery_type?"支付成功后":"预售结束后")+t._s(a.cart_info.productPresell.delivery_day)+"天内")]):t._e(),2===a.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===a.cart_info.productPresell.delivery_type?"支付尾款后":"预售结束后")+t._s(a.cart_info.productPresell.delivery_day)+"天内")]):t._e()],1):t._e()],1),i("v-uni-view",{staticClass:"t-color",staticStyle:{"margin-top":"10rpx"}},[t._v(t._s(1==a.is_refund?"退款中":2==a.is_refund?"部分退款":3==a.is_refund?"全部退款":""))])],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v("￥"+t._s(a.cart_info.productPresellAttr.presell_price))]),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1)],1)],1)})),1):i("v-uni-view",t._l(e.orderProduct,(function(a,o){return i("v-uni-view",{key:o,staticClass:"item-info acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:a.cart_info.productAttr&&a.cart_info.productAttr.image||a.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name "},[i("v-uni-view",{staticClass:"name line2"},[0!=a.product_type&&10!=a.product_type?i("v-uni-text",{class:"font_bg-red type"+a.product_type},[t._v(t._s(1==a.product_type?"秒杀":2==a.product_type?"预售":3==a.product_type?"助力":4==a.product_type?"拼团":""))]):t._e(),i("v-uni-text",[t._v(t._s(a.cart_info.product.store_name))])],1),i("v-uni-view",{staticClass:"t-color",staticStyle:{"margin-top":"10rpx"}},[t._v(t._s(1==a.is_refund?"退款中":2==a.is_refund?"部分退款":3==a.is_refund?"全部退款":""))])],1),3==e.activity_type?i("v-uni-view",{staticClass:"money"},[a.cart_info.productAssistAttr?i("v-uni-view",[t._v("￥"+t._s(a.cart_info.productAssistAttr.assist_price))]):t._e(),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1):4==e.activity_type?i("v-uni-view",{staticClass:"money"},[a.cart_info.activeSku?i("v-uni-view",[t._v("￥"+t._s(a.cart_info.activeSku.active_price))]):t._e(),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1):i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v("￥"+t._s(a.cart_info.productAttr.price))]),i("v-uni-view",[t._v("x"+t._s(a.product_num))])],1)],1)],1)})),1),2==e.activity_type?i("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.orderNum||0)+"件商品，总金额"),i("v-uni-text",{staticClass:"money p-color"},[t._v("￥"+t._s(e.presell_price))])],1):i("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.orderNum||0)+"件商品，总金额"),i("v-uni-text",{staticClass:"money p-color"},[t._v("￥"+t._s(e.pay_price))])],1)],1),i("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[e.receipt||-1==e.status||1!=e.open_receipt?t._e():i("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.applyInvoice(e.order_id)}}},[t._v("申请开票")]),0==e.status||9==e.status||-1==e.status?[i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看详情")])]:t._e(),1==e.status?[1==e.delivery_type||2==e.delivery_type?i("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看物流")]):t._e(),i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirmOrder(e,a)}}},[t._v("确认收货")])]:t._e(),2==e.status?[1!=t.community_status||e.community_id?t._e():i("v-uni-navigator",{staticClass:"bnt colorBnt",attrs:{url:"/pages/plantGrass/plant_release/index?order_id="+e.order_id,"hover-class":"none"}},[i("v-uni-text",{staticClass:"iconfont icon-fabu"}),t._v("发布种草")],1),i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails_Evaluation(e.order_id)}}},[t._v("去评价")])]:t._e(),3==e.status?[2==e.activity_type||3==e.activity_type||10==e.activity_type?i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看详情")]):t._e(),1!=t.community_status||e.community_id?i("v-uni-view",{staticClass:"bnt b-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("再次购买")]):i("v-uni-navigator",{staticClass:"bnt colorBnt",attrs:{url:"/pages/plantGrass/plant_release/index?order_id="+e.order_id,"hover-class":"none"}},[i("v-uni-text",{staticClass:"iconfont icon-fabu"}),t._v("发布种草")],1)]:t._e()],2)],1)}))],2):t._e()],1),t.orderList.length>5?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),0==t.orderList.length&&t.page>1?i("v-uni-view",[i("emptyPage",{attrs:{title:"暂无订单~"}})],1):t._e()],1),i("home"),i("authorize",{attrs:{isAuto:t.isAuto,isShowAuth:t.isShowAuth},on:{onLoadFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadFun.apply(void 0,arguments)},authColse:function(e){arguments[0]=e=t.$handleEvent(e),t.authColse.apply(void 0,arguments)}}}),i("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,order_id:t.pay_order_id,totalPrice:t.totalPrice},on:{onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}}),i("addInvoicing",{ref:"addInvoicing",attrs:{invoice:t.invoice},on:{changeInvoiceClose:function(e){arguments[0]=e=t.$handleEvent(e),t.changeInvoiceClose.apply(void 0,arguments)}}})],1)},o=[]},fa4c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),o=i("f26a"),n={name:"Home",props:{},data:function(){return{domain:o.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=n}}]);