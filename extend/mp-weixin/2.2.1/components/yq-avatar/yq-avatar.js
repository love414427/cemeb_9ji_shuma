(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/yq-avatar/yq-avatar"],{"0191":function(t,i,e){"use strict";(function(t){var s=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var h=s(e("2eee")),a=s(e("c973"));function n(t,i){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,i){if(!t)return;if("string"===typeof t)return r(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,i)}(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var s=0,h=function(){};return{s:h,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:h}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==e.return||e.return()}finally{if(o)throw a}}}}function r(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,s=new Array(i);e<i;e++)s[e]=t[e];return s}var o={name:"yq-avatar",data:function(){return{csH:"0px",sD:"none",sT:"-10000px",pT:"-10000px",iS:{},sS:{},sO:!0,bW:"19%",bD:"flex",tp:0,imgSrc:{imgSrc:""}}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",fileType:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created:function(){var i=this;this.cc=t.createCanvasContext("avatar-canvas",this),this.cco=t.createCanvasContext("oper-canvas",this),this.ccp=t.createCanvasContext("prv-canvas",this),this.qlty=parseFloat(this.quality)||1,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate=!1===this.canRotate||!0===this.inner||"true"===this.inner||"false"===this.canRotate?0:1,this.letScale=!1===this.canScale||"false"===this.canScale?0:1,this.isin=!0===this.inner||"true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=parseFloat(this.minScale)||.3,this.mxScale=parseFloat(this.maxScale)||4,this.noBar=!0===this.noTab||"true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.fType="jpg"===this.fileType?"jpg":"png",this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),this.noBar?this.fWindowResize():t.showTabBar({fail:function(){i.noBar=1},success:function(){i.noBar=0},complete:function(t){i.fWindowResize()}})},methods:{fWindowResize:function(){var i=t.getSystemInfoSync();this.platform=i.platform,this.wW=i.windowWidth,this.drawTop=0,this.wH=i.windowHeight,this.noBar||(this.wH+=50),this.csH=this.wH-50+"px",this.tp=this.csH,this.pxRatio=this.wW/750;var e=this.avatarStyle;if(e&&!0!==e&&(e=e.trim())){e=e.split(";");var s,h={},a=n(e);try{for(a.s();!(s=a.n()).done;){var r=s.value;if(r){if(r=r.trim().split(":"),r[1].toString().indexOf("upx")>=0){var o=r[1].trim().split(" ");for(var c in o)o[c]&&o[c].toString().indexOf("upx")>=0&&(o[c]=parseFloat(o[c])*this.pxRatio+"px");r[1]=o.join(" ")}h[r[0].trim()]=r[1].trim()}}}catch(l){a.e(l)}finally{a.f()}this.iS=h}this.expWidth&&(this.eW=this.expWidth.toString().indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.eH=this.expHeight.toString().indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.sD&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var i=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){i.fSelecting=!1}),500),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.showLoading({title:"加载中...",mask:!0});var s=i.imgPath=e.tempFilePaths[0],h=e.tempFiles[0].name;!h&&s&&(h=s.split("/"),h=h[h.length-1]),t.getImageInfo({src:s,success:function(e){if(i.imgWidth=e.width,i.imgHeight=e.height,i.path=s,!i.hasSel){var a=i.sS||{};if(!i.selWidth||!i.selHeight)return void t.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var n=i.selWidth.toString().indexOf("upx")>=0?parseInt(i.selWidth)*i.pxRatio:parseInt(i.selWidth),r=i.selHeight.toString().indexOf("upx")>=0?parseInt(i.selHeight)*i.pxRatio:parseInt(i.selHeight);a.width=n+"px",a.height=r+"px",a.top=(i.wH-r-50|0)/2+"px",a.left=(i.wW-n|0)/2+"px",i.sS=a}i.noBar?i.fDrawInit(!0):t.hideTabBar({complete:function(){i.fDrawInit(!0)}}),i.$emit("getName",h)},fail:function(){t.showToast({title:"请选择正确图片",duration:2e3})},complete:function(){t.hideLoading()}})}}))},fUpload:function(){var i=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){i.fUploading=!1}),1e3);var e=this.sS,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height),r=this.eW||a*this.pixelRatio,o=this.eH||n*this.pixelRatio;t.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn,base64:i.base64||null})},fail:function(i){t.showToast({title:"error1",duration:2e3})},complete:function(){t.hideLoading(),i.noBar||t.showTabBar(),i.$emit("end")}},this)}},fPrvUpload:function(){var i=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){i.fPrvUploading=!1}),1e3);var e=this.sS,s=(parseInt(e.width),parseInt(e.height),this.prvX),h=this.prvY,a=this.prvWidth,n=this.prvHeight,r=this.eW||parseInt(e.width)*this.pixelRatio,o=this.eH||parseInt(e.height)*this.pixelRatio;t.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"prv-canvas",fileType:this.fType,quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn,base64:i.base64||null})},fail:function(){t.showToast({title:"error_prv",duration:2e3})},complete:function(){t.hideLoading(),i.noBar||t.showTabBar(),i.$emit("end")}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.wW,s=this.wH,h=this.imgWidth,a=this.imgHeight,n=h/a,r=e-40,o=s-50-80,c=r/o,l=parseInt(this.sS.width),p=parseInt(this.sS.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":n>1?this.fixWidth=1:this.fixHeight=1;break;case"short":n>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":l>p?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":l>p?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":n>1?this.lckWidth=1:this.lckHeight=1;break;case"short":n>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":l>p?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":l>p?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(r=l,o=r/n):this.fixHeight?(o=p,r=o*n):n<c?a<o?(r=h,o=a):r=o*n:h<r?(r=h,o=a):o=r/n,this.isin&&(r<l&&(r=l,o=r/n,this.lckHeight=0),o<p&&(o=p,r=o*n,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-r)/2|0,this.posHeight=(s-o-50)/2|0,this.useWidth=0|r,this.useHeight=0|o,this.centerX=this.posWidth+r/2,this.centerY=this.posHeight+o/2,this.focusX=0,this.focusY=0;var f=this.sS,u=parseInt(f.left),d=parseInt(f.top),g=parseInt(f.width),v=parseInt(f.height),x=(this.canvas,this.canvasOper,this.cc,this.cco);x.beginPath(),x.setLineWidth(3),x.setGlobalAlpha(1),x.setStrokeStyle("white"),x.strokeRect(u,d,g,v),x.setFillStyle("black"),x.setGlobalAlpha(.5),x.fillRect(0,0,this.wW,d),x.fillRect(0,d,u,v),x.fillRect(0,d+v,this.wW,this.wH-v-d-50),x.fillRect(u+g,d,this.wW-g-u,v),x.setGlobalAlpha(1),x.setStrokeStyle("red"),x.moveTo(u+15,d),x.lineTo(u,d),x.lineTo(u,d+15),x.moveTo(u+g-15,d),x.lineTo(u+g,d),x.lineTo(u+g,d+15),x.moveTo(u+15,d+v),x.lineTo(u,d+v),x.lineTo(u,d+v-15),x.moveTo(u+g-15,d+v),x.lineTo(u+g,d+v),x.lineTo(u+g,d+v-15),x.stroke(),x.draw(!1,(function(){i&&(t.sD="flex",t.sT=t.drawTop+"px",t.fDrawImage(!0))})),this.$emit("init")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.cc,e=this.useWidth*this.scaleSize,s=this.useHeight*this.scaleSize;if(this.bgImage?i.drawImage(this.bgImage,0,0,this.wW,this.wH-50):i.fillRect(0,0,this.wW,this.wH-50),this.isin){var h=this.focusX*(this.scaleSize-1),a=this.focusY*(this.scaleSize-1);i.translate(this.centerX,this.centerY),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,this.posWidth-this.centerX-h,this.posHeight-this.centerY-a,e,s)}else i.translate(this.posWidth+e/2,this.posHeight+s/2),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-e/2,-s/2,e,s);i.draw(!1)}},fPreview:function(){var i=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){i.fPreviewing=!1}),1e3);var e=this.sS,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height);t.showLoading({title:"加载中...",mask:!0}),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,expWidth:a*this.pixelRatio,expHeight:n*this.pixelRatio,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(t){i.prvImgTmp=t=t.tempFilePath;var e=i.ccp,s=i.wW,h=parseInt(i.csH),a=parseInt(i.sS.width),n=parseInt(i.sS.height),r=s-40,o=h-80,c=r/a,l=n*c;l<o?(a=r,n=l):(c=o/n,a*=c,n=o),e.fillRect(0,0,s,h),i.prvX=s=(s-a)/2|0,i.prvY=h=(h-n)/2|0,i.prvWidth=a|=0,i.prvHeight=n|=0,e.drawImage(t,s,h,a,n),e.draw(!1),i.sO=!1,i.pT=i.drawTop+"px"},fail:function(){t.showToast({title:"error2",duration:2e3})},complete:function(){t.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var s=i.selWidth,h=i.selHeight,a=i.expWidth,n=i.expHeight,r=i.quality,o=i.canRotate,c=i.canScale,l=i.minScale,p=i.maxScale,f=i.stretch,u=i.fileType,d=i.inner,g=i.lock;a&&(this.eW=a.toString().indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a)),n&&(this.eH=n.toString().indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),this.letRotate=!1===o||!0===d||"true"===d||"false"===o?0:1,this.letScale=!1===c||"false"===c?0:1,this.qlty=parseFloat(r)||1,this.mnScale=parseFloat(l)||.3,this.mxScale=parseFloat(p)||4,this.stc=f,this.isin=!0===d||"true"===d?1:0,this.fType="jpg"===u?"jpg":"png",this.lck=g,this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),s&&h&&(s=s.toString().indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),h=h.toString().indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h),this.sS.width=s+"px",this.sS.height=h+"px",this.sS.top=(this.wH-h-50|0)/2+"px",this.sS.left=(this.wW-s|0)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],s=i[1];if(this.touch0=e,this.touch1=s,s){var h=s.x-e.x,a=s.y-e.y;this.fgDistance=Math.sqrt(h*h+a*a)}},fMove:function(t){var i=t.touches,e=i[0],s=i[1];if(s){var h=s.x-e.x,a=s.y-e.y,n=Math.sqrt(h*h+a*a),r=.005*(n-this.fgDistance),o=this.scaleSize+r;do{if(!this.letScale)break;if(o<this.mnScale)break;if(o>this.mxScale)break;var c=this.useWidth*r/2,l=this.useHeight*r/2;if(this.isin){var p,f,u=this.useWidth*o,d=this.useHeight*o,g=(this.posWidth,this.posHeight,parseInt(this.sS.left)),v=parseInt(this.sS.top),x=parseInt(this.sS.width),m=parseInt(this.sS.height),w=g+x,S=v+m;if(u<=x||d<=m)break;this.cx=p=this.focusX*o-this.focusX,this.cy=f=this.focusY*o-this.focusY,this.posWidth-=c,this.posHeight-=l,this.posWidth-p>g&&(this.posWidth=g+p),this.posWidth+u-p<w&&(this.posWidth=w-u+p),this.posHeight-f>v&&(this.posHeight=v+f),this.posHeight+d-f<S&&(this.posHeight=S-d+f)}else this.posWidth-=c,this.posHeight-=l;this.scaleSize=o}while(0);this.fgDistance=n,s.x!==e.x&&this.letRotate&&(h=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),a=(s.y-e.y)/(s.x-e.x),this.rotateDeg+=180*Math.atan((a-h)/(1+h*a))/Math.PI,this.touch0=e,this.touch1=s),this.fDrawImage()}else if(this.touch0){var I=e.x-this.touch0.x,b=e.y-this.touch0.y,H=this.posWidth+I,W=this.posHeight+b;if(this.isin){var y,T,k=this.useWidth*this.scaleSize,D=this.useHeight*this.scaleSize,R=H,P=W,O=R+k,M=P+D,Y=parseInt(this.sS.left),q=parseInt(this.sS.top),F=Y+parseInt(this.sS.width),z=q+parseInt(this.sS.height);this.cx=y=this.focusX*this.scaleSize-this.focusX,this.cy=T=this.focusY*this.scaleSize-this.focusY,!this.lckWidth&&Math.abs(I)<100&&(Y<R-y?this.posWidth=Y+y:F>O-y?this.posWidth=F-k+y:(this.posWidth=H,this.focusX-=I)),!this.lckHeight&&Math.abs(b)<100&&(q<P-T?(this.focusY-=q+T-this.posHeight,this.posHeight=q+T):z>M-T?(this.focusY-=z+T-(this.posHeight+D),this.posHeight=z-D+T):(this.posHeight=W,this.focusY-=b))}else Math.abs(I)<100&&!this.lckWidth&&(this.posWidth=H),Math.abs(b)<100&&!this.lckHeight&&(this.posHeight=W),this.focusX-=I,this.focusY-=b;this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fHideImg:function(){this.prvImg="",this.pT="-10000px",this.sO=!0,this.prvImgData=null,this.target=null},fClose:function(){this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||t.showTabBar(),this.$emit("end")},fGetImgData:function(){var i=this;return new Promise((function(e,s){var h=i.prvX,a=i.prvY,n=i.prvWidth,r=i.prvHeight;t.canvasGetImageData({canvasId:"prv-canvas",x:h,y:a,width:n,height:r,success:function(t){e(t.data)},fail:function(t){s(t)}},i)}))},fColorChange:function(i){var e=this;return(0,a.default)(h.default.mark((function s(){var a,n,r,o,c,l,p,f,u,d,g,v,x,m,w,S,I,b,H,W,y,T,k,D,R,P,O;return h.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=Date.now(),!(a-e.prvTm<100)){s.next=3;break}return s.abrupt("return");case 3:if(e.prvTm=a,t.showLoading({title:"加载中...",mask:!0}),e.prvImgData){s.next=11;break}return s.next=8,e.fGetImgData().catch((function(){t.showToast({title:"error_read",duration:2e3})}));case 8:if(e.prvImgData=s.sent){s.next=10;break}return s.abrupt("return");case 10:e.target=new Uint8ClampedArray(e.prvImgData.length);case 11:if(n=e.prvImgData,r=e.target,o=i.detail.value,0===o)r=n;else for(o=(o+100)/200,o<.005&&(o=0),o>.995&&(o=1),y=n.length-1;y>=0;y-=4)c=n[y-3]/255,l=n[y-2]/255,p=n[y-1]/255,S=Math.max(c,l,p),w=Math.min(c,l,p),v=S-w,S===w?u=0:S===c&&l>=p?u=(l-p)/v*60:S===c&&l<p?u=(l-p)/v*60+360:S===l?u=(p-c)/v*60+120:S===p&&(u=(c-l)/v*60+240),g=(S+w)/2,0===g||S===w?d=0:0<g&&g<=.5?d=v/(2*g):g>.5&&(d=v/(2-2*g)),n[y]&&(f=n[y]),o<.5?d=d*o/.5:o>.5&&(d=2*d+2*o-d*o/.5-1),0===d?c=l=p=Math.round(255*g):(g<.5?m=g*(1+d):g>=.5&&(m=g+d-g*d),x=2*g-m,I=u/360,b=I+1/3,H=I,W=I-1/3,T=function(t){return t<0?t+1:t>1?t-1:t},k=function(t){return t<1/6?x+6*(m-x)*t:t>=1/6&&t<.5?m:t>=.5&&t<2/3?x+6*(m-x)*(2/3-t):x},c=b=Math.round(255*k(T(b))),l=H=Math.round(255*k(T(H))),p=W=Math.round(255*k(T(W)))),f&&(r[y]=f),r[y-3]=c,r[y-2]=l,r[y-1]=p;D=e.prvX,R=e.prvY,P=e.prvWidth,O=e.prvHeight,t.canvasPutImageData({canvasId:"prv-canvas",x:D,y:R,width:P,height:O,data:r,fail:function(){t.showToast({title:"error_put",duration:2e3})},complete:function(){t.hideLoading()}},e);case 15:case"end":return s.stop()}}),s)})))()},btop:function(t){return this.base64=t,new Promise((function(i,e){var s=t.split(","),h=s[0].match(/:(.*?);/)[1],a=atob(s[1]),n=a.length,r=new Uint8Array(n);while(n--)r[n]=a.charCodeAt(n);return i((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:h})))}))}}};i.default=o}).call(this,e("543d")["default"])},"0738":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return h})),e.d(i,"a",(function(){}));var s=function(){var t=this.$createElement,i=(this._self._c,this.__get_style([this.iS]));this.$mp.data=Object.assign({},{$root:{s0:i}})},h=[]},"9b23":function(t,i,e){},b501:function(t,i,e){"use strict";e.r(i);var s=e("0191"),h=e.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);i["default"]=h.a},b70d:function(t,i,e){"use strict";e.r(i);var s=e("0738"),h=e("b501");for(var a in h)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return h[t]}))}(a);e("ccb1");var n=e("f0c5"),r=Object(n["a"])(h["default"],s["b"],s["c"],!1,null,"26fa3e09",null,!1,s["a"],void 0);i["default"]=r.exports},ccb1:function(t,i,e){"use strict";var s=e("9b23"),h=e.n(s);h.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yq-avatar/yq-avatar-create-component',
    {
        'components/yq-avatar/yq-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b70d"))
        })
    },
    [['components/yq-avatar/yq-avatar-create-component']]
]);
