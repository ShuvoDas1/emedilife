(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[4540],{44540:(n,t,e)=>{"use strict";e.r(t),e.d(t,{AllCategoriesModule:()=>C});var o=e(61116),i=e(33464),a=e(35366),r=e(81830),c=e(31269),g=e(29282),d=e(9745);const s=function(n){return["/products","categories",n]};function l(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",10),a["\u0275\u0275elementStart"](1,"div",11),a["\u0275\u0275elementStart"](2,"a",12),a["\u0275\u0275element"](3,"img",13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",14),a["\u0275\u0275elementStart"](5,"a",15),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n){const n=t.$implicit;a["\u0275\u0275property"]("id",null==n?null:n._id),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction1"](6,s,n._id)),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("src",null==n?null:n.image,a["\u0275\u0275sanitizeUrl"])("alt",null==n?null:n.categoryName),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction1"](8,s,n._id)),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==n?null:n.categoryName)}}const p=function(n,t,e){return{itemsPerPage:n,currentPage:t,totalItems:e}},m=[{path:"",component:(()=>{class n{constructor(n,t,e,o){this.categoryService=n,this.activatedRoute=t,this.router=e,this.spinner=o,this.categories=[],this.holdPrevData=[],this.currentPage=1,this.totalProducts=0,this.productsPerPage=15,this.totalProductsStore=0}ngOnInit(){this.subAcRoute=this.activatedRoute.queryParams.subscribe(n=>{this.currentPage=n&&n.page?n.page:1,this.getAllCategory()})}getAllCategory(){this.spinner.show();const n={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.subDataOne=this.categoryService.getAllCategory(n).subscribe(n=>{this.categories=n.data,this.totalProducts=n.count,this.holdPrevData=n.data,this.totalProductsStore=n.count,this.spinner.hide()},n=>{this.spinner.hide(),console.log(n)})}onPageChanged(n){this.router.navigate([],{queryParams:{page:n}})}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subDataOne&&this.subDataOne.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275directiveInject"](r.H),a["\u0275\u0275directiveInject"](i.gz),a["\u0275\u0275directiveInject"](i.F0),a["\u0275\u0275directiveInject"](c.t2))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["app-all-categories"]],decls:14,vars:11,consts:[[1,"shop-category"],[1,"container"],[1,"title-area"],[1,"title"],[1,"shop-category-main"],["class","shop-category-card",3,"id",4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[1,"shop-category-card",3,"id"],[1,"shop-card-img"],[3,"routerLink"],["checkImageDefault","",3,"src","alt"],[1,"shop-card-title"],["routerLinkActive","router-link-active",3,"routerLink"]],template:function(n,t){1&n&&(a["\u0275\u0275elementStart"](0,"section",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"h3"),a["\u0275\u0275text"](5,"Shop by Category"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",4),a["\u0275\u0275template"](7,l,7,10,"div",5),a["\u0275\u0275pipe"](8,"paginate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",6),a["\u0275\u0275elementStart"](10,"pagination-controls",7),a["\u0275\u0275listener"]("pageChange",function(n){return t.onPageChanged(n)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"ngx-spinner",8),a["\u0275\u0275elementStart"](12,"p",9),a["\u0275\u0275text"](13," Loading... "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n&&(a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind2"](8,4,t.categories,a["\u0275\u0275pureFunction3"](7,p,t.productsPerPage,t.currentPage,t.totalProducts))),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("autoHide",!0)("maxSize",15),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("fullScreen",!0))},directives:[o.NgForOf,g.LS,c.Ro,i.yS,d.o,i.Od],pipes:[g._s],styles:['@charset "UTF-8";body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{padding:0;font-family:Open Sans,sans-serif;font-size:14px;background-color:#f3f3f3}*[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0}*[_ngcontent-%COMP%]{box-sizing:border-box}.pd_0[_ngcontent-%COMP%]{padding:0}.mg_0[_ngcontent-%COMP%], .pm_0[_ngcontent-%COMP%]{margin:0}.pm_0[_ngcontent-%COMP%]{padding:0}img[_ngcontent-%COMP%]{max-width:100%;width:100%}a[_ngcontent-%COMP%], i[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{display:inline-block}a[_ngcontent-%COMP%]{text-decoration:none;width:100%}a[_ngcontent-%COMP%], button[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{cursor:pointer}.clearfix[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.container[_ngcontent-%COMP%]{width:97%;max-width:1440px;margin:auto}.font-primary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif!important}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{background:#0000}.row-center-v[_ngcontent-%COMP%]{display:flex;align-items:center}.dialog-no-radius[_ngcontent-%COMP%] > mat-dialog-container[_ngcontent-%COMP%]{border-radius:0!important}.full-screen-modal-lg[_ngcontent-%COMP%]{max-width:unset!important;width:100%;height:100%}.full-screen-modal-lg[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{max-width:100vw;max-height:100vh;height:100%;width:100%;border-radius:0!important;padding:10px 0}.full-screen-modal-lg[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-height:unset!important}@media only screen and (max-width:600px){.full-screen-modal[_ngcontent-%COMP%]{max-width:unset!important;width:100%;height:100%}.full-screen-modal[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{max-width:100vw;max-height:100vh;height:100%;width:100%;border-radius:0!important;padding:10px 0}.full-screen-modal[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-height:unset!important}.small-padding-sm[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{padding:10px}}.line-deep-1[_ngcontent-%COMP%]{width:100%;height:1px;background:#eee;margin:4px 0}.section-md[_ngcontent-%COMP%]{width:100%;max-width:1440px;margin:0 auto}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0!important}.h-100[_ngcontent-%COMP%]{height:100%!important}.gap-sm[_ngcontent-%COMP%]{margin:24px 0}.w-100[_ngcontent-%COMP%]{width:100%!important}.text-center[_ngcontent-%COMP%]{text-align:center}.text-muted[_ngcontent-%COMP%]{color:#6b6b6b}.no-select[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.shadow-circle[_ngcontent-%COMP%]{box-shadow:4px 4px 5px 0 #8c8c8cbf}.overlay-ng[_ngcontent-%COMP%]{position:fixed;width:100%;height:100vh;top:0;right:0;bottom:0;left:0;z-index:99;background:#00000080}.description-bn[_ngcontent-%COMP%]{font-family:shorif_jonota,sans-serif;font-size:16px;font-weight:400;color:#2b2b2b;line-height:1.6}.back-to-top[_ngcontent-%COMP%]{position:fixed;width:40px;height:40px;cursor:pointer;z-index:999999;right:20px;bottom:20px;opacity:.8;color:#fff;border:2px solid #fff;background-color:#00a594;border-radius:4px}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#fe7b03;border-color:#fe7b03}.transition[_ngcontent-%COMP%]{transition:.3s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle[_ngcontent-%COMP%]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s ease-in-out infinite both}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]{transform:rotate(30deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]{transform:rotate(60deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]{transform:rotate(90deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]{transform:rotate(120deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]{transform:rotate(150deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]{transform:rotate(180deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]{transform:rotate(210deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]{transform:rotate(240deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]{transform:rotate(270deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]{transform:rotate(300deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]{transform:rotate(330deg)}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before{animation-delay:-1.1s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before{animation-delay:-1s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before{animation-delay:-.9s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before{animation-delay:-.8s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before{animation-delay:-.7s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before{animation-delay:-.6s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before{animation-delay:-.5s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before{animation-delay:-.4s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before{animation-delay:-.3s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before{animation-delay:-.2s}.sk-fading-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}snack-bar-container.success-new[_ngcontent-%COMP%]{background:#14be33;background:linear-gradient(90deg,#14be33,#1ab608);color:#fff}snack-bar-container.warn[_ngcontent-%COMP%]{background:#eb8c39;background:linear-gradient(90deg,#eb8c39,#d6761c);color:#fff}snack-bar-container.wrong[_ngcontent-%COMP%]{background:#eb3939;background:linear-gradient(90deg,#eb3939,#d6311c);color:#fff}mat-bottom-sheet-container.success[_ngcontent-%COMP%]{background:#14be33;background:linear-gradient(90deg,#14be33,#1ab608);color:#fff}mat-bottom-sheet-container.primary[_ngcontent-%COMP%]{background:#00a594;color:#fff}hr[_ngcontent-%COMP%]{border:0;height:1px;width:85%;position:relative;margin:25px auto}hr.center-ball[_ngcontent-%COMP%]{background:#017970}hr.center-ball[_ngcontent-%COMP%]:before{content:"";width:6px;height:6px;background:#017970;display:inline-block;border:2px solid #017970;border-radius:50%;position:absolute;top:-4px;left:50%;margin:0 0 0 -3px}hr.center-diamond[_ngcontent-%COMP%]{background:#017970}hr.center-diamond[_ngcontent-%COMP%]:before{content:"";width:6px;height:6px;background:#017970;display:inline-block;border:2px solid #017970;position:absolute;top:-5px;left:50%;margin:0 0 0 -3px;transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg)}hr.center-square[_ngcontent-%COMP%]{background:#017970}hr.center-square[_ngcontent-%COMP%]:before{content:"";width:6px;height:6px;background:#017970;display:inline-block;border:2px solid #017970;position:absolute;top:-5px;left:50%;margin:0 0 0 -3px}hr.center-star[_ngcontent-%COMP%]{background:#017970}hr.center-star[_ngcontent-%COMP%]:before{content:"\u2605";color:#017970;display:inline-block;position:absolute;top:0;left:50%;margin:0 0 0 -3px;font-size:15px;line-height:0;text-shadow:0 0 3px #d9d9d9}.cart-drop-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00a594!important}.cart-drop-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ffd200!important}.description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-left:15px}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:6px}.map-main[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;box-sizing:border-box;height:500px} .cdk-overlay-pane{top:136px;left:84px}.fb-customerchat[_ngcontent-%COMP%]{position:fixed;left:0!important;bottom:0}.title-area[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;width:100%;height:auto;padding-bottom:15px;border-bottom:2px solid #e0e0e0}.title[_ngcontent-%COMP%]{display:block;width:100%;text-align:left}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#484848;font-family:Open Sans,sans-serif;font-style:normal;font-weight:700;font-size:20px;display:block}.see-all-btn[_ngcontent-%COMP%]{max-width:120px;width:100%;text-align:right}.see-all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00a594;font-family:Open Sans,sans-serif;font-size:16px;display:block;font-weight:500;transition:all .3s linear}.see-all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;transition:all .1s linear}.see-all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f26d70}.see-all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translateX(4px)}@media (max-width:500px){.title-area[_ngcontent-%COMP%]{padding-left:7px;padding-right:7px;box-sizing:border-box}}.bg[_ngcontent-%COMP%]{background-color:#f3f3f3!important}.main-content[_ngcontent-%COMP%]{background-color:#f3f3f3;box-sizing:border-box}.mat-sidenav-content[_ngcontent-%COMP%]{background-color:#f3f3f3!important}.shop-category[_ngcontent-%COMP%]{margin-top:150px;display:block;box-sizing:border-box;margin-bottom:30px}.shop-category-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:25px 20px;grid-template-rows:auto;margin-top:40px;padding:0 10px}.shop-category-card[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #00a594;box-shadow:4px 4px 8px #ddd;border-radius:15px;position:relative;padding:5px;box-sizing:border-box;z-index:10}.shop-card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:15px;max-height:130px;object-fit:contain;margin:auto}.shop-card-title[_ngcontent-%COMP%]{display:block;left:0;width:100%;text-align:center}.shop-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#017970;font-size:15px;font-weight:600;font-style:normal;font-family:Open Sans,sans-serif;transition:all .3s linear}.shop-category-card[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#f26d70}@media (max-width:1000px){.shop-category-main[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr);margin-top:20px}}@media (max-width:500px){.shop-card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px}}@media (max-width:600px){.shop-category-main[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.shop-category-main[_ngcontent-%COMP%]   .shop-category-card[_ngcontent-%COMP%]{height:140px}.shop-category-main[_ngcontent-%COMP%]   .shop-category-card[_ngcontent-%COMP%]   .shop-card-img[_ngcontent-%COMP%]{height:90px}.shop-category-main[_ngcontent-%COMP%]   .shop-category-card[_ngcontent-%COMP%]   .shop-card-img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .shop-category-main[_ngcontent-%COMP%]   .shop-category-card[_ngcontent-%COMP%]   .shop-card-img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.shop-category-main[_ngcontent-%COMP%]   .shop-category-card[_ngcontent-%COMP%]   .shop-card-title[_ngcontent-%COMP%]{padding:0;height:30px}}.pagination-container[_ngcontent-%COMP%]{width:1440px;margin:36px auto;text-align:center}@media (max-width:952px){.pagination-container[_ngcontent-%COMP%]{width:100%}}']}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[i.Bz.forChild(m)],i.Bz]}),n})();var P=e(59987);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[o.CommonModule,h,g.JX,c.ef,P.o]]}),n})()}}]);