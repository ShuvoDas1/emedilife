import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Pagination } from '../../interfaces/pagination';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../../interfaces/product';
import { ProductCategory } from '../../interfaces/product-category';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatRadioChange } from '@angular/material/radio';
import { BrandService } from '../../services/brand.service';
import { ProductBrand } from '../../interfaces/product-brand';
import { MatSliderChange } from '@angular/material/slider';
import { GenericService } from '../../services/generic.service';
import { ProductGeneric } from '../../interfaces/product-generic';
import { Banner } from './../../interfaces/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.scss']
})
export class AllProductListComponent implements OnInit, OnDestroy {

  // SUBSCRIPTION
  private subProduct: Subscription;
  private subCat: Subscription;
  private subSubCat: Subscription;
  private subAcRoute: Subscription;
  private subForm: Subscription;
  querySubscribe: Subscription;
  paramSubscribe: Subscription;

  // View Type
  viewType = 'grid';

  // Params
  categoryId: string = null;
  brandId: string = null;
  genericId: string = null;

  // Store Data
  products: Product[] = [];
  categories: ProductCategory[] = [];
  brands: ProductBrand[] = [];
  generics: ProductGeneric[] = [];
  // subCategories: ProductSubCategory[] = [];



  // Price Range
  minPrice: number = null;
  maxPrice: number = null;
  rangeSet = false;
  priceRange: { min: number; max: number } = { min: 0, max: 0 };
  minView = 0;
  maxView = 0;

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 50;
  // totalProductsStore = 0;

  // Query
  parentQuery: any = null;

  // For Reset
  catFilter: string;
  brandFilter: any;
  genericFilter: any;
  // subCatFilter: any;

  select = 'productName productSlug sku images category subCategory generic prices productVisibility';

  // MOBILE FILTER DIALOG
  @ViewChild('dialogFilter') dialogFilter: any;



  // Banner

  banner: Array<Banner> = [];
  bannerByType: any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private genericService: GenericService,
    private router: Router,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private bannerService: BannerService
  ) {
  }

  ngOnInit(): void {

    // PARAM SUBSCRIBE
    this.paramSubscribe = this.activatedRoute.paramMap.subscribe(param => {

      if (param.get('categoryId')) {
        this.categoryId = param.get('categoryId');
        this.parentQuery = { category: this.categoryId };
      }
      if (param.get('brandId')) {
        this.brandId = param.get('brandId');
        this.parentQuery = { brand: this.brandId };
      }

      if (param.get('genericId')) {
        this.genericId = param.get('genericId');
        this.parentQuery = { generic: this.genericId };
      }

      // GET PAGE FROM QUERY PARAM
      this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
        if (qParam && qParam.page) {
          this.currentPage = qParam.page;
        } else {
          this.currentPage = 1;
        }
        this.getAllProducts();
      });

    });

    // GET
    this.getAllCategory();
    this.getAllBrands();
    this.getAllGenerics();
    this.getAllBanner();
    this.getBannerByBannerType();
    // console.log("Banner:", this.banner);

  }


  //Banner

  private getAllBanner() {
    const p: Pagination = {
      currentPage: '1',
      pageSize: '1'
    };

    const select = 'name image routerLink -_id';

    this.bannerService.getAllBanner(p, 'bigBanner', select)
      .subscribe(res => {
        this.banner = res.data;
        // console.log(this.banner[0].image);
      }, error => {
        console.log(error);
      });
  }

  //Get Banner By Banner Type

  getBannerByBannerType = () => {
    this.bannerService.getBannerByBannerType('productBanner')
      .subscribe(res => {
        this.bannerByType = res;

      }, error => {
        console.log(error);
      });
  }

  /**
   * PRICE RANGE
   */

  onInputChangeMin(event: MatSliderChange) {
    this.router.navigate([], { queryParams: { page: 1 } });
    setTimeout(() => {
      this.rangeSet = true;
      this.minPrice = event.value;
      this.onFilterPriceRange();
    }, 500);

  }

  onInputChangeMax(event: MatSliderChange) {
    this.router.navigate([], { queryParams: { page: 1 } });
    setTimeout(() => {
      this.rangeSet = true;
      this.maxPrice = event.value;
      this.onFilterPriceRange();
    }, 500);
  }

  onInputChangeSlideMin(event: MatSliderChange) {
    this.minView = event.value;
  }

  onInputChangeSlideMax(event: MatSliderChange) {
    this.maxView = event.value;
  }

  /**
   * OPEN FILTER DIALOG
   */

  public openTemplateDialog(data?: any) {
    this.dialog.open(this.dialogFilter, {
      data,
      panelClass: ['theme-dialog', 'dialog-no-radius'],
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      autoFocus: false,
      disableClose: false,
    });
  }


  /**
   * HTTP REQ HANDLE
   */

  private getAllProducts() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    const mQuery = { ...{ productVisibility: true }, ...this.parentQuery };

    this.subProduct = this.productService.getProductList(pagination, null, mQuery, this.select)
      .subscribe(res => {
        this.products = res.data;
        this.totalProducts = res.count;
        // const min = res.priceRange.minPrice;
        // const max = res.priceRange.maxPrice;
        if (this.totalProducts > 0) {
          // this.priceRange.min = res.priceRange.minPrice;
          // this.priceRange.max = res.priceRange.maxPrice;
          // this.minView = res.priceRange.minPrice;
          // this.maxView = res.priceRange.maxPrice;
        }
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private getAllCategory() {
    this.subCat = this.categoryService.getAllCategory()
      .subscribe(res => {
        this.categories = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllBrands() {
    this.subCat = this.brandService.getAllBrands()
      .subscribe(res => {
        this.brands = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllGenerics() {
    this.subCat = this.genericService.getAllGenerics()
      .subscribe(res => {
        this.generics = res.data;
      }, error => {
        console.log(error);
      });
  }

  // private getAllSubCategory(categoryId: string) {
  //   this.subSubCat = this.subCategoryService.getSubCategoryByCategoryId(categoryId)
  //     .subscribe(res => {
  //       this.subCategories = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  /**
   * ON FILTER CHANGE
   */

  onFilterPriceRange() {
    if (!this.maxPrice) {
      this.maxPrice = this.priceRange.max;
    }

    if (this.parentQuery && this.parentQuery.price) {
      delete this.parentQuery.price;
    }
    const pQ = { price: { $gte: this.minPrice - 1, $lte: this.maxPrice + 1 } };

    this.parentQuery = { ...this.parentQuery, ...pQ };
    console.log(this.parentQuery);

    if (this.currentPage > 1) {
      this.router.navigate([], { queryParams: { page: 1 } });
    } else {
      this.getAllProducts();
    }

  }


  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], { queryParams: { page: event } });
  }


  /**
   * SELECTION CHANGE
   * FILTER
   */


  onCatSelectionChange(event: MatRadioChange) {
    // if (this.parentQuery && this.parentQuery.subCategory) {
    //   delete this.parentQuery.subCategory;
    // }
    this.parentQuery = { ...this.parentQuery, ...{ category: event.value._id } };
    if (this.currentPage > 1) {
      this.router.navigate([], { queryParams: { page: 1 } });
    } else {
      this.getAllProducts();
    }
  }

  onBrandSelectionChange(event: MatRadioChange) {
    if (this.parentQuery) {
      this.parentQuery = { ...this.parentQuery, ...{ brand: event.value._id } };
    } else {
      this.parentQuery = { brand: event.value._id };
    }
    if (this.currentPage > 1) {
      this.router.navigate([], { queryParams: { page: 1 } });
    } else {
      this.getAllProducts();
    }
  }

  onGenericSelectionChange(event: MatRadioChange) {
    if (this.parentQuery) {
      this.parentQuery = { ...this.parentQuery, ...{ generic: event.value._id } };
    } else {
      this.parentQuery = { generic: event.value._id };
    }
    if (this.currentPage > 1) {
      this.router.navigate([], { queryParams: { page: 1 } });
    } else {
      this.getAllProducts();
    }
  }


  onSubCatSelectionChange(event: MatRadioChange) {
    this.parentQuery = { ...this.parentQuery, ...{ subCategory: event.value._id } };
    console.log(this.parentQuery);
    this.getAllProducts();
    if (this.currentPage > 1) {
      this.router.navigate([], { queryParams: { page: 1 } });
    } else {
      this.getAllProducts();
    }
  }

  /**
   * ON REMOVE
   */
  onClearFilter() {
    this.catFilter = null;
    this.brandFilter = null;
    this.genericFilter = null;
    this.parentQuery = null;
    this.categoryId = null;
    this.brandId = null;
    this.genericId = null;
    this.minPrice = null;
    this.maxPrice = null;
    this.router.navigate(['/products'], { queryParams: { page: null }, queryParamsHandling: 'merge' });
    this.getAllProducts();
  }

  /**
   * CHANGE VIEW TYPE
   */
  onChangeViewType(type: string) {
    this.viewType = type;
  }

  /**
   * ON DESTROY
   */
  ngOnDestroy() {

    if (this.paramSubscribe) {
      this.paramSubscribe.unsubscribe();
    }
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subProduct) {
      this.subProduct.unsubscribe();
    }
    if (this.subCat) {
      this.subCat.unsubscribe();
    }
    if (this.subSubCat) {
      this.subSubCat.unsubscribe();
    }
    if (this.subForm) {
      this.subForm.unsubscribe();
    }
  }


}
