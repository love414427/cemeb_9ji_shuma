(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{433:function(t,e,n){var content=n(437);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("24390d02",content,!0,{sourceMap:!1})},435:function(t,e,n){t.exports=n.p+"img/noGoods.66d39af.png"},436:function(t,e,n){"use strict";var l=n(433);n.n(l).a},437:function(t,e,n){(e=n(2)(!1)).push([t.i,".time[data-v-06ac929d]{display:flex;justify-content:center}",""]),t.exports=e},438:function(t,e,n){"use strict";n(62);var l={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,n=0,l=0,o=0,r=0;e>0?(n=!0===t.isDay?Math.floor(e/86400):0,l=Math.floor(e/3600)-24*n,o=Math.floor(e/60)-24*n*60-60*l,r=Math.floor(e)-24*n*60*60-60*l*60-60*o,l<=9&&(l="0"+l),o<=9&&(o="0"+o),r<=9&&(r="0"+r),t.day=n,t.hour=l,t.minute=o,t.second=r):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}},o=(n(436),n(6)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time acea-row row-middle",style:t.justifyLeft},[t.tipText?n("span",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),t._v(" "),!0===t.isDay?n("span",{staticClass:"styleAll"},[t._v(t._s(t.day))]):t._e(),t._v(" "),t.dayText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.hour))]),t._v(" "),t.hourText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.minute))]),t._v(" "),t.minuteText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),t._v(" "),n("span",{staticClass:"styleAll"},[t._v(t._s(t.second))]),t._v(" "),t.secondText?n("span",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()])}),[],!1,null,"06ac929d",null);e.a=component.exports},467:function(t,e,n){t.exports=n.p+"img/seckill-slide-clock.043d4c6.png"},469:function(t,e,n){var content=n(560);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("4c7c3c04",content,!0,{sourceMap:!1})},558:function(t,e,n){t.exports=n.p+"img/seckill-title.930c04c.png"},559:function(t,e,n){"use strict";var l=n(469);n.n(l).a},560:function(t,e,n){var l=n(2),o=n(49),r=n(561),c=n(562),d=n(563),m=n(467);e=l(!1);var x=o(r),v=o(c),h=o(d),k=o(m);e.push([t.i,".seckill[data-v-153ab546]{min-height:330px;background:url("+x+') top/100% no-repeat}.seckill .title-section[data-v-153ab546]{padding-top:40px;padding-bottom:40px;text-align:center}.seckill .title-section img[data-v-153ab546]{display:inline-block;width:200px;height:48px;vertical-align:middle}.seckill .goods-section[data-v-153ab546]{width:1200px;margin:20px auto}.seckill .goods-section ul[data-v-153ab546]{margin-bottom:-16px;margin-left:-16px}.seckill .goods-section ul[data-v-153ab546]:after{content:"";display:block;height:0;clear:both;visibility:hidden}.seckill .goods-section ul li[data-v-153ab546]{float:left;width:288px;margin-bottom:16px;margin-left:16px;background:#fff}.seckill .goods-section ul a[data-v-153ab546]{display:block;padding:24px}.seckill .goods-section ul .image[data-v-153ab546]{width:240px;height:240px;overflow:hidden}.seckill .goods-section ul .image img[data-v-153ab546]{display:block;width:100%;height:100%;transition:1s}.seckill .goods-section ul .text[data-v-153ab546]{margin-top:18px}.seckill .goods-section ul .text .name[data-v-153ab546]{height:40px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:14px;line-height:20px;color:#282828}.seckill .goods-section ul .text .group[data-v-153ab546]{display:flex;align-items:center;margin-top:12px}.seckill .goods-section ul .text .info[data-v-153ab546]{flex:1}.seckill .goods-section ul .text .price[data-v-153ab546]{display:inline-block;font-weight:700;font-size:14px;color:#e93323}.seckill .goods-section ul .text .price span[data-v-153ab546]{font-size:22px}.seckill .goods-section ul .text del[data-v-153ab546]{font-size:12px;color:#969696}.seckill .goods-section ul .text .progress[data-v-153ab546]{margin-top:4px}.seckill .goods-section ul .text .progress .txt[data-v-153ab546]{display:inline-block;width:65px;vertical-align:middle;font-size:12px;color:#969696}.seckill .goods-section ul .text .progress .bar[data-v-153ab546]{display:inline-block;width:80px;height:8px;border-radius:4px;background:#e2e2e2;overflow:hidden;vertical-align:middle;font-size:0}.seckill .goods-section ul .text .progress .bar span[data-v-153ab546]{display:inline-block;width:50%;height:100%;background:#e93323}.seckill .goods-section ul .text button[data-v-153ab546]{width:70px;height:38px;border:none;border-radius:4px;background:#e93323;font-size:14px;color:#fff}.seckill .swiper-container[data-v-153ab546]{width:1200px;background:#fff}.seckill .swiper-container .swiper-slide[data-v-153ab546]{width:253px;height:80px;padding-right:18px;margin-right:-18px;background:url('+v+") 100% 0/18px 80px no-repeat;font-size:14px;color:#282828;cursor:pointer}.seckill .swiper-container .swiper-slide[data-v-153ab546]:last-child{margin-right:0}.seckill .swiper-container .swiper-slide.row-column div[data-v-153ab546]:first-child{width:auto;height:auto;margin-right:0;margin-bottom:4px;background:none;font-weight:700;font-size:18px;line-height:normal;text-align:inherit}.seckill .swiper-container .swiper-slide.off[data-v-153ab546]{color:#969696}.seckill .swiper-container .swiper-slide.on[data-v-153ab546]{background:url("+h+") 50%/100% 100% no-repeat;color:#fff}.seckill .swiper-container .swiper-slide>div[data-v-153ab546]:first-child{width:76px;height:60px;margin-right:16px;background:url("+k+") 50%/60px 60px no-repeat;font-weight:700;font-size:24px;line-height:60px;text-align:center}.seckill .swiper-container .swiper-slide .time[data-v-153ab546]{margin-top:8px;margin-right:-3px;margin-left:-3px;font-weight:700;font-size:17px}.seckill .swiper-container .swiper-slide[data-v-153ab546] .styleAll{width:25px;height:25px;margin-right:3px;margin-left:3px;background-color:#222;line-height:25px;text-align:center;color:#fff}.seckill .nothing[data-v-153ab546]{padding-top:250px;padding-bottom:150px;font-size:16px;text-align:center;color:#969696}.seckill .nothing img[data-v-153ab546]{margin:0 auto}",""]),t.exports=e},561:function(t,e,n){t.exports=n.p+"img/seckill-back.0e6d356.png"},562:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABQCAYAAAAUXiUwAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEqADAAQAAAABAAAAUAAAAACbUptGAAADPklEQVRYCa2Yy2oUQRSG55JsxpkwARVFCAYEUXEh2agbQV2IuBNxpYITn8THmNGtPoAbF75BCBiNCgZjwLswl57LYq5+Z7CaSU/XdFefbmi60l3n7++c+qu6JplGo/G73W4fzyiPXDabrQ4GgydKnUwGotOc+1qh3Orq6ldE9prN5k2NWE6CSa82Ho83NUJ+bL1e9yaTScm/4diYEkmMUJGengoLnIPqgyOI390nKpVKH7nb8Dzvqv/UoeELSYx4ajQa6T0lYnhqSNHz0nY5DhFJICLVVqulp2LkNqDacqGx9kVom/OStUPIg7nUpA/p1Si83lMILUPUD3mx9VYoETQDIl4g9tAaGXgQKiR9ZPQ49aMnYkyZTzj9rLSjDiuRBKbmdFJbgaoVRSPPo4g8qF5j0ntRYguFJFjSS7PoB6S4togqkshQQaa3QqfTOQHRTzVRsVj8BdEWYndsYrFS+x+czkQWMebeHz4Sx8KoXIimnyz2CfrlBWOuQ/VFTVQul2WzsY/g9aCYU2oSnMvlquwT9J4SMWzQYdockbY5nIkkUOYf6empsMAFqN4bGrkmImKfsEssi6d3xYglEpJg0quxT9B7SsTw1IiiT2ESE4kQVniK2LToKiH8dDufz2+LaOKDUbvIuWMElkzD9UqxpdA117i5/kF3J6oRrr6P8iuouuYNiYQY8goj9syIJLqS0hrnQTDYudikU0FERyMU0Hzr9XqngkRONWK3ewuBd4VC4btKCCfri8xIrZCWdYsTOzW8sylLRzAl57+h2WVlPG8LjEVEkS8j4LEyWn+GxRJKpciSCovXxJaSuR9JhMhjOj83AbZrpJBMUFZB3ZRw+Z27kGg4HFbwTiyaqNkvM33dVpfZ+1YinHyXjm/4l0dzNsDWtgql4p1ut3uSKfHD9vaw+6FE/X4/dpGNqK3Y8s26ZjrFuc4RUeQbBO5R5LkFfpHgnFAqRWY6FCiy/9FbRBB8doiItJyLbASDxRYnPzIPXa4+ETQbBA4p8lsXAdPXF6LI6SzuLGB9ir1s3uB6nRIh8oDAlywZ8q+MRIdJTZys+2bxqTkD0edEGDNBS2y609mmQPOXnwJHZ8QTNf8BpJOGdaIoJxsAAAAASUVORK5CYII="},563:function(t,e,n){t.exports=n.p+"img/seckill-slide-back.aeaa797.png"},708:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-section"},[e("img",{attrs:{src:n(558)}})])}],o={auth:!1,components:{countDown:n(438).a},data:function(){return{swiperOption:{slidesPerView:"auto"},page:1,limit:16,total:"",goodsList:[],finished:!1,currentTimeId:"",currentStopTime:"",currentTimeState:"",currentTimeStatus:"",seckillTime:[],start_time:"",stop_time:""}},fetch:function(t){var e=t.store;e.commit("isBanner",!1),e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"秒杀列表-"+this.$store.state.titleCon}},mounted:function(){var t=this;this.$nextTick((function(){t.$axios.get("/api/store/product/seckill/select").then((function(e){e.data.seckillTime.length&&(t.currentTimeId=e.data.seckillTime[e.data.seckillTimeIndex].seckill_time_id,t.currentStopTime=e.data.seckillTime[e.data.seckillTimeIndex].stop,t.currentTimeState=e.data.seckillTime[e.data.seckillTimeIndex].state,t.currentTimeStatus=e.data.seckillTime[e.data.seckillTimeIndex].pc_status,t.start_time=e.data.seckillTime[e.data.seckillTimeIndex].start_time,t.end_time=e.data.seckillTime[e.data.seckillTimeIndex].end_time,t.seckillTime=e.data.seckillTime,t.navSwiper.slideTo(e.data.seckillTimeIndex-1),t.getGoodsList())}));var e=t;e.navSwiper&&e.navSwiper.on("click",(function(){e.navSwiper.clickedIndex>2&&e.navSwiper.slideNext(),e.currentTimeId=e.seckillTime[e.navSwiper.clickedIndex].seckill_time_id,e.currentStopTime=e.seckillTime[e.navSwiper.clickedIndex].stop,e.currentTimeState=e.seckillTime[e.navSwiper.clickedIndex].state,e.currentTimeStatus=e.seckillTime[e.navSwiper.clickedIndex].pc_status,e.start_time=e.seckillTime[e.navSwiper.clickedIndex].start_time,e.end_time=e.seckillTime[e.navSwiper.clickedIndex].end_time,e.goodsList=[],e.page=1,e.finished=!1,e.getGoodsList()}))}))},methods:{getGoodsList:function(){var t=this;this.$axios.get("/api/store/product/seckill/lst",{params:{page:this.page,limit:this.limit,start_time:this.start_time,end_time:this.end_time}}).then((function(e){var data=e.data.list;t.total=e.data.count,t.goodsList=data,t.goodsList.map((function(t){t.percent=0===t.stock?"0%":parseInt(100*t.sales/t.stock)+"%"})),t.finished=data.length<t.page.limit,t.page++})).catch((function(e){t.$message.error(e)}))},bindPageCur:function(data){this.page=data,this.getGoodsList()}}},r=(n(559),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"seckill"},[t._m(0),t._v(" "),l("div",{directives:[{name:"swiper",rawName:"v-swiper:navSwiper",value:t.swiperOption,expression:"swiperOption",arg:"navSwiper"}]},[l("div",{staticClass:"swiper-wrapper"},t._l(t.seckillTime,(function(e){return l("div",{key:e.id,staticClass:"acea-row row-center-wrapper swiper-slide",class:{"row-column":1!==e.pc_status,on:t.currentTimeId==e.seckill_time_id}},[l("div",[t._v(t._s(e.start_time+":00"))]),t._v(" "),1===e.pc_status?l("div",[t._v("\n          距结束\n          "),e.stop?l("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" : ","minute-text":" : ","second-text":" ",datatime:e.stop}}):t._e()],1):l("div",[t._v(t._s(e.state))])])})),0),t._v(" "),l("div",{staticClass:"swiper-pagination"})]),t._v(" "),l("div",{staticClass:"goods-section"},[t.goodsList.length?l("ul",t._l(t.goodsList,(function(e){return l("li",{key:e.id},[l("nuxt-link",{attrs:{to:{path:"/goods_seckill_detail/"+e.product_id,query:{time:t.currentStopTime}}}},[l("div",{staticClass:"image"},[l("img",{attrs:{src:e.image}})]),t._v(" "),l("div",{staticClass:"text"},[l("div",{staticClass:"name"},[t._v(t._s(e.store_name))]),t._v(" "),l("div",{staticClass:"group"},[l("div",{staticClass:"info"},[l("div",[l("div",{staticClass:"price"},[t._v("\n                    ￥"),l("span",[t._v(t._s(e.price))])]),t._v(" "),l("del",[t._v("￥"+t._s(e.ot_price))])]),t._v(" "),l("div",{staticClass:"progress"},[l("div",{staticClass:"txt"},[t._v("已抢"+t._s(e.percent))]),t._v(" "),l("div",{staticClass:"bar"},[l("span",{style:{width:e.percent}})])])]),t._v(" "),l("button",[t._v(t._s(t.currentTimeState))])])])])],1)})),0):t._e(),t._v(" "),t.total>0?l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,pageSize:t.limit},on:{"current-change":t.bindPageCur}}):l("div",{staticClass:"nothing"},[l("img",{attrs:{src:n(435)}}),t._v("\n      暂无秒杀商品，去看点别的吧\n    ")])],1)])}),l,!1,null,"153ab546",null);e.default=component.exports}}]);