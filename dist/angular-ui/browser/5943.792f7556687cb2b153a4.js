(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[5943],{42237:(e,t,n)=>{"use strict";n.d(t,{kI:()=>a,mb:()=>o,id:()=>l,MX:()=>d});var i=n(48737),r=n(73092);const a=[{value:i.$.SUPER_ADMIN,viewValue:"Super Admin"},{value:i.$.ADMIN,viewValue:"Admin"},{value:i.$.EDITOR,viewValue:"Editor"}],o=[{value:"Male",viewValue:"Male"},{value:"Female",viewValue:"Female"},{value:"Others",viewValue:"Others"}],l=[{value:r.J.NON_FEATURED,viewValue:"No"},{value:r.J.FEATURED,viewValue:"Yes"}],d=["Barisal","Bhairab","Bogra","Brahmanbaria","Chandpur","Chittagong","Chowmuhani","Chuadanga","Comilla","Cox's Bazar","Dhaka","Dinajpur","Faridpur","Feni","Gazipur","Jamalpur","Jessore","Jhenaidah","Kaliakair","Khulna","Kishoreganj","Kushtia","Maijdee","Manikganj","Mymensingh","Naogaon","Narayanganj","Narsingdi","Nawabganj","Pabna","Rajshahi","Rangpur","Saidpur","Satkhira","Savar","Siddhirganj","Sirajganj","Sreepur","Sylhet","Tangail","Tongi"]},73092:(e,t,n)=>{"use strict";n.d(t,{J:()=>i});var i=function(e){return e.FEATURED="1",e.NON_FEATURED="0",e}({})},5943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UploadPrescriptionModule:()=>D});var i=n(61116),r=n(33464),a=n(31041),o=n(42237),l=n(80848),d=n(35366),s=n(32477),p=n(99896),c=n(45763),m=n(56507),g=n(241),u=n(31269),f=n(92935),h=n(32456),x=n(19432),b=n(17225),v=n(13070),S=n(9550),O=n(77307),C=n(13841),_=n(30136),w=n(87064);function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",39),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.district),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",e.district," ")}}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",39),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.area),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.area)}}function P(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ngx-dropzone-image-preview",40),d["\u0275\u0275listener"]("removed",function(){const t=d["\u0275\u0275restoreView"](e).$implicit;return d["\u0275\u0275nextContext"]().onRemove(t)}),d["\u0275\u0275elementEnd"]()}2&e&&d["\u0275\u0275property"]("file",t.$implicit)("removable",!0)}const E=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r,a,l,d,s,p,c,m){this.fb=e,this.userDataService=t,this.uiService=n,this.fileUploadService=i,this.utilsService=r,this.prescriptionOrderService=a,this.spinner=l,this.router=d,this.dialog=s,this.bulkSmsService=p,this.districtService=c,this.areaService=m,this.user=null,this.cities=o.MX,this.files=[]}ngOnInit(){this.initForm(),this.getLoggedInUserInfo(),this.getAllDistricts()}initForm(){this.dataForm=this.fb.group({name:[null],phoneNo:[null,a.kI.required],email:[null],district:[null,a.kI.required],area:[null,a.kI.required],shippingAddress:[null,a.kI.required],note:[null]})}getAllDistricts(){this.districtService.getAllDistricts().subscribe(e=>{this.districts=e.data,this.districts.map(e=>{e&&this.getAllAreaByDistrict({district:e._id})})})}getAllAreaByDistrict(e){console.log(e),this.areaService.getAllAreaByDistrict(e).subscribe(e=>{this.areas=e.data},e=>{console.log(e)})}onDistrictChange(e){const t=this.districts.find(t=>t.district===e.value)._id;this.getAllAreaByDistrict({district:t})}getLoggedInUserInfo(){this.spinner.show(),this.userDataService.getLoggedInUserInfo("phoneNo fullName profileImg").subscribe(e=>{this.spinner.hide(),this.user=e.data,this.user&&this.dataForm.patchValue(Object.assign(Object.assign({},this.user),{name:this.user.fullName}))},e=>{this.spinner.hide(),console.log(e)})}placeOrder(e){this.prescriptionOrderService.placeOrder(e).subscribe(t=>{this.spinner.hide(),t.status?(this.router.navigate(["/account/prescription-order-list"]),this.uiService.success(t.message),this.sentSingleBulkSms(e.phoneNo,`Dear ${e.name}, Your order ${t.orderId} has been placed. We will update you once the order is confirmed. Thank you for shopping at www.emedilife.com`)):this.uiService.warn(t.message)},e=>{this.spinner.hide(),console.log(e)})}onSelect(e){this.files.push(...e.addedFiles)}onRemove(e){this.files.splice(this.files.indexOf(e),1)}sentSingleBulkSms(e,t){this.bulkSmsService.sentSingleBulkSms(e,t).subscribe(e=>{},e=>{console.log(e)})}onSubmit(){this.dataForm.invalid?this.uiService.warn("Please complete all the required field"):this.files&&this.files.length?this.openConfirmDialog():this.uiService.warn("No Image selected!")}onUploadImages(){this.spinner.show(),this.fileUploadService.uploadMultiImageOriginal(this.files).subscribe(e=>{const t=e.downloadUrls,n=Object.assign(Object.assign(Object.assign({},this.dataForm.value),{userId:this.user._id,orderTimeline:{others:!1,othersData:null,orderPlaced:!0,orderPlacedDate:new Date,orderProcessing:!1,orderProcessingDate:null,orderPickedByDeliveryMan:!1,orderPickedByDeliveryManDate:null,orderDelivered:!1,orderDeliveredDate:null}}),{images:t,checkoutDate:new Date});this.placeOrder(n)},e=>{this.uiService.wrong("Upload Image Failed"),this.spinner.hide(),console.log(e)})}openConfirmDialog(){this.dialog.open(l.$,{maxWidth:"400px",data:{title:"Confirm Order",message:"Are you sure you want confirm this prescription order?"}}).afterClosed().subscribe(e=>{e&&this.onUploadImages()})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](a.qu),d["\u0275\u0275directiveInject"](s.M),d["\u0275\u0275directiveInject"](p.F),d["\u0275\u0275directiveInject"](c.J),d["\u0275\u0275directiveInject"](m.F),d["\u0275\u0275directiveInject"](g.G),d["\u0275\u0275directiveInject"](u.t2),d["\u0275\u0275directiveInject"](r.F0),d["\u0275\u0275directiveInject"](f.uw),d["\u0275\u0275directiveInject"](h.D),d["\u0275\u0275directiveInject"](x.R),d["\u0275\u0275directiveInject"](b.T))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-upload-prescription"]],decls:94,vars:6,consts:[[1,"upload-prescription-area"],[1,"container"],[1,"upload-prescription-main"],[1,"upload-prescription-left"],[3,"formGroup","ngSubmit"],[1,"left-top-area"],[1,"prescription-title"],[1,"form-input-area"],[1,"name"],["appearance","outline",1,"form-field","px-1"],["formControlName","name","matInput","","placeholder","Full Name","required",""],["matSuffix",""],[1,"district__area__wrapper"],[1,"disctict"],["formControlName","district","required","",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"area"],["formControlName","area","required",""],[1,"address"],["appearance","outline",1,"form-field-2","px-1"],["formControlName","shippingAddress","matInput","","placeholder","Full Address","required",""],[1,"upload-img-area"],["ngx-dropzone","",1,"custom-dropzone",3,"accept","change"],[1,"label"],[1,"fas","fa-upload",2,"font-size","32px","margin-right","16px"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],[1,"note"],["formControlName","note","matInput",""],[1,"submit-btn"],["type","submit"],[1,"upload-prescription-right"],[1,"overlay"],["src","/assets/images/prescription/01.png","alt",""],[1,"step-area"],[1,"step-title"],[1,"step-grid"],[1,"step-info"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[3,"value"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"div",2),d["\u0275\u0275elementStart"](3,"div",3),d["\u0275\u0275elementStart"](4,"form",4),d["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),d["\u0275\u0275elementStart"](5,"div",5),d["\u0275\u0275elementStart"](6,"div",6),d["\u0275\u0275elementStart"](7,"h3"),d["\u0275\u0275text"](8,"Upload Prescription"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"p"),d["\u0275\u0275text"](10,"Please attach a Prescription to proceed"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"div",7),d["\u0275\u0275elementStart"](12,"div",8),d["\u0275\u0275elementStart"](13,"mat-form-field",9),d["\u0275\u0275elementStart"](14,"mat-label"),d["\u0275\u0275text"](15,"Full Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](16,"input",10),d["\u0275\u0275elementStart"](17,"mat-icon",11),d["\u0275\u0275text"](18,"person"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"mat-error"),d["\u0275\u0275text"](20,"This field is required"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"div",12),d["\u0275\u0275elementStart"](22,"div",13),d["\u0275\u0275elementStart"](23,"mat-form-field",9),d["\u0275\u0275elementStart"](24,"mat-label"),d["\u0275\u0275text"](25,"District"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"mat-select",14),d["\u0275\u0275listener"]("selectionChange",function(e){return t.onDistrictChange(e)}),d["\u0275\u0275template"](27,y,2,2,"mat-option",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"mat-icon",11),d["\u0275\u0275text"](29,"room"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"mat-error"),d["\u0275\u0275text"](31,"This field is required"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](32,"div",16),d["\u0275\u0275elementStart"](33,"mat-form-field",9),d["\u0275\u0275elementStart"](34,"mat-label"),d["\u0275\u0275text"](35,"Area"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](36,"mat-select",17),d["\u0275\u0275template"](37,M,2,2,"mat-option",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](38,"mat-icon",11),d["\u0275\u0275text"](39,"where_to_vote"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](40,"mat-error"),d["\u0275\u0275text"](41,"This field is required"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](42,"div",18),d["\u0275\u0275elementStart"](43,"mat-form-field",19),d["\u0275\u0275elementStart"](44,"mat-label"),d["\u0275\u0275text"](45,"Address"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](46,"input",20),d["\u0275\u0275elementStart"](47,"mat-icon",11),d["\u0275\u0275text"](48,"location_on"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](49,"mat-error"),d["\u0275\u0275text"](50,"This field is required"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](51,"div",21),d["\u0275\u0275elementStart"](52,"div",22),d["\u0275\u0275listener"]("change",function(e){return t.onSelect(e)}),d["\u0275\u0275elementStart"](53,"ngx-dropzone-label"),d["\u0275\u0275elementStart"](54,"div",23),d["\u0275\u0275elementStart"](55,"h2"),d["\u0275\u0275element"](56,"i",24),d["\u0275\u0275text"](57," Upload or Drug and Drop Prescription "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](58,P,1,2,"ngx-dropzone-image-preview",25),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](59,"div",26),d["\u0275\u0275elementStart"](60,"mat-form-field",19),d["\u0275\u0275elementStart"](61,"mat-label"),d["\u0275\u0275text"](62,"Note(optional)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](63,"textarea",27),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](64,"div",28),d["\u0275\u0275elementStart"](65,"button",29),d["\u0275\u0275text"](66,"Proceed"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](67,"div",30),d["\u0275\u0275elementStart"](68,"div"),d["\u0275\u0275elementStart"](69,"div",31),d["\u0275\u0275element"](70,"img",32),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](71,"div",33),d["\u0275\u0275elementStart"](72,"div",34),d["\u0275\u0275elementStart"](73,"h3"),d["\u0275\u0275text"](74,"Order Medicine in 3 Steps"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](75,"div",35),d["\u0275\u0275elementStart"](76,"div",36),d["\u0275\u0275elementStart"](77,"h4"),d["\u0275\u0275text"](78,"1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](79,"p"),d["\u0275\u0275text"](80,"Upload a valid prescription"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](81,"div",36),d["\u0275\u0275elementStart"](82,"h4"),d["\u0275\u0275text"](83,"2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](84,"p"),d["\u0275\u0275text"](85,"Reacive a Confirmation Call"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](86,"div",36),d["\u0275\u0275elementStart"](87,"h4"),d["\u0275\u0275text"](88,"3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](89,"p"),d["\u0275\u0275text"](90,"Delivery at your door step"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](91,"ngx-spinner",37),d["\u0275\u0275elementStart"](92,"p",38),d["\u0275\u0275text"](93," Loading... "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("formGroup",t.dataForm),d["\u0275\u0275advance"](23),d["\u0275\u0275property"]("ngForOf",t.districts),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("ngForOf",t.areas),d["\u0275\u0275advance"](15),d["\u0275\u0275property"]("accept","image/*"),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngForOf",t.files),d["\u0275\u0275advance"](33),d["\u0275\u0275property"]("fullScreen",!0))},directives:[a._Y,a.JL,a.sg,v.KE,v.hX,a.Fj,S.Nt,a.JJ,a.u,a.Q7,O.Hw,v.R9,v.TO,C.gD,i.NgForOf,_._f,_.Jj,u.Ro,w.ey,_.sv],styles:[".container[_ngcontent-%COMP%]{max-width:1440px;width:96%;margin:0 auto;display:block}@media (min-width:960px) and (max-width:1440px){.container[_ngcontent-%COMP%]{width:90%!important}}.upload-prescription-area[_ngcontent-%COMP%]{display:block;width:100%;box-sizing:border-box;margin-top:150px;margin-bottom:50px}@media (max-width:820px){.upload-prescription-area[_ngcontent-%COMP%]{margin-top:180px}}.upload-prescription-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px}.upload-prescription-left[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.left-top-area[_ngcontent-%COMP%]{display:block;box-sizing:border-box;background-color:#fff;border:1px solid #00a594;border-radius:10px;box-shadow:0 3px 5px 0 #0003}.prescription-title[_ngcontent-%COMP%]{display:block;padding:15px 5px;margin-bottom:10px;text-align:center;border-bottom:1px solid #00a594;border-radius:0 0 10px 10px}.prescription-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#484848;font-weight:600;font-size:17px;font-family:Open Sans,sans-serif;line-height:23px}.prescription-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a4a4a4;font-family:Open Sans,sans-serif;font-size:14px;font-weight:500;margin-top:8px;display:block;font-style:normal}.form-input-area[_ngcontent-%COMP%]{display:block;padding:20px 15px;box-sizing:border-box;max-width:500px;width:100%;margin:0 auto}.form-input-area[_ngcontent-%COMP%]   .district__area__wrapper[_ngcontent-%COMP%]{display:flex}.form-input-area[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{display:block;width:100%} .form-input-area .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#00a594} .form-input-area .mat-form-field.mat-focused .mat-form-field-label{color:#00a594}.upload-img-area[_ngcontent-%COMP%]{max-width:500px;width:100%;margin:0 auto;box-sizing:border-box}.custom-dropzone[_ngcontent-%COMP%], ngx-dropzone[_ngcontent-%COMP%]{margin:20px;border:3px dotted #00a594;color:#00a594}.label[_ngcontent-%COMP%]{width:100%;text-align:center}.custom-dropzone[_ngcontent-%COMP%]{height:200px;border-radius:5px;font-size:20px;margin:0 0 20px}.custom-dropzone[_ngcontent-%COMP%]     img{width:100%!important}.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%]{border:5px solid #eb4f4f}.uploaded-area[_ngcontent-%COMP%]{display:block;max-width:500px;width:100%;margin:auto;padding:0 15px 15px;box-sizing:border-box}.uploaded-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#484848;font-weight:600;font-family:Open Sans,sans-serif;font-size:15px;padding-bottom:8px;border-bottom:1px solid #a4a4a4}.uploaded-img-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;padding-top:10px;grid-gap:10px;gap:10px;margin-bottom:20px}.uploaded-img[_ngcontent-%COMP%]{border:1px solid #00a594;display:flex;align-items:center;justify-content:center}.uploaded-img[_ngcontent-%COMP%], .uploaded-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:5px}.total-uploaded-item-area[_ngcontent-%COMP%]{display:block;width:100%}.total-uploaded-item-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a4a4a4;font-size:14px;font-family:Open Sans,sans-serif;font-style:normal;display:block;line-height:19px}.submit-btn[_ngcontent-%COMP%]{padding-bottom:20px}.submit-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#00a594;font-family:Open Sans,sans-serif;font-size:16px;color:#fff;border:1px solid #00a594;max-width:200px;width:100%;padding:8px 15px;box-sizing:border-box;display:block;text-align:center;border-radius:20px;margin:auto}mat-icon[_ngcontent-%COMP%]{color:#00a594}.upload-prescription-right[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #00a594;border-radius:15px;width:100%;padding:10px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 5px 0 #0003}.overlay[_ngcontent-%COMP%]{background-color:#f3f3f3;margin:0 auto 20px}.overlay[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:250px;width:100%}.overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:300px;min-height:220px;height:100%;margin:auto}.step-title[_ngcontent-%COMP%]{display:block;margin-bottom:20px;text-align:center;width:100%}.step-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#00a594;font-style:normal;font-weight:600;font-size:18px;display:block;font-family:Open Sans,sans-serif}.step-grid[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px;flex-basis:33.33%}.step-info[_ngcontent-%COMP%]{display:block;text-align:center}.step-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #00a594;color:#00a594;font-family:Open Sans,sans-serif;font-weight:500;background-color:#f3f3f3;margin:0 auto 10px!important;transition:all .3s linear;border-radius:50%;cursor:pointer}.step-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover{background-color:#00a594;color:#fff}.step-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#00a594;font-weight:500;font-size:15px;display:block;text-align:center;line-height:22px;font-family:Open Sans,sans-serif}@media (max-width:1000px){.upload-prescription-main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);grid-gap:40px 20px}.upload-prescription-right[_ngcontent-%COMP%]{min-height:550px}}@media (max-width:500px){.step-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.custom-dropzone[_ngcontent-%COMP%]{font-size:16px} .mat-typography h2{font-size:18px;line-height:24px}}"]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(E)],r.Bz]}),e})();var I=n(56861),j=n(77154),z=n(57147);let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.CommonModule,k,a.UX,I.q,j.o9,z.E7,_.bB,u.ef]]}),e})()},80848:(e,t,n)=>{"use strict";n.d(t,{$:()=>o});var i=n(92935),r=n(35366),a=n(84369);let o=(()=>{class e{constructor(e,t){this.dialogRef=e,this.data=t}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.so),r["\u0275\u0275directiveInject"](i.WI))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"h1"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"p"),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",3),r["\u0275\u0275elementStart"](8,"button",4),r["\u0275\u0275listener"]("click",function(){return t.onDismiss()}),r["\u0275\u0275text"](9," Cancel "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"button",5),r["\u0275\u0275listener"]("click",function(){return t.onConfirm()}),r["\u0275\u0275text"](11," Confirm "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](t.data.title),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](t.data.message))},directives:[a.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),e})()}}]);