(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[4322],{44322:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersModule:()=>j});var a=n(61116),r=n(33464),o=n(80848),i=n(35366),l=n(92935),d=n(94978),c=n(68370),s=n(99896),m=n(84369),u=n(77307);const p=function(e){return["edit-user",e]};function g(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"td"),i["\u0275\u0275text"](12),i["\u0275\u0275pipe"](13,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"td"),i["\u0275\u0275elementStart"](15,"button",8),i["\u0275\u0275listener"]("click",function(){const t=i["\u0275\u0275restoreView"](e).$implicit;return i["\u0275\u0275nextContext"]().openConfirmDialog(t)}),i["\u0275\u0275elementStart"](16,"mat-icon"),i["\u0275\u0275text"](17,"delete"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"button",9),i["\u0275\u0275elementStart"](19,"mat-icon"),i["\u0275\u0275text"](20,"edit"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Name"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.name),i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Username"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.username),i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Phone No"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.phoneNo),i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Role"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.role),i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Has Access"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.hasAccess?"Yes":"No"),i["\u0275\u0275advance"](1),i["\u0275\u0275attribute"]("data-label","Created At"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](13,16,e.createdAt)),i["\u0275\u0275advance"](2),i["\u0275\u0275attribute"]("data-label","Actions"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("disabled",e.readOnly||(null==n.currentUser?null:n.currentUser._id)===e._id),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("disabled",e.readOnly)("routerLink",i["\u0275\u0275pureFunction1"](18,p,e._id))}}const b=function(){return["add-new-user"]};let h=(()=>{class e{constructor(e,t,n,a){this.dialog=e,this.adminDataService=t,this.reloadService=n,this.uiService=a,this.users=[]}ngOnInit(){this.reloadService.refreshAdmin$.subscribe(()=>{this.getUserList()}),this.getUserList(),this.getLoginAdminInfo()}getUserList(){this.adminDataService.getAllAdmin().subscribe(e=>{this.users=e.data},e=>{console.log(e)})}getLoginAdminInfo(){this.adminDataService.getLoginAdminInfo().subscribe(e=>{this.currentUser=e.data},e=>{console.log(e)})}deleteAdmin(e){this.adminDataService.deleteAdmin(e).subscribe(e=>{this.uiService.success(e.message),this.reloadService.needRefreshAdmin$()},e=>{console.log(e)})}openConfirmDialog(e){this.dialog.open(o.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(t=>{t&&this.deleteAdmin(e._id)})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.uw),i["\u0275\u0275directiveInject"](d.O),i["\u0275\u0275directiveInject"](c.f),i["\u0275\u0275directiveInject"](s.F))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-users"]],decls:28,vars:10,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"disabled","click"],["mat-mini-fab","",3,"disabled","routerLink"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"button",1),i["\u0275\u0275elementStart"](2,"mat-icon"),i["\u0275\u0275text"](3,"add"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](4," Add New User "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"div",2),i["\u0275\u0275elementStart"](6,"h2"),i["\u0275\u0275text"](7,"Users List"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](8,"hr",3),i["\u0275\u0275elementStart"](9,"div",4),i["\u0275\u0275elementStart"](10,"table"),i["\u0275\u0275elementStart"](11,"thead"),i["\u0275\u0275elementStart"](12,"tr",5),i["\u0275\u0275elementStart"](13,"th",6),i["\u0275\u0275text"](14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"th",6),i["\u0275\u0275text"](16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"th",6),i["\u0275\u0275text"](18),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"th",6),i["\u0275\u0275text"](20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"th",6),i["\u0275\u0275text"](22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"th",6),i["\u0275\u0275text"](24),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"th",6),i["\u0275\u0275text"](26),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](27,g,21,20,"tr",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](9,b)),i["\u0275\u0275advance"](13),i["\u0275\u0275textInterpolate"]("Name"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Username"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Phone No"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Role"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Has Access"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Created At"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"]("Actions"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",t.users))},directives:[m.lW,r.rH,u.Hw,a.NgForOf],pipes:[a.DatePipe],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#017970;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#017970}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#017970}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}"]}),e})();var f=n(31041),x=n(42237),v=n(35946),C=n(35965),O=n(13070),M=n(9550),S=n(13841),P=n(41293),_=n(87064);const w=["tempForm"];function E(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-option",16),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e.value),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.viewValue," ")}}function I(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-option",16),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e.value),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.viewValue," ")}}let y=(()=>{class e{constructor(e,t,n,a,r){this.fb=e,this.activatedRoute=t,this.adminDataService=n,this.adminService=a,this.uiService=r,this.roles=x.kI,this.hasAccess=[{value:!0,viewValue:"Yes"},{value:!1,viewValue:"No"}]}ngOnInit(){this.dataForm=this.fb.group({name:[null,f.kI.required],email:[null,f.kI.email],username:[null,f.kI.required],phoneNo:[null,f.kI.required],role:[null,f.kI.required],hasAccess:[null,f.kI.required],password:[null],newPassword:[null]}),this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getSingleAdminById()})}setFormValue(){this.dataForm.patchValue(Object.assign(Object.assign({},this.user),{password:null}))}getSingleAdminById(){this.adminDataService.getSingleAdminById(this.id).subscribe(e=>{this.user=e.data,this.setFormValue()},e=>{console.log(e)})}onSubmit(){var e;if(this.dataForm.invalid)this.uiService.warn("Please filed all the required field");else if(this.user)this.adminDataService.editAdmin(this.user._id,this.dataForm.value).subscribe(e=>{this.uiService.success(e.message)},e=>{this.uiService.wrong("Something went wrong!"),console.log(e)});else{if(!this.dataForm.value.password)return void this.uiService.warn("Password need");const t=Object.assign(Object.assign({},null===(e=this.dataForm)||void 0===e?void 0:e.value),{username:this.generateUsername});console.log(t),this.adminService.adminRegistration(this.dataForm.value).subscribe(e=>{e.success?(this.uiService.success(e.message),this.tempForm.resetForm()):this.uiService.warn(e.message)},e=>{this.uiService.wrong("Something went wrong!"),console.log(e)})}}get generateUsername(){return this.dataForm&&this.dataForm.value.username?this.dataForm.value.username.replace(/\s/g,"").trim().toLowerCase():""}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](f.qu),i["\u0275\u0275directiveInject"](r.gz),i["\u0275\u0275directiveInject"](d.O),i["\u0275\u0275directiveInject"](v.l),i["\u0275\u0275directiveInject"](s.F))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-user"]],viewQuery:function(e,t){if(1&e&&i["\u0275\u0275viewQuery"](w,5),2&e){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(t.tempForm=e.first)}},decls:56,vars:7,consts:[["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["tempForm","ngForm"],["appearance","outline"],["formControlName","name","matInput","","placeholder","Enter full name","required",""],["formControlName","username","matInput","","placeholder","Enter username","required",""],["formControlName","phoneNo","matInput","","placeholder","Enter phone no","required",""],["formControlName","email","matInput","","placeholder","Enter valid email","type","email","required",""],["appearance","outline","fxFlex","50",1,"w-100","px-1"],["formControlName","role","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","hasAccess","required",""],["appearance","outline","fxFlex","50",1,"w-100","px-1",3,"fxHide"],["formControlName","password","matInput","","placeholder","Enter password"],["appearance","outline","fxFlex","50",1,"w-100","px-1",3,"fxShow"],["formControlName","newPassword","matInput","","placeholder","Enter New password (If need)"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"form",0,1),i["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),i["\u0275\u0275elementStart"](2,"mat-form-field",2),i["\u0275\u0275elementStart"](3,"mat-label"),i["\u0275\u0275text"](4,"Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](5,"input",3),i["\u0275\u0275elementStart"](6,"mat-error"),i["\u0275\u0275text"](7,"This field is required"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"mat-form-field",2),i["\u0275\u0275elementStart"](9,"mat-label"),i["\u0275\u0275text"](10,"Username"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](11,"input",4),i["\u0275\u0275elementStart"](12,"mat-hint"),i["\u0275\u0275text"](13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"mat-error"),i["\u0275\u0275text"](15,"This field is required"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"mat-form-field",2),i["\u0275\u0275elementStart"](17,"mat-label"),i["\u0275\u0275text"](18,"Phone No"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](19,"input",5),i["\u0275\u0275elementStart"](20,"mat-error"),i["\u0275\u0275text"](21,"This field is required"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"mat-form-field",2),i["\u0275\u0275elementStart"](23,"mat-label"),i["\u0275\u0275text"](24,"Email"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](25,"input",6),i["\u0275\u0275elementStart"](26,"mat-error"),i["\u0275\u0275text"](27,"Enter a valid email address"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"mat-form-field",7),i["\u0275\u0275elementStart"](29,"mat-label"),i["\u0275\u0275text"](30,"Role"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"mat-select",8),i["\u0275\u0275template"](32,E,2,2,"mat-option",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"mat-error"),i["\u0275\u0275text"](34,"This field is required."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"mat-form-field",7),i["\u0275\u0275elementStart"](36,"mat-label"),i["\u0275\u0275text"](37,"Has Access"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"mat-select",10),i["\u0275\u0275template"](39,I,2,2,"mat-option",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"mat-error"),i["\u0275\u0275text"](41,"This field is required."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"mat-form-field",11),i["\u0275\u0275elementStart"](43,"mat-label"),i["\u0275\u0275text"](44,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](45,"input",12),i["\u0275\u0275elementStart"](46,"mat-error"),i["\u0275\u0275text"](47,"This field is required."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](48,"mat-form-field",13),i["\u0275\u0275elementStart"](49,"mat-label"),i["\u0275\u0275text"](50,"Update New Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](51,"input",14),i["\u0275\u0275elementStart"](52,"mat-error"),i["\u0275\u0275text"](53,"This field is required."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](54,"button",15),i["\u0275\u0275text"](55),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("formGroup",t.dataForm),i["\u0275\u0275advance"](13),i["\u0275\u0275textInterpolate"](t.generateUsername?"Username will be :"+t.generateUsername:""),i["\u0275\u0275advance"](19),i["\u0275\u0275property"]("ngForOf",t.roles),i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngForOf",t.hasAccess),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("fxHide",t.user),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("fxShow",t.user),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate1"](" ",t.id?"Update User":"Add User"," "))},directives:[f._Y,f.JL,C.xw,C.Wh,f.sg,O.KE,O.hX,f.Fj,M.Nt,f.JJ,f.u,f.Q7,O.TO,O.bx,C.yH,S.gD,a.NgForOf,P.b8,m.lW,_.ey],styles:["form[_ngcontent-%COMP%]{width:450px;margin:45px auto}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e})();const F=[{path:"",component:h},{path:"add-new-user",component:y},{path:"edit-user/:id",component:y}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(F)],r.Bz]}),e})();var N=n(56861),k=n(77154);let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[a.CommonModule,A,f.UX,N.q,k.o9]]}),e})()},42237:(e,t,n)=>{"use strict";n.d(t,{kI:()=>o,mb:()=>i,id:()=>l,MX:()=>d});var a=n(48737),r=n(73092);const o=[{value:a.$.SUPER_ADMIN,viewValue:"Super Admin"},{value:a.$.ADMIN,viewValue:"Admin"},{value:a.$.EDITOR,viewValue:"Editor"}],i=[{value:"Male",viewValue:"Male"},{value:"Female",viewValue:"Female"},{value:"Others",viewValue:"Others"}],l=[{value:r.J.NON_FEATURED,viewValue:"No"},{value:r.J.FEATURED,viewValue:"Yes"}],d=["Barisal","Bhairab","Bogra","Brahmanbaria","Chandpur","Chittagong","Chowmuhani","Chuadanga","Comilla","Cox's Bazar","Dhaka","Dinajpur","Faridpur","Feni","Gazipur","Jamalpur","Jessore","Jhenaidah","Kaliakair","Khulna","Kishoreganj","Kushtia","Maijdee","Manikganj","Mymensingh","Naogaon","Narayanganj","Narsingdi","Nawabganj","Pabna","Rajshahi","Rangpur","Saidpur","Satkhira","Savar","Siddhirganj","Sirajganj","Sreepur","Sylhet","Tangail","Tongi"]},73092:(e,t,n)=>{"use strict";n.d(t,{J:()=>a});var a=function(e){return e.FEATURED="1",e.NON_FEATURED="0",e}({})},80848:(e,t,n)=>{"use strict";n.d(t,{$:()=>i});var a=n(92935),r=n(35366),o=n(84369);let i=(()=>{class e{constructor(e,t){this.dialogRef=e,this.data=t}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.so),r["\u0275\u0275directiveInject"](a.WI))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"h1"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"p"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",3),r["\u0275\u0275elementStart"](8,"button",4),r["\u0275\u0275listener"]("click",function(){return t.onDismiss()}),r["\u0275\u0275text"](9," Cancel "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"button",5),r["\u0275\u0275listener"]("click",function(){return t.onConfirm()}),r["\u0275\u0275text"](11," Confirm "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](t.data.title),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.data.message))},directives:[o.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),e})()}}]);