(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[7053],{7053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PasswordRecoveryModule:()=>I});var i=n(61116),r=n(33464),o=n(35366),s=n(19195),a=n(99896),l=n(56507),d=n(31269),c=n(32456),m=n(31041),h=n(13070),u=n(9550),p=n(77307),f=n(84369),w=n(41293),g=n(35965);function S(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",9),o["\u0275\u0275elementStart"](1,"form",13,3),o["\u0275\u0275listener"]("ngSubmit",function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275reference"](2);return o["\u0275\u0275nextContext"]().onRecoverFormSubmit(t)}),o["\u0275\u0275elementStart"](3,"mat-form-field",4),o["\u0275\u0275elementStart"](4,"mat-label"),o["\u0275\u0275text"](5,"OTP"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](6,"input",14),o["\u0275\u0275elementStart"](7,"mat-icon",6),o["\u0275\u0275text"](8,"email"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"mat-error"),o["\u0275\u0275text"](10,"This field is required"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"div",15),o["\u0275\u0275elementStart"](12,"div",16),o["\u0275\u0275elementStart"](13,"span",17),o["\u0275\u0275text"](14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",18),o["\u0275\u0275elementStart"](16,"button",19),o["\u0275\u0275listener"]("click",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().resendLoginCode()}),o["\u0275\u0275text"](17," Resend Code "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"button",20),o["\u0275\u0275text"](19," Verify Code "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("maxLength",6),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("hidden",0===e.countDown),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"]("0:"+e.countDown),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("fxShow",e.countDown<=0)}}function v(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"form",13,3),o["\u0275\u0275listener"]("ngSubmit",function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275reference"](1);return o["\u0275\u0275nextContext"]().onResetFormSubmit(t)}),o["\u0275\u0275elementStart"](2,"mat-form-field",21),o["\u0275\u0275elementStart"](3,"mat-label"),o["\u0275\u0275text"](4,"New Password"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](5,"input",22),o["\u0275\u0275elementStart"](6,"mat-icon",6),o["\u0275\u0275text"](7,"lock"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"mat-error"),o["\u0275\u0275text"](9,"This field is required"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"mat-form-field",21),o["\u0275\u0275elementStart"](11,"mat-label"),o["\u0275\u0275text"](12,"Confirm Password"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](13,"input",23),o["\u0275\u0275elementStart"](14,"mat-icon",6),o["\u0275\u0275text"](15,"lock"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"mat-error"),o["\u0275\u0275text"](17,"This field is required"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"button",24),o["\u0275\u0275text"](19,"Reset Password"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}}const x=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r,o){this.userService=e,this.uiService=t,this.router=n,this.utilsService=i,this.spinner=r,this.bulkSmsService=o,this.phoneNo=null,this.otp=null,this.otpMatched=!1,this.password=null,this.timeInstance=null,this.countDown=0,this.sendVerificationCode=!1,this.showVerificationCodeField=!1,this.expireCountDown=0,this.timeInstanceExpire=null}ngOnInit(){}onPhoneFormSubmit(e){e.invalid?this.uiService.warn("Please enter your phone number"):this.utilsService.checkValidPhone(e.value.phoneNo)&&11===e.value.phoneNo.length?(this.spinner.show(),this.phoneNo=e.value.phoneNo,this.checkAndGetUserByPhone()):this.uiService.warn("Please enter a valid 11 digit phone no")}onRecoverFormSubmit(e){e.invalid||(this.otp=e.value.otp,this.verifyOtpCode())}onResetFormSubmit(e){e.invalid||(e.value.password<6?this.uiService.warn("Password must be at lest 6 characters!"):e.value.password===e.value.confirmPassword?(this.spinner.show(),this.password=e.value.password,this.editPassword()):this.uiService.warn("Password & confirm password not matched"))}checkAndGetUserByPhone(){this.userService.checkAndGetUserByPhone(this.phoneNo).subscribe(e=>{if(e.data){const e="88"+this.phoneNo;this.generatedOtpCode=this.utilsService.getRandomOtpCode6(),this.sentSingleBulkSms(e,this.generatedOtpCode+" is your OTP (One-Time Password) for password reset at E-medilife. Please enter the OTP to the verification page. Thanks.")}else this.spinner.hide(),this.uiService.warn("No account found with this phone number!")},e=>{this.spinner.hide(),console.log(e)})}sentSingleBulkSms(e,t){this.bulkSmsService.sentSingleBulkSms(e,t).subscribe(e=>{this.spinner.hide(),e.success?(this.countTime(60),this.countOtpExpireTime(3e3),this.showVerificationCodeField=!0,this.sendVerificationCode=!0):(this.spinner.hide(),this.uiService.wrong("Something went wrong! Please try again."))},e=>{this.uiService.wrong("Something went wrong! Please try again."),console.log(e),this.spinner.hide()})}editPassword(){this.userService.editPassword({phoneNo:this.phoneNo,password:this.password}).subscribe(e=>{this.spinner.hide(),this.uiService.success(e.message),this.router.navigate(["/login"])},e=>{this.spinner.hide(),console.log(e)})}resendLoginCode(){clearInterval(this.timeInstance),clearInterval(this.timeInstanceExpire);const e="88"+this.phoneNo;this.generatedOtpCode=this.utilsService.getRandomOtpCode6(),this.sentSingleBulkSms(e,this.generatedOtpCode+" is your OTP (One-Time Password) for password reset at E-medilife. Please enter the OTP to the verification page. Thanks.")}verifyOtpCode(){this.generatedOtpCode?this.otp===this.generatedOtpCode?(this.otpMatched=!0,this.showVerificationCodeField=!1,this.sendVerificationCode=!1,this.otp=""):this.uiService.wrong("Your OTP code is incorrect!"):this.uiService.wrong("Your OTP code is expired! Please try again")}countTime(e){this.timeInstance=setInterval((e=>()=>{this.countDown=e,(e=0===e?0:e-1)<=0&&(clearInterval(this.timeInstance),this.countDown=0)})(e),1e3)}countOtpExpireTime(e){this.timeInstanceExpire=setInterval((e=>()=>{this.expireCountDown=e,(e=0===e?0:e-1)<=0&&(clearInterval(this.timeInstanceExpire),this.expireCountDown=0,this.generatedOtpCode=null)})(e),1e3)}ngOnDestroy(){this.timeInstance&&clearInterval(this.timeInstance),this.timeInstanceExpire&&clearInterval(this.timeInstanceExpire),this.otpMatched=!1}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](s.K),o["\u0275\u0275directiveInject"](a.F),o["\u0275\u0275directiveInject"](r.F0),o["\u0275\u0275directiveInject"](l.F),o["\u0275\u0275directiveInject"](d.t2),o["\u0275\u0275directiveInject"](c.D))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-password-recovery"]],decls:20,vars:5,consts:[[1,"container"],[1,"form-container","form-phone"],[3,"ngSubmit"],["formDirective","ngForm"],["appearance","outline"],["name","phoneNo","ngModel","","required","","matInput","","placeholder","Phone Number","type","tel",3,"maxLength"],["matSuffix",""],["mat-raised-button","","color","warn","type","submit",3,"fxHide"],["class","form-container login-right-part",4,"ngIf"],[1,"form-container","login-right-part"],["autocomplete","off",3,"ngSubmit",4,"ngIf"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],["autocomplete","off",3,"ngSubmit"],["name","otp","ngModel","","required","","matInput","","placeholder","OTP",3,"maxLength"],[1,"bottom-view"],[1,"count-area",3,"hidden"],[1,"count-down"],["fxLayout","row","fxLayoutAlign","space-between center",1,""],["fxHide","","mat-button","","color","primary",1,"button","on-float-left",3,"fxShow","click"],["mat-raised-button","","color","warn","type","submit",1,"btn-submit"],["appearance","outline",1,"password"],["name","password","ngModel","","required","","matInput","","placeholder","Enter new password","type","password"],["name","confirmPassword","ngModel","","required","","matInput","","placeholder","Enter confirm password","type","password"],["mat-raised-button","","color","warn","type","submit"]],template:function(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"form",2,3),o["\u0275\u0275listener"]("ngSubmit",function(){o["\u0275\u0275restoreView"](e);const n=o["\u0275\u0275reference"](3);return t.onPhoneFormSubmit(n)}),o["\u0275\u0275elementStart"](4,"mat-form-field",4),o["\u0275\u0275elementStart"](5,"mat-label"),o["\u0275\u0275text"](6,"Phone Number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](7,"input",5),o["\u0275\u0275elementStart"](8,"mat-icon",6),o["\u0275\u0275text"](9,"phone"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"mat-error"),o["\u0275\u0275text"](11,"This field is required"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"button",7),o["\u0275\u0275text"](13,"Recover Via Phone Number "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](14,S,20,4,"div",8),o["\u0275\u0275elementStart"](15,"div",9),o["\u0275\u0275template"](16,v,20,0,"form",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"ngx-spinner",11),o["\u0275\u0275elementStart"](18,"p",12),o["\u0275\u0275text"](19," Loading... "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&(o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("maxLength",11),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("fxHide",t.showVerificationCodeField||t.otpMatched),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.showVerificationCodeField),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.otpMatched),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("fullScreen",!0))},directives:[m._Y,m.JL,m.F,h.KE,h.hX,m.Fj,u.Nt,m.JJ,m.On,m.Q7,p.Hw,h.R9,h.TO,f.lW,w.b8,i.NgIf,d.Ro,g.xw,g.Wh],styles:[".container[_ngcontent-%COMP%]{padding:40px 0}.form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:10px auto}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-width:599px){.form-container[_ngcontent-%COMP%]{padding:0 12px}}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(x)],r.Bz]}),e})();var C=n(51428),E=n(56861),P=n(75425);let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[i.CommonModule,b,C.ww,m.u5,E.q,P.m]]}),e})()}}]);