(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[4635],{57147:(e,t,i)=>{"use strict";i.d(t,{L:()=>a,E7:()=>r});var n=i(35366);let a=(()=>{class e{constructor(e){this.el=e,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator=".",this.allowNegatives=!1,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=e.nativeElement}ngOnChanges(e){if(e.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),e.min){const e=Number(this.min);this.min=isNaN(e)?-1/0:e}if(e.max){const e=Number(this.max);this.max=isNaN(e)?1/0:e}}onBeforeInput(e){if(isNaN(Number(e.data))){if(e.data===this.decimalSeparator||e.data===this.negativeSign&&this.allowNegatives)return;e.preventDefault(),e.stopPropagation()}}onKeyDown(e){if(this.navigationKeys.indexOf(e.key)>-1||("a"===e.key||"KeyA"===e.code)&&!0===e.ctrlKey||("c"===e.key||"KeyC"===e.code)&&!0===e.ctrlKey||("v"===e.key||"KeyV"===e.code)&&!0===e.ctrlKey||("x"===e.key||"KeyX"===e.code)&&!0===e.ctrlKey||("a"===e.key||"KeyA"===e.code)&&!0===e.metaKey||("c"===e.key||"KeyC"===e.code)&&!0===e.metaKey||("v"===e.key||"KeyV"===e.code)&&!0===e.metaKey||("x"===e.key||"KeyX"===e.code)&&!0===e.metaKey)return;let t="";if(this.decimal&&e.key===this.decimalSeparator)return t=this.forecastValue(e.key),t.split(this.decimalSeparator).length>2?void e.preventDefault():void(this.hasDecimalPoint=t.indexOf(this.decimalSeparator)>-1);if(e.key===this.negativeSign&&this.allowNegatives)return t=this.forecastValue(e.key),t.charAt(0)!==this.negativeSign||t.split(this.negativeSign).length>2?void e.preventDefault():void(this.hasNegativeSign=t.split(this.negativeSign).length>-1);if(" "===e.key||isNaN(Number(e.key)))return void e.preventDefault();if(t=t||this.forecastValue(e.key),this.regex&&!this.regex.test(t))return void e.preventDefault();const i=Number(t);(i>this.max||i<this.min)&&e.preventDefault()}onPaste(e){let t="";window.clipboardData?t=window.clipboardData.getData("text"):e.clipboardData&&e.clipboardData.getData&&(t=e.clipboardData.getData("text/plain")),this.pasteData(t),e.preventDefault()}onDrop(e){var t,i;const n=null!==(i=null===(t=e.dataTransfer)||void 0===t?void 0:t.getData("text"))&&void 0!==i?i:"";this.inputElement.focus(),this.pasteData(n),e.preventDefault()}pasteData(e){const t=this.sanitizeInput(e);if(!t.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,t))if(this.inputElement.setRangeText){const{selectionStart:e,selectionEnd:i}=this.inputElement;this.inputElement.setRangeText(t,null!=e?e:0,null!=i?i:0,"end"),void 0!==window.InstallTrigger&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,t);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}insertAtCursor(e,t){var i,n;const a=null!==(i=e.selectionStart)&&void 0!==i?i:0,r=null!==(n=e.selectionEnd)&&void 0!==n?n:0;e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length);const s=a+t.length;e.focus(),e.setSelectionRange(s,s),this.triggerEvent(e,"input")}triggerEvent(e,t){if("createEvent"in document){const i=document.createEvent("HTMLEvents");i.initEvent(t,!1,!0),e.dispatchEvent(i)}}sanitizeInput(e){let t,i="";t=this.decimal&&this.isValidDecimal(e)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),i=e.replace(t,"");const n=this.inputElement.maxLength;if(n>0){const e=n-this.inputElement.value.length+(i.includes(`${this.negativeSign}`)?1:0);i=e>0?i.substring(0,e):""}return i}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(e){if(this.hasDecimalPoint){const t=this.getSelection();return t&&t.indexOf(this.decimalSeparator)>-1?e.split(this.decimalSeparator).length<=2:e.indexOf(this.decimalSeparator)<0}return e.split(this.decimalSeparator).length<=2}getSelection(){var e,t;return this.inputElement.value.substring(null!==(e=this.inputElement.selectionStart)&&void 0!==e?e:0,null!==(t=this.inputElement.selectionEnd)&&void 0!==t?t:0)}forecastValue(e){var t,i;const n=null!==(t=this.inputElement.selectionStart)&&void 0!==t?t:0,a=null!==(i=this.inputElement.selectionEnd)&&void 0!==i?i:0,r=this.inputElement.value;return r.substring(0,n)+e+r.substring(a)}}return e.\u0275fac=function(t){return new(t||e)(n["\u0275\u0275directiveInject"](n.ElementRef))},e.\u0275dir=n["\u0275\u0275defineDirective"]({type:e,selectors:[["","digitOnly",""]],hostBindings:function(e,t){1&e&&n["\u0275\u0275listener"]("beforeinput",function(e){return t.onBeforeInput(e)})("keydown",function(e){return t.onKeyDown(e)})("paste",function(e){return t.onPaste(e)})("drop",function(e){return t.onDrop(e)})},inputs:{decimal:"decimal",decimalSeparator:"decimalSeparator",allowNegatives:"allowNegatives",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[n["\u0275\u0275NgOnChangesFeature"]]}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=n["\u0275\u0275defineInjector"]({imports:[[]]}),e})()},241:(e,t,i)=>{"use strict";i.d(t,{G:()=>c});var n=i(42693),a=i(529),r=i(78305),s=i(35366);const l=a.N.apiBaseLink+"/api/admin/order/",p=a.N.apiBaseLink+"/api/web/order/",o=a.N.apiBaseLink+"/api/order-temporary/";let c=(()=>{class e{constructor(e){this.httpClient=e}placeOrder(e){return this.httpClient.post(r.WO,e)}confirmPrescriptionOrder(e){return this.httpClient.post(l+"confirm-prescription-order",e)}placeTempOrder(e){return this.httpClient.post(o+"place-temp-order",e)}updateOrderSessionKey(e,t){return this.httpClient.post(o+"update-session-key/"+e+"/"+t,{})}getAllOrdersByUser(e,t){let i=new n.LE;return e?(i=i.append("pageSize",e.pageSize),i=i.append("page",e.currentPage),t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-orders-by-user",{params:i})):(t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-orders-by-user",{params:i}))}getAllPrescriptionOrdersByUser(e,t){let i=new n.LE;return e?(i=i.append("pageSize",e.pageSize),i=i.append("page",e.currentPage),t&&(i=i.append("select",t)),this.httpClient.get(p+"get-all-prescription-order-by-user",{params:i})):(t&&(i=i.append("select",t)),this.httpClient.get(p+"get-all-prescription-order-by-user",{params:i}))}getOrderDetails(e){return this.httpClient.get(l+"get-single-order-by-admin/"+e)}cancelOrderByUser(e){return this.httpClient.put(l+"cancel-order-by-user/"+e,{})}deleteOrderByAdmin(e){return this.httpClient.delete(l+"delete-order-by-admin/"+e)}getAllTransactionByUser(e,t){let i=new n.LE;return e?(i=i.append("pageSize",e.pageSize),i=i.append("page",e.currentPage),t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-transactions-by-user",{params:i})):(t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-transactions-by-user",{params:i}))}confirmPrescriptionOrderByAdmin(e){return this.httpClient.post(r.XI,e)}cancelOrderByAdmin(e){return this.httpClient.post(r.jZ,{orderId:e})}getAllOrdersByAdmin(e,t,i){let a=new n.LE;return e?(a=a.append("pageSize",e.pageSize),a=a.append("page",e.currentPage),t&&(a=a.append("select",t)),this.httpClient.get(l+"get-all-prescription-order-by-admin",{params:a})):(t&&(a=a.append("select",t)),this.httpClient.get(l+"get-all-prescription-order-by-admin",{params:a}))}getAllOrdersByAdminNoPaginate(){return this.httpClient.get(l+"get-all-orders-by-admin-no-paginate")}changeOrderStatus(e){return this.httpClient.put(l+"change-order-status",e)}getAllTransactionByAdmin(e,t){let i=new n.LE;return e?(i=i.append("pageSize",e.pageSize),i=i.append("page",e.currentPage),t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-transaction-by-admin",{params:i})):(t&&(i=i.append("select",t)),this.httpClient.get(l+"get-all-transaction-by-admin",{params:i}))}testSslSmsApi(){return this.httpClient.get(l+"sent-test-ssl-message")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](n.eN))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);