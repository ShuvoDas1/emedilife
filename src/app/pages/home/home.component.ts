import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { MenuService } from '../../services/menu.service';
import { ShopService } from '../../services/shop.service';
import { ProductCategory } from '../../interfaces/product-category';
import { CategoryService } from '../../services/category.service';
import { FeaturedCategory } from '../../interfaces/featured-category';
import { FeaturedCategoryService } from '../../services/featured-category.service';
import { FeaturedProduct } from '../../interfaces/featured-product';
import { FeaturedProductService } from '../../services/featured-product.service';
import { Select } from '../../interfaces/select';
import { CustomizationService } from '../../services/customization.service';
import { Carousel } from '../../interfaces/carousel';
import { ProductBrand } from '../../interfaces/product-brand';
import { BrandService } from '../../services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Banner } from '../../interfaces/banner';
import { BannerService } from '../../services/banner.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { Pagination } from '../../interfaces/pagination';
import { FacebookService, InitParams } from 'ngx-facebook';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subDataOne: Subscription;

  recommendProducts: Product[] = [];



  carousels: Carousel[] = [
    { url: '/', image: null, title: '', _id: '' }
  ];

  offers: any[] = [];


  brandList: any[] = [];
  // electronics: any[] = [];

  banner: any;
  bannerByType: any;


  // Store Data
  // dealOnPlay: DealOnPlay[] = [];
  // allDealsOfTheDay: DealsOfTheDay[] = [];
  brands: ProductBrand[] = [];
  featuredCategory: FeaturedCategory[] = [];
  categories: ProductCategory[] = [];
  holdPrevData: ProductCategory[] = [];
  allFeaturedProduct: FeaturedProduct[] = [];
  allBlogs: Blog[] = [];
  // activeFeaturedProduct: string;

  // Dummy Data

  labTests = [
    {
      name: "Complete Blood Count (CBC)",
      price: 400
    },
    {
      name: "Total Cholesterol",
      price: 450
    },
    {
      name: "Liver Function Test (LFT)",
      price: 1000
    },
    {
      name: "ACR-Urine",
      price: 400
    }
  ]



  featureProductTypes: Select[] = [
    {
      value: 'featured',
      viewValue: 'Featured',
    },
    {
      value: 'best-seller',
      viewValue: 'Best Seller',
    },
    {
      value: 'special-product',
      viewValue: 'Special Product',
    },
  ];


  constructor(
    private menuService: MenuService,
    private shopService: ShopService,
    private categoryService: CategoryService,
    private featuredCategoryService: FeaturedCategoryService,
    private featuredProductService: FeaturedProductService,
    private customizationService: CustomizationService,
    private brandService: BrandService,
    private productService: ProductService,
    private storageService: StorageService,
    private bannerService: BannerService,
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    private facebookService: FacebookService,
    private blogService: BlogService,
  ) {
    this.updateMetaData();
  }

  ngOnInit(): void {
    // GET DATA
    this.getAllCarousel();
    this.getAllBrands();
    this.getAllCategory();
    this.getAllFeaturedCategory();
    this.getAllBanner();
    this.getRecommendedProducts();
    this.getAllFeaturedProduct();
    // Init Facebook Service
    // this.initFacebookService();
    this.getAllBlogs();
    this.getBannerByBannerType('home');
  }


  /**
   * HTTP REQ HANDLE
   */

  private getAllCategory() {

    const pagination: Pagination = {
      pageSize: String(10),
      currentPage: String(1)
    };

    this.categoryService.getAllCategory(pagination, true)
      .subscribe(res => {
        this.categories = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllFeaturedProduct() {
    this.featuredProductService.getAllFeaturedProduct()
      .subscribe(res => {
        this.allFeaturedProduct = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllBanner() {
    const p: Pagination = {
      currentPage: '1',
      pageSize: '1'
    };

    const select = 'name image routerLink -_id ';

    this.bannerService.getAllBanner(p, 'footerBanner', select)
      .subscribe(res => {
        this.banner = res.data ? res.data : null;
        // console.log("Banner:", this.banner)
      }, error => {
        console.log(error);
      });
  }

  //Get Banner By Banner Type


  getBannerByBannerType = (type: string) => {
    this.bannerService.getBannerByBannerType(type)
      .subscribe(res => {
        this.bannerByType = res;
        // console.log(this.bannerByType)

      }, error => {
        console.log(error);
      });
  }

  private getAllCarousel() {
    const select = 'image url -_id';
    this.customizationService.getAllCarouselNoRepeat(select)
      .subscribe(res => {
        this.carousels = res.data;
      }, error => {
        console.log(error);
      });
  }

  // private getAllCategory() {
  //   const select = 'categoryName categorySlug image priority -_id';
  //   this.categoryService.getAllCategoryNoRepeat(select)
  //     .subscribe(res => {
  //       this.categories = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // private getAllDealsOfTheDay() {
  //   this.dealsOfTheDayService.getAllDealsOfTheDayNoRepeat()
  //     .subscribe(res => {
  //       this.allDealsOfTheDay = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }


  // private getAllDealOnPLay() {
  //   this.dealOnPlayService.getAllDealOnPlayNoRepeat()
  //     .subscribe(res => {
  //       this.dealOnPlay = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  private getAllFeaturedCategory() {
    this.featuredCategoryService.getAllFeaturedCategoryNoRepeat()
      .subscribe(res => {
        this.featuredCategory = res.data;
      }, error => {
        console.log(error);
      });
  }

  // public getAllFeaturedProduct(type: string) {
  //   this.activeFeaturedProduct = type;
  //   this.featuredProductService.getAllFeaturedProductNoRepeat(type)
  //     .subscribe(res => {
  //       this.allFeaturedProduct = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  private getAllBrands() {
    const pagination: Pagination = {
      pageSize: '14',
      currentPage: '1'
    };

    const select = 'brandName brandSlug image';

    this.subDataOne = this.brandService.getAllBrands(pagination, select, true)
      .subscribe(res => {
        this.brands = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(res => {
        this.allBlogs = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getRecommendedProducts() {
    this.productService.getRecommendedProducts(this.storageService.getViewedProductData())
      .subscribe(res => {
        this.recommendProducts = res.data;
      }, err => {
        console.log(err);
      });
  }


  /**
   * SEO TITLE
   * SEO META TAGS
   */

  private updateMetaData() {
    // Title
    this.title.setTitle('Emedilife - Trusted Online Pharmacy & Healthcare Solution in Bangladesh');
    // Meta
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'description', content: 'We are the No.1 online pharmacitical solution for your daily medicines.' });
    this.meta.updateTag({ name: 'keywords', content: 'online shop, esquire, esquireelectronics, esquireelectronicsltd, esquireelectronicsltd.com' });
    // Facebook
    this.meta.updateTag({ name: 'og:title', content: 'E-medilife - Home' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:url', content: 'https://emedilife.com/' });
    // this.meta.updateTag({name: 'og:image', content: 'https://esquireelectronicsltd.com/assets/brand/esquire.png'});
    this.meta.updateTag({ name: 'og:description', content: 'We are the No.1 online pharmacitical solution for your daily medicines.' });
    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: 'E-medilife - Homee' });
    // this.meta.updateTag({name: 'twitter:image', content: 'https://esquireelectronicsltd.com/assets/brand/esquire.png'});
    this.meta.updateTag({ name: 'twitter:description', content: 'We are the No.1 online pharmacitical solution for your daily medicines.' });

    // Canonical
    this.canonicalService.setCanonicalURL();

  }

  /**
   * INIT FACEBOOK
   */
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v11.0' };
    this.facebookService.init(initParams);
  }

  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }


  /**
   * HEALTH CONCERN DATA
   */
  // healthConcernArray:object[]=[
  //   {
  //     _id:"1",
  //     image:"./assets/images/image/fwef2.png",
  //     title:"De-Addiation",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"2",
  //     image:"./assets/images/image/ey4erd.png",
  //     title:"Kidney Care",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"3",
  //     image:"./assets/images/image/trietyf.png",
  //     title:"Lung Care",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"4",
  //     image:"./assets/images/image/dhestjgn.png",
  //     title:"Piles Care",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"5",
  //     image:"./assets/images/image/Path 293.png",
  //     title:"Mental Care",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"6",
  //     image:"./assets/images/image/fwef2.png",
  //     title:"Mental Care",
  //     routerLink:"#"
  //   },
  //   {
  //     _id:"7",
  //     image:"./assets/images/image/fwef2.png",
  //     title:"De-Addiation",
  //     routerLink:"#"
  //   },
  // ]


}
