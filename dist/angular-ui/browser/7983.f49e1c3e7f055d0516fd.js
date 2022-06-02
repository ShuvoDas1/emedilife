(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[7983],{47983:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PromoPageModule:()=>I});var i=n(61116),o=n(33464),r=n(31041),a=n(80848),s=n(35366),d=n(99896),c=n(74637),l=n(31269),m=n(61613),p=n(92935),g=n(68370),u=n(35965),h=n(13070),f=n(9550),P=n(84369),v=n(41293),S=n(77307);const b=function(e){return[e,"image-gallery"]},x=function(e){return{url:e}},_=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,r,a,s,d){this.fb=e,this.activatedRoute=t,this.uiService=n,this.router=i,this.promoPageService=o,this.spinner=r,this.storageService=a,this.dialog=s,this.reloadService=d,this.isLoading=!1,this.placeholder="/assets/images/avatar/image-upload.jpg",this.needSessionDestroy=!0}ngOnInit(){this.reloadService.refreshPromoPage$.subscribe(()=>{this.getPromoPage()}),this.initFormGroup(),this.getPromoPage(),this.setFormData()}initFormGroup(){this.dataForm=this.fb.group({image:[null,r.kI.required],routerLink:[null,r.kI.required],promoName:[null]})}setFormData(){this.storageService.getStoredInput("PROMO_PAGE_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("PROMO_PAGE_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.placeholder}onHoldInputData(){var e;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(e=this.dataForm)||void 0===e?void 0:e.value,"PROMO_PAGE_INPUT")}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.promoPage){const e=Object.assign(Object.assign({},this.dataForm.value),{_id:this.promoPage._id});this.updatePromoPageInfo(e)}else this.addPromoPage(this.dataForm.value)}addPromoPage(e){this.spinner.show(),this.promoPageService.addPromoPage(e).subscribe(e=>{this.uiService.success(e.message),this.spinner.hide(),this.storageService.removeSessionData("PROMO_PAGE_INPUT"),this.reloadService.needRefreshPromoPage$()},e=>{this.spinner.hide(),console.log(e)})}getPromoPage(){this.spinner.show(),this.promoPageService.getPromoPage().subscribe(e=>{var t;this.spinner.hide(),e.data&&(this.promoPage=e.data,this.pickedImage=null===(t=e.data)||void 0===t?void 0:t.image,this.dataForm.patchValue(this.promoPage))},e=>{this.spinner.hide(),console.log(e)})}updatePromoPageInfo(e){this.spinner.show(),this.promoPageService.updatePromoPageInfo(e).subscribe(e=>{this.uiService.success(e.message),this.storageService.removeSessionData("PROMO_PAGE_INPUT"),this.reloadService.needRefreshPromoPage$(),this.spinner.hide()},e=>{this.spinner.hide(),console.log(e)})}deletePromoPage(e){this.spinner.show(),this.promoPageService.deletePromoPage(e).subscribe(e=>{this.uiService.success(e.message),this.storageService.removeSessionData("PROMO_PAGE_INPUT"),this.pickedImage=this.placeholder,this.promoPage=null,this.dataForm.reset(),this.reloadService.needRefreshPromoPage$(),this.spinner.hide()},e=>{console.log(e),this.spinner.hide()})}openConfirmDialog(e){this.dialog.open(a.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{var t;e&&this.deletePromoPage(null===(t=this.promoPage)||void 0===t?void 0:t._id)})}ngOnDestroy(){this.needSessionDestroy&&this.storageService.removeSessionData("PROMO_PAGE_INPUT")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.qu),s["\u0275\u0275directiveInject"](o.gz),s["\u0275\u0275directiveInject"](d.F),s["\u0275\u0275directiveInject"](o.F0),s["\u0275\u0275directiveInject"](c.F),s["\u0275\u0275directiveInject"](l.t2),s["\u0275\u0275directiveInject"](m.V),s["\u0275\u0275directiveInject"](p.uw),s["\u0275\u0275directiveInject"](g.f))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["app-promo-page"]],decls:27,vars:11,consts:[[2,"position","relative"],[1,"header-dialog"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","promoName","matInput","","placeholder","Enter Title"],["formControlName","routerLink","matInput","","placeholder","Enter router link","required",""],[1,"action"],["mat-raised-button","","color","accent","type","submit",1,"submit-btn",3,"fxHide"],["mat-raised-button","","color","warn","type","button",1,"submit-btn",3,"fxHide","click"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"h1"),s["\u0275\u0275text"](3,"Promo advertisement page"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"form",2),s["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275listener"]("click",function(){return t.onHoldInputData()}),s["\u0275\u0275element"](6,"img",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"mat-form-field",5),s["\u0275\u0275elementStart"](8,"mat-label"),s["\u0275\u0275text"](9,"Title"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"input",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"mat-form-field",5),s["\u0275\u0275elementStart"](12,"mat-label"),s["\u0275\u0275text"](13,"Router Link"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](14,"input",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",8),s["\u0275\u0275elementStart"](16,"button",9),s["\u0275\u0275elementStart"](17,"mat-icon"),s["\u0275\u0275text"](18,"done"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](19," Save Data "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"button",10),s["\u0275\u0275listener"]("click",function(){return t.openConfirmDialog()}),s["\u0275\u0275elementStart"](21,"mat-icon"),s["\u0275\u0275text"](22,"delete"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](23," Delete "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"ngx-spinner",11),s["\u0275\u0275elementStart"](25,"p",12),s["\u0275\u0275text"](26," Loading... "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("formGroup",t.dataForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("routerLink",s["\u0275\u0275pureFunction1"](7,b,t.id?"../../../":"../../"))("state",s["\u0275\u0275pureFunction1"](9,x,t.router.url)),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("src",t.pickedImage,s["\u0275\u0275sanitizeUrl"]),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("fxHide",t.promoPage),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("fxHide",!t.promoPage),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("fullScreen",!0))},directives:[r._Y,r.JL,u.xw,u.Wh,r.sg,o.rH,h.KE,h.hX,r.Fj,f.Nt,r.JJ,r.u,r.Q7,P.lW,v.b8,S.Hw,l.Ro],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:100%;max-width:850px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:center;grid-gap:10px;gap:10px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.form-array-container[_ngcontent-%COMP%]{width:100%}.add-form-array-action[_ngcontent-%COMP%]{width:100%;text-align:left;margin-bottom:10px}.form-array-input[_ngcontent-%COMP%]{width:100%}.form-array-input[_ngcontent-%COMP%]   .single-field[_ngcontent-%COMP%]{width:100%;display:flex;grid-gap:8px;gap:8px}.form-array-input[_ngcontent-%COMP%]   .single-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}.submit-btn[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;padding:4px 30px}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o.Bz.forChild(_)],o.Bz]}),e})();var C=n(56861),y=n(75425);let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[i.CommonModule,O,r.UX,u.ae,h.lN,S.Ps,C.q,y.m]]}),e})()},80848:(e,t,n)=>{"use strict";n.d(t,{$:()=>a});var i=n(92935),o=n(35366),r=n(84369);let a=(()=>{class e{constructor(e,t){this.dialogRef=e,this.data=t}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.so),o["\u0275\u0275directiveInject"](i.WI))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"h1"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"p"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"div",3),o["\u0275\u0275elementStart"](8,"button",4),o["\u0275\u0275listener"]("click",function(){return t.onDismiss()}),o["\u0275\u0275text"](9," Cancel "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"button",5),o["\u0275\u0275listener"]("click",function(){return t.onConfirm()}),o["\u0275\u0275text"](11," Confirm "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](t.data.title),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.data.message))},directives:[r.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),e})()}}]);