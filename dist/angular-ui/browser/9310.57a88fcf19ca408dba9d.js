(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[9310],{29310:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ProductAuthenticatorModule:()=>T});var i=n(31041),a=n(61116),r=n(35366),o=n(33464),c=n(99896),s=n(50927),l=n(56507),d=n(61613),m=n(31269);let p=(()=>{class e{constructor(){this.captchaText=""}setCaptchaText(e){this.captchaText=e}get captchaTxt(){return this.captchaText}resetCaptchaText(){this.captchaText=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n(13070),g=n(9550);const u=["captchaTxtView"];let f=(()=>{class e{constructor(e){this.bridgeService=e,this.allCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9]}ngOnInit(){this.getCaptcha()}getCaptcha(){for(let t=0;t<5;t++){const e=this.allCharacters[Math.floor(Math.random()*this.allCharacters.length)];this.captchaTxtView.nativeElement.innerText+=` ${e}`}const e=this.captchaTxtView.nativeElement.innerText.replace(/\s/g,"");this.bridgeService.setCaptchaText(e)}refreshCaptcha(){this.captchaTxtView.nativeElement.innerText="",this.getCaptcha()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](p))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-image-captcha"]],viewQuery:function(e,t){if(1&e&&r["\u0275\u0275viewQuery"](u,7),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.captchaTxtView=e.first)}},decls:8,vars:0,consts:[[1,"wrapper"],[1,"captcha-area"],[1,"captcha-img"],["src","/assets/images/captcha/captcha-bg.jpg","alt",""],[1,"captcha"],["captchaTxtView",""],["type","button",1,"reload-btn",3,"click"],[1,"fas","fa-redo-alt"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275element"](3,"img",3),r["\u0275\u0275element"](4,"span",4,5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"button",6),r["\u0275\u0275listener"]("click",function(){return t.refreshCaptcha()}),r["\u0275\u0275element"](7,"i",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())},styles:['.wrapper[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%]   .captcha-area[_ngcontent-%COMP%]{display:flex;height:50px;align-items:center;justify-content:space-between}.captcha-area[_ngcontent-%COMP%]   .captcha-img[_ngcontent-%COMP%]{flex:1;height:100%;-webkit-user-select:none;user-select:none;background:#000;border-radius:5px;position:relative}.captcha-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:5px;opacity:.95}.captcha-img[_ngcontent-%COMP%]   .captcha[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:100%;color:#fff;font-size:20px;text-align:center;letter-spacing:6px;transform:translate(-50%,-50%);text-shadow:0 0 2px #b1b1b1;font-family:"Noto Serif",serif}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;color:#00a594;cursor:pointer;background:#fff;border-radius:5px;transition:all .3s ease}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]{width:40px;height:100%;font-size:18px}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:rotate(15deg)}']}),e})();var x=n(84369),C=n(41293);const v=["templateForm"];function b(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"div",13),r["\u0275\u0275elementStart"](2,"h3"),r["\u0275\u0275text"](3,"Please enter IMEI or S/N"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"form",14,15),r["\u0275\u0275listener"]("ngSubmit",function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSubmit()}),r["\u0275\u0275elementStart"](6,"div",16),r["\u0275\u0275elementStart"](7,"div",17),r["\u0275\u0275elementStart"](8,"mat-form-field",18),r["\u0275\u0275elementStart"](9,"mat-label"),r["\u0275\u0275text"](10,"IMEI or S/N"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](11,"input",19),r["\u0275\u0275elementStart"](12,"mat-error"),r["\u0275\u0275text"](13,"This field is required"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"div",20),r["\u0275\u0275elementStart"](15,"mat-form-field",18),r["\u0275\u0275elementStart"](16,"mat-label"),r["\u0275\u0275text"](17,"Please enter verification code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](18,"input",21),r["\u0275\u0275elementStart"](19,"mat-error"),r["\u0275\u0275text"](20,"This field is required"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",22),r["\u0275\u0275element"](22,"app-image-captcha"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"div",23),r["\u0275\u0275elementStart"](24,"button",24),r["\u0275\u0275text"](25,"Verify"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("formGroup",e.dataForm),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("minLength",5)("maxLength",20),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("minLength",5)("maxLength",5)}}function M(e,t){1&e&&r["\u0275\u0275element"](0,"i",34)}function O(e,t){1&e&&r["\u0275\u0275element"](0,"i",35)}function P(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1,"Congratulation! you can be assured the product you have purchased is the official product"),r["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1,"Sorry! you can be assured the product you have purchased is not the official product"),r["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",12),r["\u0275\u0275elementStart"](1,"div",13),r["\u0275\u0275elementStart"](2,"h3"),r["\u0275\u0275text"](3,"This is a"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",25),r["\u0275\u0275elementStart"](5,"div",26),r["\u0275\u0275elementStart"](6,"div",27),r["\u0275\u0275template"](7,M,1,0,"i",28),r["\u0275\u0275template"](8,O,1,0,"i",29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",30),r["\u0275\u0275template"](10,P,2,0,"p",31),r["\u0275\u0275template"](11,_,2,0,"p",31),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"div",32),r["\u0275\u0275elementStart"](13,"button",33),r["\u0275\u0275listener"]("click",function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onBack()}),r["\u0275\u0275text"](14,"Back"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngClass",e.isAuthenticate?"success":"wrong"),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.isAuthenticate),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!e.isAuthenticate),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.isAuthenticate),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!e.isAuthenticate)}}const S=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r,o,c){this.fb=e,this.activatedRoute=t,this.uiService=n,this.productAuthenticatorService=i,this.utilsService=a,this.storageService=r,this.spinner=o,this.bridgeService=c,this.autoSlug=!0,this.isLoading=!1,this.isAuthenticate=!1,this.showMessageContainer=!1}ngOnInit(){this.dataForm=this.fb.group({imei:[null,i.kI.required],verifyCode:[null,i.kI.required]})}onSubmit(){var e;this.dataForm.invalid?this.uiService.warn("Please complete all the required fields"):(null===(e=this.bridgeService)||void 0===e?void 0:e.captchaTxt)===this.dataForm.value.verifyCode.trim()?this.checkProductAuthenticate({imeiOrSn:this.dataForm.value.imei}):this.uiService.warn("Your given captcha input is invalid")}checkProductAuthenticate(e){this.spinner.show(),this.productAuthenticatorService.checkProductAuthenticate(e).subscribe(e=>{this.spinner.hide(),this.showMessageContainer=!0,this.isAuthenticate=e.success,this.templateForm.resetForm(),this.bridgeService.resetCaptchaText()},e=>{this.spinner.hide(),this.uiService.warn("This imei or sn not exists")})}onBack(){this.showMessageContainer=!1,this.isAuthenticate=!1}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.qu),r["\u0275\u0275directiveInject"](o.gz),r["\u0275\u0275directiveInject"](c.F),r["\u0275\u0275directiveInject"](s.s),r["\u0275\u0275directiveInject"](l.F),r["\u0275\u0275directiveInject"](d.V),r["\u0275\u0275directiveInject"](m.t2),r["\u0275\u0275directiveInject"](p))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-product-authenticator"]],viewQuery:function(e,t){if(1&e&&r["\u0275\u0275viewQuery"](v,5),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t.templateForm=e.first)}},decls:21,vars:2,consts:[[1,"product-authentication-area"],[1,"authentication-main-area"],[1,"authentication-main"],[1,"authentication-title"],[1,"authentication-card"],["class","authentication-left-side",4,"ngIf"],[1,"authentication-right-side"],[1,"right-side-title"],[1,"right-side-details"],[1,"method-1"],[1,"imei-img"],["src","/assets/images/imei/imei-label.png","alt",""],[1,"authentication-left-side"],[1,"left-side-title"],["autocomplete","off",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"form"],[1,"input-1"],["appearance","outline"],["matInput","","placeholder","IMEI or S/N","value","","formControlName","imei","required","",3,"minLength","maxLength"],[1,"input-2"],["matInput","","placeholder","Please enter verification code","formControlName","verifyCode","required","",3,"minLength","maxLength"],[1,"captcha-view"],[1,"sub-btn"],["mat-button","","type","submit"],[1,"message-view"],[1,"mgs-card",3,"ngClass"],[1,"left-icon"],["class","fas fa-check-circle",4,"ngIf"],["class","fas fa-times-circle",4,"ngIf"],[1,"right-txt"],[4,"ngIf"],[1,"sub-btn",2,"margin-top","12px"],["mat-button","","type","button",3,"click"],[1,"fas","fa-check-circle"],[1,"fas","fa-times-circle"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"section",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"h3"),r["\u0275\u0275text"](5,"Verify your phone purchase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",4),r["\u0275\u0275template"](7,b,26,5,"div",5),r["\u0275\u0275template"](8,w,15,5,"div",5),r["\u0275\u0275elementStart"](9,"div",6),r["\u0275\u0275elementStart"](10,"div",7),r["\u0275\u0275elementStart"](11,"h3"),r["\u0275\u0275text"](12,"Where is my IMEI and S/N?"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"div",8),r["\u0275\u0275elementStart"](14,"div",9),r["\u0275\u0275elementStart"](15,"p"),r["\u0275\u0275text"](16,"Method 1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"p"),r["\u0275\u0275text"](18,"Find the code sticker on the back of device, or packaging box"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"div",10),r["\u0275\u0275element"](20,"img",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngIf",!t.showMessageContainer),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.showMessageContainer))},directives:[a.NgIf,i._Y,i.JL,i.sg,h.KE,h.hX,g.Nt,i.Fj,i.JJ,i.u,i.Q7,h.TO,f,x.lW,a.NgClass,C.oO],styles:[".product-authentication-area[_ngcontent-%COMP%]{display:block;width:100%;padding:20px;box-sizing:border-box;margin-top:25vh;margin-bottom:5vh}.authentication-main-area[_ngcontent-%COMP%]{display:block;max-width:1050px;width:100%;margin:auto}.authentication-title[_ngcontent-%COMP%]{display:block;margin-bottom:25px}.authentication-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#454545;font-weight:600;font-style:normal;font-family:Open Sans,sans-serif;display:block;font-size:20px;line-height:28px}.authentication-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;padding:30px;box-sizing:border-box;box-shadow:3px 3px 6px #ddd,-3px -3px 6px #ddd;min-height:350px;place-items:center}.authentication-card[_ngcontent-%COMP%]   .authentication-left-side[_ngcontent-%COMP%]{width:100%}.left-side-title[_ngcontent-%COMP%], .right-side-title[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.left-side-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .right-side-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#454545;font-weight:600;font-style:normal;font-family:Open Sans,sans-serif;display:block;font-size:17px;line-height:25px}.form[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.input-2[_ngcontent-%COMP%]{display:flex;grid-gap:5px;gap:5px}.input-2[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.input-2[_ngcontent-%COMP%]   .captcha-view[_ngcontent-%COMP%]{width:200px;margin-top:5px}.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-style:normal;font-weight:500} .form .mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#be0101}.sub-btn[_ngcontent-%COMP%]{margin-top:10px}.sub-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;color:#fff;background-color:#be0101;font-family:Open Sans,sans-serif;font-style:normal;max-width:150px;width:100%;padding:5px 12px;box-sizing:border-box;font-size:15px}.message-view[_ngcontent-%COMP%]{width:100%}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]{width:92%;padding:20px 12px;display:flex;flex-direction:row;grid-gap:8px;gap:8px;align-items:center}.message-view[_ngcontent-%COMP%]   .mgs-card.success[_ngcontent-%COMP%]{border:1px solid #02a802;color:#02a802}.message-view[_ngcontent-%COMP%]   .mgs-card.wrong[_ngcontent-%COMP%]{border:1px solid #c9080f;color:#c9080f}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]   .left-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:36px}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]   .right-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3c3c3c;font-family:Open Sans,sans-serif;font-size:15px;font-weight:600}.authentication-right-side[_ngcontent-%COMP%]{padding-left:30px;border-left:1px solid #eee}.right-side-details[_ngcontent-%COMP%]{display:block;width:100%}.right-side-details[_ngcontent-%COMP%]   .imei-img[_ngcontent-%COMP%]{width:160px}.right-side-details[_ngcontent-%COMP%]   .imei-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.method-1[_ngcontent-%COMP%], .method-2[_ngcontent-%COMP%]{margin-bottom:15px}.right-side-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Open Sans,sans-serif;font-style:normal;font-weight:500;font-size:15px;line-height:24px;margin-bottom:8px}@media (max-width:830px){.authentication-card[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}.authentication-right-side[_ngcontent-%COMP%]{border:none;border-top:1px solid #eee;padding:20px 0 0}}@media only screen and (max-width:599px){.input-2[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-top:-8px}}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[o.Bz.forChild(S)],o.Bz]}),e})();var E=n(56861),I=n(77154);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[a.CommonModule]]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[a.CommonModule,y,E.q,i.UX,I.o9,k]]}),e})()}}]);