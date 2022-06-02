import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductBrand} from '../../interfaces/product-brand';
import {NgxSpinnerService} from 'ngx-spinner';
import {Pagination} from '../../interfaces/pagination';
import {BrandService} from '../../services/brand.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-feature-brands',
  templateUrl: './all-feature-brands.component.html',
  styleUrls: ['./all-feature-brands.component.scss']
})
export class AllFeatureBrandsComponent implements OnInit, OnDestroy {

  // Subscriptions
  private subAcRoute: Subscription;
  private subDataOne: Subscription;

  brands: ProductBrand[] = [];
  holdPrevData: ProductBrand[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 24;
  totalProductsStore = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private brandService: BrandService,
  ) {
  }

  ngOnInit(): void {
    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getAllBrands();
    });
  }

  private getAllBrands() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.brandService.getAllBrands(pagination)
      .subscribe(res => {
        this.brands = res.data;
        this.totalProducts = res.count;
        this.holdPrevData = res.data;
        this.totalProductsStore = res.count;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }

  /**
   * ON DESTROY
   */
  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }

}
