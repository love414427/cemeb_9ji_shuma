(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/component/coupon"],{"3ffe":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("58d4"),e=i("f26a"),u=i("26cb"),a={name:"coupon",props:{dataConfig:{type:Object,default:function(){}},merId:{type:String||Number,default:""}},computed:(0,u.mapGetters)(["isLogin"]),components:{authorize:function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("02f6"))}.bind(null,i)).catch(i.oe)}},watch:{isLogin:{handler:function(t,n){t&&this.getCoupon()},deep:!0}},data:function(){return{domain:e.HTTP_REQUEST_URL,couponList:[],style:this.dataConfig.tabConfig&&this.dataConfig.tabConfig.tabVal||0,themeColor:this.dataConfig.themeColor.color[0].item,mbConfig:2*this.dataConfig.mbConfig.val,prConfig:this.dataConfig.prConfig&&2*this.dataConfig.prConfig.val,bgStyle:this.dataConfig.bgStyle.type?20:0,isShowAuth:!1,isAuto:!1,diy_id:this.dataConfig.did,unique:this.dataConfig.timestamp}},created:function(){},mounted:function(){this.getCoupon()},methods:{getCoupon:function(){var t=this;(0,o.getCouponData)({diy_id:t.diy_id,unique:t.unique,mer_id:t.merId,page:1,limit:10}).then((function(n){t.$set(t,"couponList",n.data.list)})).catch((function(n){return t.$util.Tips({title:n})}))},receiveCoupon:function(n){!1===this.isLogin?(this.isAuto=!0,this.isShowAuth=!0):(0,o.setCouponReceive)(n.coupon_id).then((function(i){n.issue=1,t.showToast({title:i.message,icon:"none"})})).catch((function(n){t.showToast({title:n,icon:"none"})}))},onLoadFun:function(){this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},authOpen:function(){!1===this.isLogin&&(this.isAuto=!0,this.isShowAuth=!0)}}};n.default=a}).call(this,i("543d")["default"])},"85f9":function(t,n,i){},a32d:function(t,n,i){"use strict";i.r(n);var o=i("3ffe"),e=i.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(u);n["default"]=e.a},ac25:function(t,n,i){"use strict";i.r(n);var o=i("e8bf"),e=i("a32d");for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);i("e66b");var a=i("f0c5"),s=Object(a["a"])(e["default"],o["b"],o["c"],!1,null,"f9967b14",null,!1,o["a"],void 0);n["default"]=s.exports},e66b:function(t,n,i){"use strict";var o=i("85f9"),e=i.n(o);e.a},e8bf:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,this.couponList.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},e=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/component/coupon-create-component',
    {
        'pages/index/component/coupon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ac25"))
        })
    },
    [['pages/index/component/coupon-create-component']]
]);
