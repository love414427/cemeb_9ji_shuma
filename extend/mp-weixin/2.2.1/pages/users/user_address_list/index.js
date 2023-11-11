(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address_list/index"],{3031:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.addressList.length<1&&t.page>1),s=t.addressList.length,n=t.addressList.length,d=t.addressList.length,o=t.addressList.length<1&&t.page>1;t.$mp.data=Object.assign({},{$root:{g0:e,g1:s,g2:n,g3:d,g4:o}})},n=[]},6014:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e("cd6d");var s=e("6859"),n=e("26cb"),d=e("f26a"),o={components:{authorize:function(){Promise.all([e.e("common/vendor"),e.e("components/Authorize")]).then(function(){return resolve(e("02f6"))}.bind(null,e)).catch(e.oe)}},data:function(){return{addressList:[],cartId:"",pinkId:0,couponId:0,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,wxConfig:{},domain:d.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["isLogin","viewColor"]),onLoad:function(t){this.isLogin?(this.cartId=t.cartId||"",this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.getAddressList(!0)):(this.isAuto=!0,this.isShowAuth=!0)},onReady:function(){},onShow:function(){this.getAddressList(!0)},methods:{onLoadFun:function(){this.isShowAuth=!1,this.getAddressList()},authColse:function(t){this.isShowAuth=t},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(t){var e={};e.province=t.provinceName,e.city=t.cityName,e.district=t.countyName,(0,s.editAddress)({is_default:1,real_name:t.userName,phone:t.telNumber,detail:t.detailInfo,province:t.provinceName,district:t.countyName,city:t.cityName,city_id:""}).then((function(t){i.$util.Tips({title:"添加成功",icon:"success"},(function(){i.getAddressList(!0)}))})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:"取消选择"})}})},fail:function(e){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this;t.$wechat.openAddress().then((function(i){(0,s.editAddress)({real_name:i.userName,phone:i.telNumber,province:i.provinceName,city:i.cityName,district:i.countryName,detail:i.detailInfo,post_code:i.postalCode,is_default:1,city_id:""}).then((function(){t.$util.Tips({title:"添加成功",icon:"success"},(function(){t.getAddressList(!0)}))})).catch((function(i){return t.$util.Tips({title:i||"添加失败"})}))}))},getAddressList:function(t){var i=this;t&&(i.loadend=!1,i.page=1,i.$set(i,"addressList",[])),i.loading||i.loadend||(i.loading=!0,i.loadTitle="",(0,s.getAddressList)({page:i.page,limit:i.limit}).then((function(t){var e=t.data.list,s=e.length<i.limit;i.addressList=i.$util.SplitArray(e,i.addressList),i.$set(i,"addressList",i.addressList),i.loadend=s,i.loadTitle=s?"我也是有底线的":"加载更多",i.page=i.page+1,i.loading=!1})).catch((function(t){i.loading=!1,i.loadTitle="加载更多"})))},radioChange:function(t){var i=parseInt(t.detail.value),e=this,n=this.addressList[i];if(void 0==n)return e.$util.Tips({title:"您设置的默认地址不存在!"});(0,s.setAddressDefault)(n.address_id).then((function(t){for(var s=0,n=e.addressList.length;s<n;s++)e.addressList[s].is_default=s==i;e.$util.Tips({title:"设置成功",icon:"success"},(function(){e.$set(e,"addressList",e.addressList)}))})).catch((function(t){return e.$util.Tips({title:t})}))},editAddress:function(i){var e=this.cartId,s=this.pinkId,n=this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?id="+i+"&cartId="+e+"&pinkId="+s+"&couponId="+n})},delAddress:function(t){var i=this,e=this.addressList[t];if(void 0==e)return i.$util.Tips({title:"您删除的地址不存在!"});(0,s.delAddress)(e.address_id).then((function(e){i.$util.Tips({title:"删除成功",icon:"success"},(function(){i.addressList.splice(t,1),i.$set(i,"addressList",i.addressList)}))})).catch((function(t){return i.$util.Tips({title:t})}))},addAddress:function(){var i=this.cartId;this.pinkId,this.couponId;this.cartId="",this.pinkId="",this.couponId="",t.navigateTo({url:"/pages/users/user_address/index?cartId="+i})},goOrder:function(i){var e="",s="",n="";this.cartId&&i&&(e=this.cartId,s=this.pinkId,n=this.couponId,this.cartId="",this.pinkId="",this.couponId="",t.redirectTo({url:"/pages/users/order_confirm/index?is_address=1&cartId="+e+"&addressId="+i+"&pinkId="+s+"&couponId="+n}))}},onReachBottom:function(){this.getAddressList()}};i.default=o}).call(this,e("543d")["default"])},9103:function(t,i,e){},cd60:function(t,i,e){"use strict";e.r(i);var s=e("6014"),n=e.n(s);for(var d in s)["default"].indexOf(d)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(d);i["default"]=n.a},d96e:function(t,i,e){"use strict";e.r(i);var s=e("3031"),n=e("cd60");for(var d in n)["default"].indexOf(d)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(d);e("fc54");var o=e("f0c5"),a=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"771ab6ac",null,!1,s["a"],void 0);i["default"]=a.exports},f35f:function(t,i,e){"use strict";(function(t,i){var s=e("4ea4");e("4c7d");s(e("66fd"));var n=s(e("d96e"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},fc54:function(t,i,e){"use strict";var s=e("9103"),n=e.n(s);n.a}},[["f35f","common/runtime","common/vendor"]]]);