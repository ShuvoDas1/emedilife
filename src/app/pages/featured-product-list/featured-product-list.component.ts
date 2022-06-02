import { Component, OnInit, ViewChild } from '@angular/core';
import { FeaturedProductService } from '../../services/featured-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FeaturedProduct } from '../../interfaces/featured-product';
import { Product } from '../../interfaces/product';
import { Subscription } from 'rxjs';
import { Pagination } from '../../interfaces/pagination';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { CategoryService } from '../../services/category.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { AttributeService } from '../../services/attribute.service';
import { MatSliderChange } from '@angular/material/slider';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-featured-product-list',
  templateUrl: './featured-product-list.component.html',
  styleUrls: ['./featured-product-list.component.scss']
})
export class FeaturedProductListComponent implements OnInit {

  // SUBSCRIPTION
  querySubscribe: Subscription;
  paramSubscribe: Subscription;
  subDataOne: Subscription;


  attributes: any[] = [];
  products: any[] = [];
  tags: any[] = [];

  // View Type
  viewType = 'grid';

  // Params
  categorySlug: string = null;
  subCategorySlug: string = null;
  brandSlug: string = null;
  brandId: string = null;

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

  query: any[] = [];
  query2: any[] = [];
  query3: any[] = [];
  // {
  //   pageSize: this.productsPerPage,
  //   currentPage: this.currentPage
  // }
  paginate: Pagination = null;
  select = 'productName images productSlug prices category brand generic';

  // MOBILE FILTER DIALOG
  @ViewChild('dialogFilter') dialogFilter: any;

  id: string;

  // Breadcrumb
  breadcrumbs: Breadcrumb[] = [];
  featuredProduct: FeaturedProduct;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private attributeService: AttributeService,
    private featuredProductService: FeaturedProductService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this.id) {
        this.getSingleFeaturedProductById();
      }
    });

    // PARAM SUBSCRIBE
    this.paramSubscribe = this.activatedRoute.paramMap.subscribe(param => {
      if (param.get('brandId')) {
        this.brandId = param.get('brandId');
        this.query.push({ brand: this.brandId });
      } else {
        this.categorySlug = param.get('categorySlug');

        this.query = [{ categorySlug: this.categorySlug }];

        if (param.get('subCategorySlug')) {
          this.subCategorySlug = param.get('subCategorySlug');
          this.query.push({ subCategorySlug: this.subCategorySlug });
          this.getSubCategoryAttributes();
        }
        if (param.get('brandSlug')) {
          this.brandSlug = param.get('brandSlug');
          this.query.push({ brandSlug: this.brandSlug });
          this.getSubCategoryAttributes();
        }
      }

      this.updateBreadcrumb();

      // QUERY SUBSCRIBE
      this.querySubscribe = this.activatedRoute.queryParams.subscribe(param2 => {

        if (param2.page) {
          this.currentPage = param2.page;
        } else {
          this.currentPage = 1;
        }
        this.productFilterByQuery(this.query);

      });


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
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private productFilterByQuery(query: any) {
    this.paginate = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };
    query.push({ productVisibility: true });
    this.subDataOne = this.productService.productFilterByQuery(query, this.paginate, this.select)
      .subscribe(res => {
        this.products = res.data;
        this.totalProducts = res.count;
        // const min = res.priceRange.minPrice;
        // const max = res.priceRange.maxPrice;
        if (this.totalProducts > 0) {
          this.priceRange.min = res.priceRange.minPrice;
          this.priceRange.max = res.priceRange.maxPrice;
        }
        // console.log(this.products);
      }, error => {
        console.log(error);
      });
  }


  private getSubCategoryAttributes() {
    this.subCategoryService.getSubCategoryBySubCategorySlug(this.subCategorySlug)
      .subscribe(res => {
        this.attributes = res.data.attributes;
        // console.log(this.attributes);
      }, error => {
        console.log(error);
      });
  }

  onFilterPriceRange() {
    this.query.forEach((item, index) => {
      if ('price' in item) {
        this.query.splice(index, 1);
      }
    });
    if (!this.maxPrice) {
      // console.log('Price is null');
      this.maxPrice = this.priceRange.max;
    }

    // @ts-ignore
    this.query.push({ price: { $gte: this.minPrice - 1, $lte: this.maxPrice + 1 } });
    // this.query3 = this.query3.concat(this.query);


    this.productFilterByQuery(this.query);

  }

  onFilterChange(event: MatCheckboxChange, a: any, v: any) {
    if (event.checked) {
      this.query2.push(
        { attributeName: a.attributeName, attributeValues: v }
        // {'attributes': {'$elemMatch': {'attributeName': a.attributeName, 'attributeValues': v}}}
      );
    } else {
      this.query2 = this.query2.filter((item) =>
        item.attributeValues !== v
      );
    }
    const finalQuery = [];
    this.query2.map(item => {
      finalQuery.push(
        {
          $and: [
            { filterData: { $elemMatch: { attributeName: item.attributeName } } },
            { filterData: { $elemMatch: { attributeValues: item.attributeValues } } }
          ]
        }
      );
    });

    const temp = [{ $or: finalQuery }];
    this.query3 = this.query.concat(temp);

    if (this.query2.length < 1) {
      this.productFilterByQuery(this.query);
    } else {
      this.productFilterByQuery(this.query3);
    }

  }

  private getSingleFeaturedProductById() {
    const selectProductField = '-attributes -filterData -tags -ratingReview -discussion -warrantyServices -description';
    this.featuredProductService.getSingleFeaturedProductById(this.id, selectProductField)
      .subscribe(res => {
        this.featuredProduct = res.data;
        this.products = this.featuredProduct.products as Product[];
      }, error => {
        console.log(error);
      });
  }

  /**
   * NGX PAGINATION CHANGED
   */

  public onChangePage(event: number) {
    this.router.navigate([], { queryParams: { page: event } });
    // this.router.navigate([], {queryParams: {page: 1}});
  }

  /**
   * Breadcrumb CUSTOM
   */
  private updateBreadcrumb() {
    if (this.subCategorySlug) {
      this.breadcrumbs = [
        {
          label: 'Home',
          url: '/',
          icon: 'fas fa-home'
        },
        {
          label: this.categorySlug,
          url: `/product-list/${this.categorySlug}`
        },
        {
          label: this.subCategorySlug,
          url: `/product-list/${this.categorySlug}/${this.subCategorySlug}`
        }
      ];
    } else if (this.categorySlug && !this.subCategorySlug) {
      this.breadcrumbs = [
        {
          label: 'Home',
          url: '/',
          icon: 'fas fa-home'
        },
        {
          label: this.categorySlug,
          url: `/product-list/${this.categorySlug}`
        }
      ];
    } else {
      this.breadcrumbs = [
        {
          label: 'Home',
          url: '/',
          icon: 'fas fa-home'
        }
      ];
    }
  }

  /**
   * CHANGE VIEW TYPE
   */
  onChangeViewType(type: string) {
    this.viewType = type;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.paramSubscribe) {
      this.paramSubscribe.unsubscribe();
    }
    if (this.querySubscribe) {
      this.querySubscribe.unsubscribe();
    }
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }

  /***
   * Product-list-Banner
   */
  // carousels:object[]=[
  //   {
  //     _id:'1',
  //     bannerImage:"./assets/images/image/Mask Group .png",
  //     url:"#"
  //   },
  //   {
  //     _id:'2',
  //     bannerImage:"./assets/images/image/Image 1.png",
  //     url:"#"
  //   }
  // ]

}
