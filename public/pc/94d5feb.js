(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{433:function(t,e,r){var content=r(437);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("24390d02",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";var o=r(433);r.n(o).a},437:function(t,e,r){(e=r(2)(!1)).push([t.i,".time[data-v-06ac929d]{display:flex;justify-content:center}",""]),t.exports=e},438:function(t,e,r){"use strict";r(62);var o={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,r=0,o=0,n=0,c=0;e>0?(r=!0===t.isDay?Math.floor(e/86400):0,o=Math.floor(e/3600)-24*r,n=Math.floor(e/60)-24*r*60-60*o,c=Math.floor(e)-24*r*60*60-60*o*60-60*n,o<=9&&(o="0"+o),n<=9&&(n="0"+n),c<=9&&(c="0"+c),t.day=r,t.hour=o,t.minute=n,t.second=c):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}},n=(r(436),r(6)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"time acea-row row-middle",style:t.justifyLeft},[t.tipText?r("span",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),t._v(" "),!0===t.isDay?r("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),t._v(" "),t.dayText?r("span",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),t._v(" "),r("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),t._v(" "),t.hourText?r("span",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),t._v(" "),r("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),t._v(" "),t.minuteText?r("span",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),t._v(" "),r("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),t._v(" "),t.secondText?r("span",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()])}),[],!1,null,"06ac929d",null);e.a=component.exports},482:function(t,e,r){var content=r(593);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("60058abd",content,!0,{sourceMap:!1})},589:function(t,e,r){t.exports=r.p+"img/fail-code.6254b6d.png"},590:function(t,e,r){t.exports=r.p+"img/phone.a5c4557.png"},591:function(t,e,r){t.exports=r.p+"img/aliqr.6fd8158.png"},592:function(t,e,r){"use strict";var o=r(482);r.n(o).a},593:function(t,e,r){var o=r(2),n=r(49),c=r(594);e=o(!1);var d=n(c);e.push([t.i,".payment .header[data-v-df29ab64]{margin-top:21px;color:#999}.payment .header .home[data-v-df29ab64]{color:#282828}.payment .orderTip[data-v-df29ab64]{padding:55px 30px 31px;font-size:32px;color:#fff;width:1200px;height:159px;background:url("+d+") no-repeat;background-size:100% 100%}.payment .orderTip .times[data-v-df29ab64]{font-size:14px;margin-top:12px}.payment .detail[data-v-df29ab64]{width:100%;height:182px;background-color:#fff;padding:31px 30px}.payment .detail .item[data-v-df29ab64]{font-size:16px}.payment .detail .item .order_price[data-v-df29ab64]{color:#e93323}.payment .detail .item~.item[data-v-df29ab64]{margin-top:12px}.payment .payType[data-v-df29ab64]{width:100%;height:387px;background-color:#fff;margin-top:17px}.payment .payType .title[data-v-df29ab64]{height:57px;padding:0 30px;border-bottom:1px dotted #cecece;line-height:57px;font-size:18px}.payment .payType .type[data-v-df29ab64]{padding:22px 50px 55px 30px}.payment .payType .type .item[data-v-df29ab64]{width:210px;height:86px;border:1px solid #d4d4d4;position:relative;cursor:pointer}.payment .payType .type .item~.item[data-v-df29ab64]{margin-left:20px}.payment .payType .type .item.on[data-v-df29ab64]{border-color:#e93323}.payment .payType .type .item .iconfont[data-v-df29ab64]{color:#09bb07;font-size:32px;margin-right:11px}.payment .payType .type .item .iconfont.icon-yue[data-v-df29ab64]{color:#fe9c01}.payment .payType .type .item .iconfont.icon-zhifubao[data-v-df29ab64]{color:#00aaea}.payment .payType .type .item .icon-xuanzhong4[data-v-df29ab64]{position:absolute;right:-4px;bottom:-6px;margin:0!important}.payment .payType .type .item .name[data-v-df29ab64]{font-size:16px;color:#4e4e4e}.payment .payType .type .item .yue[data-v-df29ab64]{font-size:14px;color:#969696;margin-top:6px}.payment .payType .goPay[data-v-df29ab64]{margin:80px 50px 0 0}.payment .payType .goPay .bnt[data-v-df29ab64],.payment .payType .goPay .button[data-v-df29ab64]{width:180px;height:46px;font-size:16px;color:#fff;border-radius:4px;text-align:center;line-height:46px;cursor:pointer}.payment .payType .goPay .button[data-v-df29ab64]{outline:none;border:none;background-color:#e93323}.payment .payType .goPay .button[data-v-df29ab64]:disabled{border-color:#fab6b6;background-color:#fab6b6}[data-v-df29ab64] .el-dialog{width:1000px}.wrapper[data-v-df29ab64]{background-color:#fff}.wrapper .title[data-v-df29ab64]{margin-bottom:51px;font-size:20px}.wrapper .title .amount[data-v-df29ab64]{font-size:14px;color:#969696}.wrapper .title .amount .num[data-v-df29ab64]{font-size:22px;font-weight:700}.wrapper .wx[data-v-df29ab64]{width:310px}.wrapper .wx .pictrue[data-v-df29ab64]{width:100%;height:310px;border:1px solid #ccc;position:relative}.wrapper .wx .pictrue>img[data-v-df29ab64]{width:100%;height:100%}.wrapper .wx .pictrue .fail-code[data-v-df29ab64]{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.9);display:flex;align-items:center;cursor:pointer}.wrapper .wx .pictrue .fail-code .fail-code-info[data-v-df29ab64]{text-align:center;width:100%;color:#fff}.wrapper .wx .pictrue .fail-code .fail-code-info>img[data-v-df29ab64]{display:inline-block;width:50px;height:50px}.wrapper .wx .pictrue .fail-code .fail-code-info>div[data-v-df29ab64]{margin-top:10px}.wrapper .wx .text[data-v-df29ab64]{width:100%;height:72px;background-color:#eb5e4a;color:#fff;font-size:14px;margin-top:16px}.wrapper .wx .text .iconfont[data-v-df29ab64]{font-size:50px;margin-right:30px}.wrapper .wx .text .tip[data-v-df29ab64]{margin-top:4px}.wrapper .phone[data-v-df29ab64]{margin-left:144px;width:262px;height:399px}.wrapper .phone img[data-v-df29ab64]{width:100%;height:100%}.wrapper .selectPay[data-v-df29ab64]{font-size:16px;color:#236fe9;margin-top:68px;cursor:pointer}.wrapper .selectPay .iconfont[data-v-df29ab64]{margin-right:16px;font-size:15px}",""]),t.exports=e},594:function(t,e,r){t.exports=r.p+"img/orderBg.feebbd8.png"},717:function(t,e,r){"use strict";r.r(e);r(39),r(28),r(11),r(48);var o=r(29),n=(r(22),r(4)),c={name:"payment",auth:"guest",components:{countDown:r(438).a},data:function(){return{orderId:0,orderDetail:{},current:0,userInfo:{},payArr:["balance","weixinQr","alipayQr"],payType:"balance",dialogVisible:!1,totalPrice:0,codeUrl:"",invalid:0,endTime:"",timeName:null,failCode:!1,failCodeStatus:null,yue_status:0,wechat_status:1,alipay_status:0}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.query,e.next=3,Promise.all([r.$axios.get("/api/order/group_order_detail/"+n.result),r.$axios.get("/api/user")]);case 3:return c=e.sent,d=Object(o.a)(c,2),l=d[0],f=d[1],e.abrupt("return",{orderId:n.result,orderDetail:l.data,userInfo:f.data,disabeld:!1});case 8:case"end":return e.stop()}}),e)})))()},watch:{endTime:function(t){1===t&&this.clearStatus()}},fetch:function(t){var e=t.store;e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"支付-"+this.$store.state.titleCon}},beforeMount:function(){},mounted:function(){this.getPayType()},beforeDestroy:function(){this.clearStatus(),this.clearFailCodeStatus()},methods:{getPayType:function(){var t=this;t.$axios.get("/api/config").then((function(e){t.alipay_status=e.data.alipay_open,t.yue_status=e.data.yue_pay_status})).catch((function(e){t.$message.error(e)}))},clearStatus:function(){this.timeName&&clearInterval(this.timeName),this.timeName=null},clearFailCodeStatus:function(){this.failCodeStatus&&(clearTimeout(this.failCodeStatus),this.failCodeStatus=null)},currentPay:function(t){this.current=t,this.payType=this.payArr[t]},goPay:function(){var t=this,e=this;if(this.disabeld=!0,this.clearFailCodeStatus(),this.clearStatus(),0===this.current&&parseFloat(e.userInfo.now_money)<parseFloat(e.orderDetail.pay_price))return e.$message.error("余额不足");0===this.current?e.$axios.post("/api/order/pay/"+e.orderId,{type:e.payType,return_url:window.location.protocol+"//"+window.location.host+"/user/order_list?type=1"}).then((function(t){"error"!==t.data.status?(e.$message.success(t.message),e.gainCount(),setTimeout((function(){e.$router.replace({path:"/user/order_list?type=1"})}),1e3)):e.$message.error(t.message)})).catch((function(t){e.$message.error(t),setTimeout((function(){e.$router.push({path:"/"})}),1e3)})):e.$axios.post("/api/order/pay/"+e.orderId,{type:e.payType,return_url:window.location.protocol+"//"+window.location.host+"/user/order_list?type=1"}).then((function(r){"error"!==r.data.status?(t.failCode=!1,t.dialogVisible=!0,t.codeUrl=r.data.result.config,t.failCodeStatus=setTimeout((function(){t.failCode=!0}),18e4),t.timeName||(t.timeName=setInterval((function(){t.wxSuccess()}),2e3))):e.$message.error(r.message)})).catch((function(t){e.$message.error(t),setTimeout((function(){e.$router.push({path:"/"})}),1e3)}))},gainCount:function(){var t=this;t.$axios.get("/api/user/cart/count").then((function(e){t.$store.commit("cartNum",e.data[0].count||0)}))},wxSuccess:function(){var t=this,e=this;e.$axios.get("/api/order/status/"+e.orderId).then((function(r){e.endTime=r.data.paid,r.data.paid&&(t.clearStatus(),t.clearFailCodeStatus(),e.$message.success("支付成功"),e.gainCount(),setTimeout((function(){e.$router.replace({path:"/user/order_list?type=1"})}),1e3))})).catch((function(t){e.$message.error(t),setTimeout((function(){e.$router.replace({path:"/"})}),1e3)}))},handleClose:function(){this.dialogVisible=!1,this.disabeld=!1,this.clearFailCodeStatus(),this.clearStatus()}}},d=(r(592),r(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"payment wrapper_1200"},[o("div",{staticClass:"header"},[o("span",{staticClass:"home"},[o("nuxt-link",{staticClass:"home",attrs:{to:"/"}},[t._v("首页  ")]),t._v(" > 个人中心 >")],1),t._v("确认订单\n  ")]),t._v(" "),o("div",{staticClass:"orderTip"},[o("div",[t._v("订单提交成功！去付款咯~")]),t._v(" "),o("div",{staticClass:"times acea-row row-middle"},[o("div",[t._v("剩余时间：")]),t._v(" "),t.orderDetail.cancel_unix?o("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" 小时 ","minute-text":" 分钟 ","second-text":"秒 ",datatime:t.orderDetail.cancel_unix}}):t._e()],1)]),t._v(" "),o("div",{staticClass:"detail"},[o("div",{staticClass:"item"},[t._v("订单编号："+t._s(t.orderDetail.order_id?t.orderDetail.order_sn:t.orderDetail.group_order_sn))]),t._v(" "),o("div",{staticClass:"item"},[t._v("订单价格："),o("span",{staticClass:"order_price"},[t._v(t._s(t.orderDetail.pay_price)+"元")])]),t._v(" "),o("div",{staticClass:"item line1"},[t._v("收货信息："+t._s(t.orderDetail.real_name)+" "+t._s(t.orderDetail.user_phone)+"\n      "+t._s(t.orderDetail.user_address)+"\n    ")]),t._v(" "),o("div",{staticClass:"item line1"},[t._v("\n      商品名称："+t._s(t.orderDetail.orderList.length?t.orderDetail.orderList[0].orderProduct[0].cart_info.product.store_name:"")+"\n    ")])]),t._v(" "),o("div",{staticClass:"payType"},[o("div",{staticClass:"title"},[t._v("选择以下支付方式")]),t._v(" "),o("div",{staticClass:"type acea-row row-middle"},[1==t.yue_status?o("div",{staticClass:"item acea-row row-center-wrapper ",class:0===t.current?"on":"",on:{click:function(e){return t.currentPay(0)}}},[o("div",{staticClass:"iconfont icon-yue"}),t._v(" "),o("div",[o("div",{staticClass:"name"},[t._v("余额支付")]),t._v(" "),o("div",{staticClass:"yue"},[t._v("余额："+t._s(t.userInfo.now_money))])]),t._v(" "),0===t.current?o("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]):t._e(),t._v(" "),o("div",{staticClass:"item acea-row row-center-wrapper",class:1===t.current?"on":"",on:{click:function(e){return t.currentPay(1)}}},[o("div",{staticClass:"iconfont icon-weixinzhifu1"}),t._v(" "),t._m(0),t._v(" "),1===t.current?o("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]),t._v(" "),1==t.alipay_status?o("div",{staticClass:"item acea-row row-center-wrapper",class:2===t.current?"on":"",on:{click:function(e){return t.currentPay(2)}}},[o("div",{staticClass:"iconfont icon-zhifubao"}),t._v(" "),t._m(1),t._v(" "),2===t.current?o("div",{staticClass:"iconfont icon-xuanzhong4 font-color"}):t._e()]):t._e()]),t._v(" "),o("div",{staticClass:"goPay acea-row row-right"},[o("button",{staticClass:"button",attrs:{disabled:t.disabeld},on:{click:t.goPay}},[t._v("去支付")])])]),t._v(" "),o("el-dialog",{attrs:{title:"",visible:t.dialogVisible,"before-close":t.handleClose,"close-on-press-escape":!1,center:!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticClass:"wxPay"},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"title acea-row row-between-wrapper"},[o("div",[t._v(t._s(1==t.current?"微信支付":"支付宝支付"))]),t._v(" "),o("div",{staticClass:"amount"},[t._v("应付金额："),o("span",{staticClass:"num font-color"},[t._v(t._s(t.orderDetail.pay_price))]),t._v("元")])]),t._v(" "),o("div",{staticClass:"acea-row row-center-wrapper"},[o("div",{staticClass:"wx"},[o("div",{staticClass:"pictrue"},[o("client-only",[o("vue-qr",{staticClass:"bicode",attrs:{text:t.codeUrl,size:310}})],1),t._v(" "),t.failCode?o("div",{staticClass:"fail-code",on:{click:t.goPay}},[o("div",{staticClass:"fail-code-info"},[o("img",{attrs:{src:r(589)}}),t._v(" "),o("div",[t._v("二维码失效，点击重新获取")])])]):t._e()],1),t._v(" "),o("div",{staticClass:"text acea-row row-center-wrapper"},[o("div",{staticClass:"iconfont icon-saoyisao"}),t._v(" "),o("div",[1==t.current?o("div",[t._v("请使用微信扫一扫")]):t._e(),t._v(" "),2==t.current?o("div",[t._v("请使用支付宝扫一扫")]):t._e(),t._v(" "),o("div",{staticClass:"tip"},[t._v("扫描二维码支付")])])])]),t._v(" "),o("div",{staticClass:"phone"},[1==t.current?o("img",{attrs:{src:r(590)}}):t._e(),t._v(" "),2==t.current?o("img",{attrs:{src:r(591)}}):t._e()])]),t._v(" "),o("div",{staticClass:"selectPay",on:{click:t.handleClose}},[o("span",{staticClass:"iconfont icon-fanhui"}),t._v("选择其他支付方式")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"name"},[this._v("微信支付")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"name"},[this._v("支付宝支付")])])}],!1,null,"df29ab64",null);e.default=component.exports}}]);