(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/addGoods/freightTemplate"],{"09f7":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(i("9523")),s=(i("5a8f"),i("0b33"));function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){(0,c.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var a={components:{search:function(){i.e("pages/product/components/search").then(function(){return resolve(i("fe4c"))}.bind(null,i)).catch(i.oe)},selectForm:function(){i.e("pages/product/components/selectForm").then(function(){return resolve(i("50b2"))}.bind(null,i)).catch(i.oe)}},data:function(){return{mer_id:"",allSelect:!1,administrationFlag:!1,selectNum:0,loaded:!1,loading:!1,where:{page:1,limit:999},selectFormList:[]}},watch:{selectFormList:{handler:function(t){this.selectNum=t.filter((function(t){return t.select})).length,this.selectNum==t.length?this.allSelect=!0:this.allSelect=!1},deep:!0}},onLoad:function(t){this.mer_id=t.mer_id},onShow:function(){this.getShippingList("")},onReachBottom:function(){this.getShippingList("")},methods:{getShippingList:function(e){var i=this;t.showLoading({title:"加载中",mask:!0}),(0,s.templateList)(i.mer_id,r(r({},i.where),{},{name:e})).then((function(e){t.hideLoading(),i.selectFormList=e.data.list,i.selectFormList.length>0&&e.data.list.forEach((function(t){i.$set(t,"type","select"),i.$set(t,"label",t.name),i.$set(t,"jumpLogic",!0),i.$set(t,"select",!1),i.administrationFlag||i.$delete(t,"select")}))}),(function(t){i.$util.Tips({title:t.msg})}))},handleJumpLogic:function(e){t.navigateTo({url:"/pages/product/addGoods/addFreightTemplate?mer_id=".concat(this.mer_id,"&shipping_id=").concat(e.shipping_template_id)})},newSpecifications:function(){t.navigateTo({url:"/pages/product/addGoods/addFreightTemplate?mer_id=".concat(this.mer_id)})},subDel:function(){var t=this,e=[];if(t.selectFormList.forEach((function(t){t.select&&e.push(t.shipping_template_id)})),0==e.length)return t.$util.Tips({title:"请选择规格"});(0,s.templateDelete)(t.mer_id,{ids:e}).then((function(e){t.$util.Tips({title:e.message,icon:"success"}),t.where.page=1,t.selectFormList=[],t.getShippingList("")})).catch((function(e){return t.$util.Tips({title:e})}))},selectAll:function(){var t=this;this.allSelect=!this.allSelect,this.allSelect?this.selectFormList.forEach((function(e){t.$set(e,"select",!0)})):this.selectFormList.forEach((function(e){t.$set(e,"select",!1)}))},handleAdministration:function(){var t=this;this.administrationFlag=!this.administrationFlag,this.administrationFlag?this.selectFormList.forEach((function(e){t.$set(e,"select",!1)})):this.selectFormList.forEach((function(e){t.$delete(e,"select")}))}}};e.default=a}).call(this,i("543d")["default"])},"124c":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("4c7d");n(i("66fd"));var c=n(i("8642"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(c.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"2ca1":function(t,e,i){"use strict";i.r(e);var n=i("09f7"),c=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=c.a},"807b":function(t,e,i){},8642:function(t,e,i){"use strict";i.r(e);var n=i("c26b"),c=i("2ca1");for(var s in c)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return c[t]}))}(s);i("d8d7");var o=i("f0c5"),r=Object(o["a"])(c["default"],n["b"],n["c"],!1,null,"0f20aa8a",null,!1,n["a"],void 0);e["default"]=r.exports},c26b:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=(this._self._c,this.selectFormList.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},c=[]},d8d7:function(t,e,i){"use strict";var n=i("807b"),c=i.n(n);c.a}},[["124c","common/runtime","common/vendor"]]]);