"use strict";function t(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function e(e,i){for(var n=0;n<i.length;n++){var o=i[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t(o.key),o)}}var i=function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.validateOptions(e),this.options=e,this.modal=null,this.iframe=null,this.loadingIndicator=null,this.createModal()},(i=[{key:"validateOptions",value:function(t){if(!t.paymentLink||!this.isValidUrl(t.paymentLink))throw new Error("Invalid or missing paymentLink.")}},{key:"isValidUrl",value:function(t){try{return t=new URL(t)}catch(t){return!1}}},{key:"createModal",value:function(){var t=this;document.body.insertAdjacentHTML("beforeend",'\n            <div id="chimoneyModal" style="display:none; position: fixed; z-index: 10000; left: 0; top: 0; width: 100%; min-height:70vh; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8);">\n                <div style="background-color: #ffffff; margin: 2% auto; padding: 0px; padding-bottom: 0px; border: 1px solid #dddddd; width: 90%; height: 90%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width:550px;">\n                    <span id="closeModal" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;padding-right: 10px;">&times;</span>\n                    <iframe id="chimoneyPaymentFrame" style="width:100%; min-height:500px; border:none; border-radius: 5px; z-index: 1000"></iframe>\n                    <div id="loadingIndicator" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block;">\n                      <img src="https://imagedelivery.net/FWOxhF6qUOoRrmL6RllgbQ/519deb7a-a00a-4d41-24ce-9c46d17f7f00/public" alt="Loading..." style="width: 270px; height: 180px;">\n                    </div>\n                </div>\n            </div>\n        '),this.modal=document.getElementById("chimoneyModal"),this.modal.style.minHeight="80vh",this.iframe=document.getElementById("chimoneyPaymentFrame"),this.loadingIndicator=document.getElementById("loadingIndicator"),document.getElementById("closeModal").addEventListener("click",(function(){return t.close()})),this.iframe.addEventListener("load",(function(){t.loadingIndicator.style.display="none"}))}},{key:"open",value:function(){this.applyBranding(),this.iframe.style.width="100%",this.iframe.style.height="90%",this.iframe.src=this.appendCustomizations(this.options.paymentLink),this.modal.style.display="block",this.loadingIndicator.style.display="block"}},{key:"close",value:function(){this.modal.style.display="none"}},{key:"applyBranding",value:function(){this.options.brandColor&&(this.modal.querySelector("div").style.borderColor=this.options.brandColor)}},{key:"appendCustomizations",value:function(t){var e=decodeURIComponent(new URLSearchParams(this.options).toString());return"".concat(t,"&").concat(e)}}])&&e(t.prototype,i),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,i,n}();module.exports=i;
