(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[3188],{13188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CategoriesModule:()=>re});var a=n(61116),r=n(33464),o=n(80848),i=n(70653),s=n(31153),c=n(45510),l=n(83588),g=n(47701),d=n(98720),p=n(44689),h=n(35366),u=n(92935),m=n(81830),b=n(99896),C=n(68370),f=n(31269),y=n(56507),P=n(31041),x=n(77307),O=n(84369),S=n(29282),_=n(9745),v=n(24595),M=n(35189);const w=["searchForm"],I=["searchInput"],E=function(e){return["edit-category",e]};function F(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"tr"),h["\u0275\u0275elementStart"](1,"td"),h["\u0275\u0275element"](2,"img",20),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](3,"td"),h["\u0275\u0275text"](4),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"td"),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"td"),h["\u0275\u0275text"](8),h["\u0275\u0275pipe"](9,"featuredStatus"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"td"),h["\u0275\u0275text"](11),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](12,"td"),h["\u0275\u0275text"](13),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"td"),h["\u0275\u0275text"](15),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](16,"td"),h["\u0275\u0275elementStart"](17,"button",21),h["\u0275\u0275listener"]("click",function(){const t=h["\u0275\u0275restoreView"](e).$implicit;return h["\u0275\u0275nextContext"]().openConfirmDialog(t._id)}),h["\u0275\u0275elementStart"](18,"mat-icon"),h["\u0275\u0275text"](19,"delete"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"button",22),h["\u0275\u0275elementStart"](21,"mat-icon"),h["\u0275\u0275text"](22,"edit"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Image"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("src",null==e?null:e.image,h["\u0275\u0275sanitizeUrl"])("alt",e.categoryName),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Category Name"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](e.categoryName),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Slug"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](e.categorySlug),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Is Featured"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](h["\u0275\u0275pipeBind1"](9,19,e.isFeatured)),h["\u0275\u0275advance"](2),h["\u0275\u0275attribute"]("data-label","Priority"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](e.priority?e.priority:"N/A"),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Total Products"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](e.productCount),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Total Products"),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](e.subcategoryCount),h["\u0275\u0275advance"](1),h["\u0275\u0275attribute"]("data-label","Actions"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("disabled",e.readOnly),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("disabled",e.readOnly)("routerLink",h["\u0275\u0275pureFunction1"](21,E,e._id))}}const k=function(){return["add-new-category"]},j=function(e,t,n){return{itemsPerPage:e,currentPage:t,totalItems:n}};let T=(()=>{class e{constructor(e,t,n,a,r,o,i,s){this.dialog=e,this.categoryService=t,this.uiService=n,this.reloadService=a,this.spinner=r,this.utilsService=o,this.router=i,this.activatedRoute=s,this.categories=[],this.holdPrevData=[],this.currentPage=1,this.totalProducts=0,this.productsPerPage=24,this.totalProductsStore=0,this.searchProducts=[],this.isLoading=!1,this.isSelect=!1,this.searchQuery=null,this.dataTypeFormat="excel"}ngOnInit(){this.reloadService.refreshCategories$.subscribe(()=>{this.getAllCategory()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(e=>{this.currentPage=e&&e.page?e.page:1,this.getAllCategory()})}ngAfterViewInit(){this.subForm=this.searchForm.valueChanges.pipe((0,l.j)("searchTerm"),(0,g.b)(200),(0,d.x)(),(0,p.w)(e=>{if(this.searchQuery=e,""===this.searchQuery||null===this.searchQuery||!this.searchQuery.trim())return this.searchProducts=[],this.categories=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,i.E;this.isLoading=!0;const t={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};return this.categoryService.getSearchCategories(e,t)})).subscribe(e=>{this.isLoading=!1,this.searchProducts=e.data,this.categories=this.searchProducts,this.totalProducts=e.count,this.currentPage=1,this.router.navigate([],{queryParams:{page:this.currentPage}})},e=>{this.isLoading=!1})}openConfirmDialog(e){this.dialog.open(o.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(t=>{t&&this.deleteCategory(e)})}openConfirmUploadDialog(e){this.dialog.open(o.$,{maxWidth:"400px",data:{title:"Import Data!",message:"Warning! Please check excel format for final import"}}).afterClosed().subscribe(t=>{t&&this.insertManyCategory(e)})}getAllCategory(){this.spinner.show();const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.categoryService.getAllCategoryWithCount(e).subscribe(e=>{this.categories=e.data,console.log("Categories:",this.categories),this.totalProducts=e.count,this.holdPrevData=e.data,this.totalProductsStore=e.count,this.spinner.hide()},e=>{this.spinner.hide(),console.log(e)})}insertManyCategory(e){this.spinner.show(),this.categoryService.insertManyCategory(e).subscribe(e=>{this.uiService.success(e.message),this.reloadService.needRefreshCategories$(),this.spinner.hide()},e=>{console.log(e),this.spinner.hide()})}deleteCategory(e){this.categoryService.deleteCategory(e).subscribe(e=>{this.uiService.success(e.message),this.reloadService.needRefreshCategories$()},e=>{console.log(e)})}onPageChanged(e){this.router.navigate([],{queryParams:{page:e}})}onFileChange(e){let t=null,n=null;const a=new FileReader,r=e.target.files[0];"excel"===this.dataTypeFormat?(a.onload=e=>{t=s.read(a.result,{type:"binary"}),n=t.SheetNames.reduce((e,n)=>(e[n]=s.utils.sheet_to_json(t.Sheets[n]),e),{});const r=n.categories.map(e=>{const t=e.categoryName.toString().trim();return Object.assign(Object.assign({},e),{categorySlug:this.utilsService.transformToSlug(t)})});this.openConfirmUploadDialog(r)},a.readAsBinaryString(r)):(a.readAsText(r,"UTF-8"),a.onload=()=>{const e=JSON.parse(a.result.toString()).map(e=>({_id:e._id?e._id:null,readOnly:!!e.readOnly&&e.readOnly,categoryName:e.categoryName,categorySlug:e.categorySlug,priority:e.priority,attributes:e.attributes,image:e.image}));this.openConfirmUploadDialog(e)},a.onerror=e=>{console.log(e)})}exportDataToFile(){"json"===this.dataTypeFormat?this.exportAsAJson():this.exportToExcel()}exportToExcel(){this.spinner.show(),this.categoryService.getAllCategory().subscribe(e=>{const t=e.data.map(e=>{var t;return Object.assign(Object.assign({},e),{attributes:e.attributes&&(null===(t=e.attributes)||void 0===t?void 0:t.length)>0?this.utilsService.arrayToString(e.attributes.map(e=>e._id),"#"):null})}),n=this.utilsService.getDateString(new Date),a=s.utils.json_to_sheet(t),r=s.utils.book_new();s.utils.book_append_sheet(r,a,"categories"),s.writeFile(r,`Categories_Backup_${n}.xlsx`),this.spinner.hide()},e=>{this.spinner.hide(),console.log(e)})}exportExcelFormat(){this.spinner.show();const e=s.utils.json_to_sheet([{categoryName:"Test Category 11",image:null}]),t=s.utils.book_new();s.utils.book_append_sheet(t,e,"categories"),s.writeFile(t,"Categories_Import_Format.xlsx"),this.spinner.hide()}exportAsAJson(){this.categoryService.getAllCategory().subscribe(e=>{const t=new Blob([JSON.stringify(e.data,null,2)],{type:"application/json"});this.dialog.open(c._,{maxWidth:"500px",data:{blobUrl:window.URL.createObjectURL(t),backupType:"categories"}})},e=>{console.log(e)})}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subForm&&this.subForm.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](u.uw),h["\u0275\u0275directiveInject"](m.H),h["\u0275\u0275directiveInject"](b.F),h["\u0275\u0275directiveInject"](C.f),h["\u0275\u0275directiveInject"](f.t2),h["\u0275\u0275directiveInject"](y.F),h["\u0275\u0275directiveInject"](r.F0),h["\u0275\u0275directiveInject"](r.gz))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-categories"]],viewQuery:function(e,t){if(1&e&&(h["\u0275\u0275viewQuery"](w,5),h["\u0275\u0275viewQuery"](I,5)),2&e){let e;h["\u0275\u0275queryRefresh"](e=h["\u0275\u0275loadQuery"]())&&(t.searchForm=e.first),h["\u0275\u0275queryRefresh"](e=h["\u0275\u0275loadQuery"]())&&(t.searchInput=e.first)}},decls:47,vars:24,consts:[[1,"filter-area"],[1,"search","search-area"],[1,"search-form"],["searchForm","ngForm"],["type","text","placeholder","Search here...","name","searchTerm","autocomplete","off","ngModel","","required","",2,"background","aliceblue"],["searchInput",""],[1,"icon"],[1,"top-action"],[1,"main"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",3,"fullScreen"],[2,"color","white"],["checkImageDefault","",1,"table-image",3,"src","alt"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"disabled","click"],["mat-mini-fab","",3,"disabled","routerLink"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",0),h["\u0275\u0275elementStart"](1,"div",1),h["\u0275\u0275elementStart"](2,"form",2,3),h["\u0275\u0275element"](4,"input",4,5),h["\u0275\u0275elementStart"](6,"div",6),h["\u0275\u0275elementStart"](7,"mat-icon"),h["\u0275\u0275text"](8,"search"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"div",7),h["\u0275\u0275elementStart"](10,"div",8),h["\u0275\u0275elementStart"](11,"button",9),h["\u0275\u0275elementStart"](12,"mat-icon"),h["\u0275\u0275text"](13,"add"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275text"](14," Add New Category "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](15,"div",10),h["\u0275\u0275elementStart"](16,"h2"),h["\u0275\u0275text"](17,"Category List"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](18,"hr",11),h["\u0275\u0275elementStart"](19,"div",12),h["\u0275\u0275elementStart"](20,"table"),h["\u0275\u0275elementStart"](21,"thead"),h["\u0275\u0275elementStart"](22,"tr",13),h["\u0275\u0275elementStart"](23,"th",14),h["\u0275\u0275text"](24),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"th",14),h["\u0275\u0275text"](26),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](27,"th",14),h["\u0275\u0275text"](28),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"th",14),h["\u0275\u0275text"](30),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](31,"th",14),h["\u0275\u0275text"](32),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](33,"th",14),h["\u0275\u0275text"](34),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](35,"th",14),h["\u0275\u0275text"](36),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](37,"th",14),h["\u0275\u0275text"](38),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](39,F,23,23,"tr",15),h["\u0275\u0275pipe"](40,"paginate"),h["\u0275\u0275pipe"](41,"sort"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](42,"div",16),h["\u0275\u0275elementStart"](43,"pagination-controls",17),h["\u0275\u0275listener"]("pageChange",function(e){return t.onPageChanged(e)}),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](44,"ngx-spinner",18),h["\u0275\u0275elementStart"](45,"p",19),h["\u0275\u0275text"](46," Loading... "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](11),h["\u0275\u0275property"]("routerLink",h["\u0275\u0275pureFunction0"](19,k)),h["\u0275\u0275advance"](13),h["\u0275\u0275textInterpolate"]("Image"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Category Name"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Slug"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Is Featured"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Priority"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Total Products"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Total Subcategory"),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"]("Actions"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",h["\u0275\u0275pipeBind2"](40,13,h["\u0275\u0275pipeBind2"](41,16,t.categories,"priority"),h["\u0275\u0275pureFunction3"](20,j,t.productsPerPage,t.currentPage,t.totalProducts))),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("autoHide",!0)("maxSize",15),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("fullScreen",!0))},directives:[P._Y,P.JL,P.F,P.Fj,P.JJ,P.On,P.Q7,x.Hw,O.lW,r.rH,a.NgForOf,S.LS,f.Ro,_.o],pipes:[S._s,v.U,M.n],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#017970;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#017970}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#017970}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.search[_ngcontent-%COMP%]{width:100%;max-width:400px;position:relative;z-index:1299!important}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-radius:8px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:45px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#ffeaff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.color[_ngcontent-%COMP%]{background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.sm[_ngcontent-%COMP%]{width:100%;height:38px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:55px;line-height:55px;font-size:24px;width:70px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;color:#fff;background:#00a594;border:none;cursor:pointer}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{height:38px;line-height:38px;font-size:30px;width:40px}.filter-area[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:12px 12px 24px 0}.top-action[_ngcontent-%COMP%]{margin-top:16px;padding-right:16px;display:flex;justify-content:space-between;flex-direction:column}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]{padding-left:16px}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.main[_ngcontent-%COMP%]{text-align:right}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}.pagination-container[_ngcontent-%COMP%]{text-align:center}"]}),e})();var N=n(33817),A=n(42237),D=n(31203),z=n(61613),L=n(40994),R=n(35965),q=n(13070),U=n(9550),Q=n(57147),B=n(13841),G=n(87672),V=n(87064);const J=["templateForm"];function H(e,t){1&e&&h["\u0275\u0275element"](0,"mat-spinner",16)}function Y(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"mat-option",17),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275property"]("value",e.value),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"](" ",e.viewValue," ")}}const $=function(e){return[e,"image-gallery"]},W=function(e){return{url:e}};let X=(()=>{class e{constructor(e,t,n,a,r,o,i,s,c){this.fb=e,this.activatedRoute=t,this.categoryService=n,this.attributeService=a,this.uiService=r,this.utilsService=o,this.storageService=i,this.router=s,this.spinner=c,this.autoSlug=!0,this.isLoading=!1,this.placeholder="/assets/images/avatar/image-upload.jpg",this.featured=A.id,this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({categoryName:[null,P.kI.required],categorySlug:[null,P.kI.required],isFeatured:[null],priority:[null],image:[null]}),this.pickedImage=this.placeholder,this.id||(this.storageService.getStoredInput("CATEGORY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("CATEGORY_INPUT")),history.state.images&&(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage}))),this.autoGenerateSlug(),this.activatedRoute.paramMap.subscribe(e=>{this.id=e.get("id"),this.id&&this.getCategoryByCategoryId()})}setFormData(){this.dataForm.patchValue(this.category),this.storageService.getStoredInput("CATEGORY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("CATEGORY_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.category.image?this.category.image:this.placeholder}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.category){const e=Object.assign(Object.assign({},this.dataForm.value),{_id:this.category._id});this.editCategoryData(e)}else this.addCategory(this.dataForm.value)}autoGenerateSlug(){if(!0===this.autoSlug)this.sub=this.dataForm.get("categoryName").valueChanges.pipe().subscribe(e=>{const t=null==e?void 0:e.trim().replace(/[^A-Z0-9]+/gi,"-").toLowerCase();this.dataForm.patchValue({categorySlug:t})});else{if(null==this.sub)return;this.sub.unsubscribe()}}onHoldInputData(){var e;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(e=this.dataForm)||void 0===e?void 0:e.value,"CATEGORY_INPUT")}addCategory(e){this.spinner.show(),this.categoryService.addCategory(e).subscribe(e=>{this.uiService.success(e.message),this.templateForm.resetForm(),this.storageService.removeSessionData("CATEGORY_INPUT"),this.pickedImage=this.placeholder,this.spinner.hide()},e=>{this.spinner.hide(),e.error.statusCode===N.q.EXISTS_OR_NOT_ACCEPT&&this.dataForm.controls.categoryName.setErrors({incorrect:!0})})}getCategoryByCategoryId(){this.categoryService.getCategoryByCategoryId(this.id).subscribe(e=>{this.category=e.data,this.category&&this.setFormData()},e=>{console.log(e)})}editCategoryData(e){this.spinner.show(),this.categoryService.editCategoryData(e).subscribe(e=>{this.uiService.success(e.message),this.storageService.removeSessionData("CATEGORY_INPUT"),this.spinner.hide()},e=>{console.log(e),this.spinner.hide()})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("CATEGORY_INPUT")}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](P.qu),h["\u0275\u0275directiveInject"](r.gz),h["\u0275\u0275directiveInject"](m.H),h["\u0275\u0275directiveInject"](D.c),h["\u0275\u0275directiveInject"](b.F),h["\u0275\u0275directiveInject"](y.F),h["\u0275\u0275directiveInject"](z.V),h["\u0275\u0275directiveInject"](r.F0),h["\u0275\u0275directiveInject"](f.t2))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-add-new-category"]],viewQuery:function(e,t){if(1&e&&h["\u0275\u0275viewQuery"](J,5),2&e){let e;h["\u0275\u0275queryRefresh"](e=h["\u0275\u0275loadQuery"]())&&(t.templateForm=e.first)}},decls:36,vars:12,consts:[[2,"position","relative"],["style","position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto",4,"ngIf"],[1,"header-dialog"],["mat-dialog-title",""],["color","primary",3,"ngModel","ngModelChange","change"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","categoryName","matInput","","placeholder","Enter category name","required",""],["formControlName","categorySlug","matInput","","placeholder","Enter category slug","required",""],["formControlName","priority","matInput","","placeholder","Enter category priority","digitOnly","","type","number"],["formControlName","isFeatured"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","type","submit"],[2,"position","absolute","left","0","top","0","right","0","bottom","0","margin","auto"],[3,"value"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"div",0),h["\u0275\u0275template"](1,H,1,0,"mat-spinner",1),h["\u0275\u0275elementStart"](2,"div",2),h["\u0275\u0275elementStart"](3,"h1",3),h["\u0275\u0275text"](4,"Category"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"mat-checkbox",4),h["\u0275\u0275listener"]("ngModelChange",function(e){return t.autoSlug=e})("change",function(){return t.autoGenerateSlug()}),h["\u0275\u0275text"](6,"Auto Slug"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"form",5,6),h["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit()}),h["\u0275\u0275elementStart"](9,"div",7),h["\u0275\u0275listener"]("click",function(){return t.onHoldInputData()}),h["\u0275\u0275element"](10,"img",8),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"mat-form-field",9),h["\u0275\u0275elementStart"](12,"mat-label"),h["\u0275\u0275text"](13,"Category Name"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](14,"input",10),h["\u0275\u0275elementStart"](15,"mat-error"),h["\u0275\u0275text"](16,"This field is required"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](17,"mat-form-field",9),h["\u0275\u0275elementStart"](18,"mat-label"),h["\u0275\u0275text"](19,"Category Slug"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](20,"input",11),h["\u0275\u0275elementStart"](21,"mat-error"),h["\u0275\u0275text"](22,"This field is required"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](23,"mat-form-field",9),h["\u0275\u0275elementStart"](24,"mat-label"),h["\u0275\u0275text"](25,"Priority"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](26,"input",12),h["\u0275\u0275elementStart"](27,"mat-error"),h["\u0275\u0275text"](28,"This field is required"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"mat-form-field",9),h["\u0275\u0275elementStart"](30,"mat-label"),h["\u0275\u0275text"](31,"Set as Featured?"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](32,"mat-select",13),h["\u0275\u0275template"](33,Y,2,2,"mat-option",14),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](34,"button",15),h["\u0275\u0275text"](35),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.isLoading),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("ngModel",t.autoSlug),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("formGroup",t.dataForm),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("routerLink",h["\u0275\u0275pureFunction1"](8,$,t.id?"../../../":"../../"))("state",h["\u0275\u0275pureFunction1"](10,W,t.router.url)),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("src",t.pickedImage,h["\u0275\u0275sanitizeUrl"]),h["\u0275\u0275advance"](23),h["\u0275\u0275property"]("ngForOf",t.featured),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate"](t.category?"Edit Category":"Add Category"))},directives:[a.NgIf,u.uh,L.oG,P.JJ,P.On,P._Y,P.JL,R.xw,R.Wh,P.sg,r.rH,q.KE,q.hX,P.Fj,U.Nt,P.u,P.Q7,q.TO,P.wV,Q.L,B.gD,a.NgForOf,O.lW,G.$g,V.ey],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),e})();const K=[{path:"",component:T},{path:"add-new-category",component:X},{path:"edit-category/:id",component:X}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(K)],r.Bz]}),e})();var ee=n(56861),te=n(77154),ne=n(12231),ae=n(59987);let re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({imports:[[a.CommonModule,Z,ee.q,P.UX,te.o9,G.Cq,P.u5,f.ef,Q.E7,ne.D,S.JX,ae.o]]}),e})()},81830:(e,t,n)=>{"use strict";n.d(t,{H:()=>c});var a=n(529),r=n(42693),o=n(99129),i=n(35366);const s=a.N.apiBaseLink+"/api/product-category/";let c=(()=>{class e{constructor(e){this.httpClient=e,this.categories=[]}addCategory(e){return this.httpClient.post(s+"add-category",e)}insertManyCategory(e){return this.httpClient.post(s+"add-multiple-category",e)}getAllCategory(e,t){let n=new r.LE;return e&&(n=n.append("pageSize",e.pageSize),n=n.append("page",e.currentPage)),t&&(n=n.append("isFeatured",t)),this.httpClient.get(s+"get-all-categories",{params:n})}getAllCategoryWithCount(e,t){let n=new r.LE;return e&&(n=n.append("pageSize",e.pageSize),n=n.append("page",e.currentPage)),t&&(n=n.append("isFeatured",t)),this.httpClient.get(s+"get-all-categories-with-count",{params:n})}getCategoryByCategoryId(e){return this.httpClient.get(s+"get-category-by-category-id/"+e)}editCategoryData(e){return this.httpClient.put(s+"edit-category-by-category",e)}getCategoryBySearch(e){return this.httpClient.get(s+"get-category-by-search/"+e)}deleteCategory(e){return this.httpClient.delete(s+"delete-category-by-id/"+e)}getCategoryByCategorySlug(e){return this.httpClient.get(s+"get-category-by-category-slug/"+e)}getSearchCategories(e,t){const n=t;let a=new r.LE;return a=a.append("q",e),a=a.append("pageSize",t.pageSize),a=a.append("currentPage",t.currentPage),this.httpClient.post(s+"get-categories-by-search",n,{params:a})}getAllCategoryNoRepeat(e){return new o.y(t=>{if(this.categories.length>0)t.next({data:this.categories}),t.complete();else{let n=new r.LE;e&&(n=n.append("select",e)),this.httpClient.get(s+"get-all-categories",{params:n}).subscribe(e=>{this.categories=e.data,t.next({data:this.categories}),t.complete()},e=>{console.log(e)})}})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](r.eN))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);