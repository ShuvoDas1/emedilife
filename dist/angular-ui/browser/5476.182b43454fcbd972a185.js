(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[5476],{55476:(t,e,n)=>{"use strict";n.r(e),n.d(e,{InstallationRepairModule:()=>x});var i=n(61116),a=n(33464),o=n(35366),l=n(32757),r=n(68183),p=n(31269),c=n(28070),s=n(9046);function d(t,e){if(1&t&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275element"](1,"app-product-card-one",13),o["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("product",t)}}function g(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"div",8),o["\u0275\u0275elementStart"](1,"div",9),o["\u0275\u0275elementStart"](2,"h2"),o["\u0275\u0275text"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](4,"div",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",11),o["\u0275\u0275template"](6,d,2,1,"ng-container",12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](null==t?null:t.name),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",null==t?null:t.products)}}const m=function(t){return{background:t}},f=[{path:":slug",component:(()=>{class t{constructor(t,e,n,i){this.activatedRoute=t,this.installationRepairService=e,this.installationRepairTypeService=n,this.spinner=i,this.installationRepairTypeSlug=null,this.installationRepairs=[]}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{this.installationRepairTypeSlug=t.get("slug"),this.getSingleInstallationRepairTypeBySlug(),this.getInstallationRepairBySlug()})}getInstallationRepairBySlug(){this.spinner.show(),this.installationRepairService.getInstallationRepairBySlug(this.installationRepairTypeSlug).subscribe(t=>{this.installationRepairs=t.data,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}getSingleInstallationRepairTypeBySlug(){this.installationRepairTypeService.getSingleInstallationRepairTypeBySlug(this.installationRepairTypeSlug).subscribe(t=>{this.installationRepairType=t.data},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](a.gz),o["\u0275\u0275directiveInject"](l.T),o["\u0275\u0275directiveInject"](r.o),o["\u0275\u0275directiveInject"](p.t2))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["app-installation-repair"]],decls:13,vars:9,consts:[[1,"offer-section-1"],[1,"offer-title",3,"ngStyle"],[1,"section1-container"],[1,"description"],[1,"description",3,"innerHTML"],[1,"container-fluid"],[1,"section-2","section-deal-of-day","section-md"],["class","container",4,"ngFor","ngForOf"],[1,"container"],[1,"deal-title"],[1,"line"],[1,"deal-on-play-view"],[4,"ngFor","ngForOf"],[3,"product"]],template:function(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"section",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"h2"),o["\u0275\u0275text"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275elementStart"](5,"div",3),o["\u0275\u0275elementStart"](6,"p"),o["\u0275\u0275text"](7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"div",4),o["\u0275\u0275pipe"](9,"safeHtmlCustom"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"div",5),o["\u0275\u0275elementStart"](11,"section",6),o["\u0275\u0275template"](12,g,7,2,"div",7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngStyle",o["\u0275\u0275pureFunction1"](7,m,"url("+(null==e.installationRepairType?null:e.installationRepairType.image)+") no-repeat 0 0 / cover")),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](null==e.installationRepairType?null:e.installationRepairType.title),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](null==e.installationRepairType?null:e.installationRepairType.shortDescription),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("innerHTML",o["\u0275\u0275pipeBind1"](9,5,null==e.installationRepairType?null:e.installationRepairType.description),o["\u0275\u0275sanitizeHtml"]),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngForOf",e.installationRepairs))},directives:[i.NgStyle,i.NgForOf,c.j],pipes:[s.C],styles:['.section-2[_ngcontent-%COMP%]{box-sizing:border-box;margin-bottom:6vh;background-color:#fff}.deal-title[_ngcontent-%COMP%]{margin-bottom:3vh;box-sizing:border-box;padding:0 12px}.deal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .deal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-style:normal;font-family:Open Sans,sans-serif;font-size:27px;font-weight:600;line-height:28px}.deal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.deal-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#017970}.deal-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;background:#e8e8e8;margin:14px 0 0}@media (max-width:600px){.deal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:23px;line-height:25px}}.container-fluid[_ngcontent-%COMP%]{padding:0;min-height:70vh}.container[_ngcontent-%COMP%]{margin-bottom:30px}@media (min-width:960px) and (max-width:1440px){.container-fluid[_ngcontent-%COMP%], .section1-container[_ngcontent-%COMP%]{width:88%!important;margin:auto}}.deal-of-the-day-view[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px 8px}.deal-of-the-day-view[_ngcontent-%COMP%]   .deal-of-the-card[_ngcontent-%COMP%]{border:1px solid #f4f4f4;width:100%}.deal-on-play-view[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:15px 8px}@media (min-width:1410px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}}@media (max-width:1150px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)!important}}@media (max-width:800px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)!important}}@media (max-width:600px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)!important}}.offer-section-1[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin-bottom:10vh}.offer-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:370px;background-position:50%;background-attachment:scroll;position:relative;z-index:10;margin-bottom:20px;text-align:center}.offer-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-family:Poppins,sans-serif;text-transform:capitalize!important;font-size:40px;display:block;line-height:50px;text-shadow:0 4px 4px #00000080;text-align:center}.offer-title[_ngcontent-%COMP%]:after{content:"";display:block;background-color:#0006;position:absolute;top:0;left:0;height:100%;width:100%;z-index:-10}.description[_ngcontent-%COMP%]{display:block;width:100%;text-align:center}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Open Sans,sans-serif;font-weight:600;font-style:normal;font-size:15px;display:block;line-height:28px}@media (max-width:600px){.offer-section-1[_ngcontent-%COMP%]{margin-bottom:6vh}.offer-title[_ngcontent-%COMP%]{min-height:320px}.offer-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;line-height:45px}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:26px}}']}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[a.Bz.forChild(f)],a.Bz]}),t})();var u=n(42920),y=n(12231);let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[i.CommonModule,h,u.l,y.D]]}),t})()}}]);