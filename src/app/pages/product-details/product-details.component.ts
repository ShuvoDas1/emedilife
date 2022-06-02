import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { UtilsService } from '../../services/utils.service';
import { NgForm } from '@angular/forms';
import { Cart } from '../../interfaces/cart';
import { UserDataService } from '../../services/user-data.service';
import { UserService } from '../../services/user.service';
import { ReloadService } from '../../services/reload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { PriceData, Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { ReviewControl } from '../../interfaces/review-control';
import { ReviewControlService } from '../../services/review-control.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Breadcrumb } from '../../interfaces/breadcrumb';
import { StorageService } from 'src/app/services/storage.service';
import { WishlistSchema } from '../../interfaces/wishlist';
import { DiscussionService } from '../../services/discussion.service';
import { Discussion } from '../../interfaces/discussion';
import { User } from '../../interfaces/user';
import { Pagination } from '../../interfaces/pagination';
import { PricePipe } from '../../shared/pipes/price.pipe';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [PricePipe]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  // Subscription
  subRoute: Subscription;
  subDataOne: Subscription;
  subDataTwo: Subscription;
  subDataThree: Subscription;
  subDataFour: Subscription;
  subDataFive: Subscription;
  subDataSix: Subscription;

  // All Product
  productSlug: string = null;
  relatedProducts: Product[] = [];
  product?: Product;
  // Reviews
  allReviews: ReviewControl[] = [];
  // Discussions
  allDiscussions: Discussion[] = [];
  discussionsCount = 0;

  // Image Zoom & View Area
  @ViewChild('zoomViewer', { static: true }) zoomViewer;
  @ViewChild('info', { static: true }) info;
  image: any;
  zoomImage: any;

  // Quantity
  selectedQty = 1;

  // CARTS
  carts: Cart[] = [];
  existsInCart = false;

  // Image Loader
  isImgLoaded = false;
  isSmImgLoad = false;

  // View Container
  viewContainer = 'desc';
  viewPolicy = 'delivery';

  // Breadcrumb
  breadcrumbs: Breadcrumb[] = [];

  // Unit Type
  productPriceData: PriceData[] = [];
  selectedPriceData: PriceData = null;

  // User
  user: User = null;


  constructor(
    private productService: ProductService,
    private utilsService: UtilsService,
    private userDataService: UserDataService,
    private userService: UserService,
    private reloadService: ReloadService,
    private activatedRoute: ActivatedRoute,
    public uiService: UiService,
    private cartService: CartService,
    private reviewControlService: ReviewControlService,
    private spinner: NgxSpinnerService,
    private storageService: StorageService,
    public router: Router,
    public discussionService: DiscussionService,
    public pricePipe: PricePipe,
  ) {
  }

  ngOnInit(): void {

    // this.zoomViewer.nativeElement.children[0].style.display = 'none';

    this.subRoute = this.activatedRoute.paramMap.subscribe(param => {
      this.productSlug = param.get('slug');
      this.getSingleProductBySlug();
    });

    this.reloadService.refreshCart$.subscribe(() => {
      this.getCartsItems();
    });


    // this.reloadService.refreshDiscussion$.subscribe(() => {
    //   this.getAllDiscussionsByQuery();
    // });

  }


  /**
   * HTTP REQ HANDLE
   */

  private getSingleProductBySlug() {
    this.spinner.show();
    this.subDataOne = this.productService.getSingleProductBySlug(this.productSlug)
      .subscribe(res => {
        this.spinner.hide();
        this.product = res.data;
        if (this.product) {
          this.productPriceData = this.product.prices;
          if (this.productPriceData && this.productPriceData.length) {
            this.selectedPriceData = this.productPriceData[0];
          }
          // this.updateBreadcrumb();
          this.setDefaultImage();
          this.getRelatedProducts();
          this.getCartsItems();
          this.getAllReviewsByQuery();
          // this.getAllDiscussionsByQuery();
          if (this.ifLoggedIn()) {
            this.getLoggedInUserInfo();
          }
        } else {
          this.router.navigate(['/page/404']);
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private getAllReviewsByQuery() {
    const query = {
      product: this.product._id,
      status: true
    };
    this.subDataFour = this.reviewControlService.getAllReviewsByQuery(null, null, query)
      .subscribe(res => {
        this.allReviews = res.data;
      }, error => {
        console.log(error);
      });
  }

  private getRelatedProducts() {
    let data;
    // console.log('this is test for generic');
    data = {
      // @ts-ignore
      generic: this.product.generic._id,
      id: this.product._id,
    };
    // console.log(data);
    // if (this.product.subCategory) {
    //   // @ts-ignore
    //   data = {...data, ...{subCategory: this.product.subCategory._id}};
    // }
    this.subDataFive = this.productService.getRelatedProducts(data)
      .subscribe(res => {
        this.relatedProducts = res.data;
      }, error => {
        console.log(error);
      });
  }


  addItemToCartDB(data: Cart) {
    // @ts-ignore
    const fIndex = this.carts.findIndex((o) => o.product._id === data.product && o.priceId === data.priceId);
    if (fIndex === -1) {
      this.userDataService.addItemToUserCart(data)
        .subscribe(res => {
          if (res.success) {
            this.uiService.success(res.message);
            this.reloadService.needRefreshCart$();
          } else {
            this.uiService.warn(res.message);
            this.reloadService.needRefreshCart$();
          }
        }, error => {
          console.log(error);
        });
    } else {
      this.uiService.warn('This variant already added in your cart');
      this.reloadService.needRefreshCart$();
    }


  }

  /**
   * IMAGE ZOOM & VIEW AREA
   */
  public onMouseMove(e) {
    if (window.innerWidth >= 1099) {
      const image = e.currentTarget;
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const x = offsetX / image.offsetWidth * 100;
      const y = offsetY / image.offsetHeight * 100;
      const zoom = this.zoomViewer.nativeElement.children[0];
      if (zoom) {
        zoom.style.backgroundPosition = x + '% ' + y + '%';
        zoom.style.display = 'block';
        zoom.style.height = image.height + 'px';
        zoom.style.width = image.width + 'px';
        this.info.nativeElement.style.display = 'none';

      }
    }
  }

  public onMouseLeave(event) {
    this.zoomViewer.nativeElement.children[0].style.display = 'none';
    this.info.nativeElement.style.display = 'block';
  }

  public selectImage(image: any) {
    this.image = image;
    this.zoomImage = image;
  }

  private setDefaultImage() {
    // this.image = this.product.images !== null ? this.product.images[0].big : '/assets/images/junk/Nokia 3310.jpg';
    this.image = this.product.images && this.product.images.length > 0 ? this.product.images[0] : '/assets/images/placeholder/test.png';
    // this.zoomImage = this.product.images[0].big;
    this.zoomImage = this.image;
  }


  /**
   * QUANTITY CONTROL
   */

  onChangeQty = (qty: any) => {
    // console.log(qty.target.value);
    this.selectedQty = parseInt(qty.target.value);
  }

  incrementQty() {
    this.selectedQty += 1;
  }

  decrementQty() {
    if (this.selectedQty === 1) {
      this.uiService.warn('Minimum Quantity is selected');
      return;
    }
    this.selectedQty -= 1;
  }

  /**
   * CART FUNCTIONALITY
   */

  buyNow() {
    this.addToCart();
  }

  addToCart() {
    const data: Cart = {
      product: this.product?._id,
      selectedQty: this.selectedQty,
      priceId: this.selectedPriceData._id
    };


    if (this.userService.getUserStatus()) {
      this.addItemToCartDB(data);
    } else {
      this.cartService.addCartItemToLocalStorage(data);

      this.reloadService.needRefreshCart$();
    }
  }

  // GET CARTS DATA
  private getCartsItems() {
    if (this.userService.getUserStatus()) {
      this.getCartItemList();
    } else {
      this.getCarsItemFromLocal();
    }

  }

  private getCartItemList() {
    this.subDataTwo = this.cartService.getCartItemList()
      .subscribe(res => {
        this.carts = res.data;
        // @ts-ignore
        // const existsOnCart = this.carts.find(item => item.product._id === this.product._id);
        // if (existsOnCart) {
        //   this.existsInCart = true;
        //   this.selectedQty = existsOnCart.selectedQty;
        //   this.selectedPriceData = this.productPriceData.find(f => f._id === existsOnCart.priceId);
        // }
      }, error => {
        console.log(error);
      });
  }

  private getCarsItemFromLocal() {
    const items = this.cartService.getCartItemFromLocalStorage();

    if (items && items.length > 0) {
      const ids: string[] = items.map(m => m.product as string);
      this.productService.getSpecificProductsById(ids, 'productName productSlug  price discountType discountAmount  quantity images')
        .subscribe(res => {
          const products = res.data;
          if (products && products.length > 0) {
            this.carts = items.map(t1 => ({ ...t1, ...{ product: products.find(t2 => t2._id === t1.product) } }));
            // @ts-ignore
            const existsOnCart = this.carts.find(item => item.product._id === this.product._id);
            if (existsOnCart) {
              this.existsInCart = true;
              this.selectedQty = existsOnCart.selectedQty;
              this.selectedPriceData = this.productPriceData.find(f => f._id === existsOnCart.priceId);
            }
          }
        });
    } else {
      this.carts = [];
    }
  }

  private getLoggedInUserInfo() {
    const select = 'phoneNo fullName profileImg email';
    this.subDataSix = this.userDataService.getLoggedInUserInfo(select)
      .subscribe(res => {
        this.user = res.data;
      }, error => {
        console.log(error);
      });
  }


  /**
   * ON SUBMIT Review
   */

  onSubmit(formDirective: NgForm) {
  }

  /**
   * Breadcrumb CUSTOM
   */
  private updateBreadcrumb() {
    this.breadcrumbs = [
      {
        label: 'Home',
        url: '/',
        icon: 'fas fa-home'
      },
      {
        label: this.product?.categorySlug,
        url: `/product-list/${this.product.categorySlug}`
      },
      {
        label: this.product?.subCategorySlug,
        url: `/product-list/${this.product.categorySlug}/${this.product.subCategorySlug}`
      },
      {
        label: this.product?.productName,
        url: null
      }
    ];
  }

  /**
   * HTTP REQ HANDLE AND ONCLICK CHECK AND CALL ADD TO WISHLIST
   */

  addItemToWishlistDB(data: WishlistSchema) {
    this.userDataService.addSingleItemToWishlist(data)
      .subscribe(res => {
        this.uiService.success(res.message);
      }, error => {
        console.log(error);
      });
  }

  ifLoggedIn() {
    return this.userService.getUserStatus();
  }

  addToWishlistItemAfterCheck() {
    this.userDataService.checkStatusInWishlistWithBookId(this.product._id)
      .subscribe(res => {
        // const count = res.data;
        const exists = res.exists;

        if (this.userService.getUserStatus()) {
          // if (count === 0) {
          if (!exists) {
            const data: WishlistSchema = {
              product: this.product?._id
            };
            this.addItemToWishlistDB(data);
          } else {
            // WARNING MESSAGE FOR REGISTERED USER THAT ITEM ALREADY EXISTS
            this.uiService.warn(res.message);
          }
        }
      }, error => {
        console.log(error);
      });
  }


  /**
   * DISCUSSION AREA
   */
  /**
   * DISCUSSION AREA
   */
  private getAllDiscussionsByQuery() {
    const query = {
      product: this.product._id,
      status: true
    };
    const pagination: Pagination = {
      currentPage: '1',
      pageSize: '10'
    };
    this.subDataThree = this.discussionService.getAllDiscussionsByQuery(pagination, null, query)
      .subscribe(res => {
        this.allDiscussions = res.data;
        this.discussionsCount = res.count;
      }, error => {
        console.log(error);
      });
  }

  onSubmitDiscussion(event: any) {

    const mData: Discussion = {
      ...event,
      ...{
        product: this.product._id,
        discussionDate: new Date(),
        reply: [],
        status: false
      }
    };

    this.addDiscussion(mData);
  }

  private addDiscussion(data: Discussion) {
    this.discussionService.addDiscussion(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshDiscussion$();
      }, error => {
        console.log(error);
      });
  }

  /**
   * ON Price Unit Data SELECT
   */
  onPriceDataSelect(event: PriceData) {
    this.selectedPriceData = event;
  }

  /**
   * CALCULATE EMI VALUE
   */

  private calculateEmiValue(emiMonth: number) {
    const productPrice = this.pricePipe.transform(this.product, 'priceWithDiscount');
    return Math.floor(productPrice / emiMonth);
  }

  ngOnDestroy() {
    if (this.subRoute) {
      this.subRoute.unsubscribe();
    }
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
    if (this.subDataTwo) {
      this.subDataTwo.unsubscribe();
    }
    if (this.subDataThree) {
      this.subDataThree.unsubscribe();
    }
    if (this.subDataFour) {
      this.subDataFour.unsubscribe();
    }
    if (this.subDataFive) {
      this.subDataFive.unsubscribe();
    }
    if (this.subDataSix) {
      this.subDataSix.unsubscribe();
    }
  }


}
