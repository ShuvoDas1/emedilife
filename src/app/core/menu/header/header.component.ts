import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pluck, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { LOGO_PRIMARY } from '../../utils/ref-const';
import { ShopInfo } from '../../../interfaces/shop-info';
import { Pagination } from '../../../interfaces/pagination';
import { PromoPageService } from '../../../services/promo-page.service';
import { PromoPage } from '../../../interfaces/promo-page';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';
import { UserDataService } from '../../../services/user-data.service';
import { CartPricePipe } from '../../../shared/pipes/cart-price.pipe';
import { CartService } from '../../../services/cart.service';
import { ReloadService } from '../../../services/reload.service';
import { Cart } from '../../../interfaces/cart';
import { DATABASE_KEY } from '../../utils/global-variable';
import { UiService } from '../../../services/ui.service';
import { HeaderMenuService } from './../../../services/header-menu.service';
import { HeaderMenu } from 'src/app/interfaces/header-menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CartPricePipe]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  logoPrimary = LOGO_PRIMARY;

  @Output() sidenavNavToggle = new EventEmitter();

  @ViewChild('searchForm') searchForm: NgForm;
  @Input() scrollPosition = 0;
  @Input() shopInfo: ShopInfo;

  // User Data
  user: User = null;
  isUserAuth = false;

  // CARTS
  cartSlide = false;
  carts: Cart[];
  cartsItemsCount = 0;


  // Test
  searchProducts: Product[] = [];
  hide = true;
  hideAdBanner = false;

  // SEARCH AREA
  overlay = false;
  isOpen = false;
  isFocused = false;
  isLoading = false;
  isSelect = false;
  query = null;
  @ViewChild('searchInput') searchInput: ElementRef;


  // Placeholder Animation
  timeOutOngoing: any;
  char = 0;
  txt = 'Search for Medicine (e.g. Napa, Seclo)';
  promoPage: PromoPage;

  // Header MenuSide

  headerMenu: HeaderMenu;


  constructor(
    private productService: ProductService,
    public router: Router,
    private promoPageService: PromoPageService,
    public userService: UserService,
    public userDataService: UserDataService,
    private cartService: CartService,
    private reloadService: ReloadService,
    private cartPricePipe: CartPricePipe,
    private uiService: UiService,
    private headerMenuService: HeaderMenuService
  ) {

    this.getHeaderMenu();
  }

  ngOnInit(): void {



    this.userService.getUserStatusListener().subscribe(() => {
      this.isUserAuth = this.userService.getUserStatus();
      if (this.isUserAuth) {
        this.getLoggedInUserInfo();
      }
    });
    this.isUserAuth = this.userService.getUserStatus();
    if (this.isUserAuth) {
      this.getLoggedInUserInfo();
    }

    // CART FUNCTION
    this.reloadService.refreshCart$.subscribe(() => {
      this.getCartsItems(true);
    });
    this.getCartsItems();

    // this.getPromoPage();
  }


  ngAfterViewInit(): void {
    this.searchAnim();
    const formValue = this.searchForm.valueChanges;
    // console.log(formValue)

    formValue.pipe(
      // map(t => t.searchTerm)
      // filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(data => {
        this.query = data.trim();
        if (this.query === '' || this.query === null) {
          this.overlay = false;
          this.searchProducts = [];
          this.query = null;
          return EMPTY;
        }
        this.isLoading = true;
        const pagination: Pagination = {
          currentPage: '1',
          pageSize: '50'
        };
        return this.productService.getSearchProduct(data, pagination);
      })
    )
      .subscribe(res => {
        this.isLoading = false;
        this.searchProducts = res.data;
        // console.log(this.searchProducts);
        if (this.searchProducts.length > 0) {
          this.isOpen = true;
          this.overlay = true;
        }
      }, () => {
        this.isLoading = false;
      });
  }

  /**
   * HTTP REQ HANDLE
   */

  // GET HEADER MENU items

  getHeaderMenu = () => {
    this.headerMenuService.getHeaderMenu()
      .subscribe(res => {
        this.headerMenu = res.data;
        // console.log(this.headerMenu)
      })


  }


  onLogin() {

    this.router.navigate(["/login"]);
    this.router.url === "/login" ? null : localStorage.setItem("prevUrl", this.router.url);


  }

  // goCheckoutPage() {
  //   if (this.user) {
  //     this.router.navigate(["/checkout"]);
  //   }
  // }

  private getLoggedInUserInfo() {
    const select = 'fullName';
    this.userDataService.getLoggedInUserInfo(select)
      .subscribe(res => {
        this.user = res.data;
      }, error => {
        console.log(error);
      });
  }

  onDeleteCartItem(cartId: string, product: string, priceId?: any) {
    console.log("productId:", product, "priceId:", priceId);
    if (this.userService.getUserStatus()) {
      this.removeCartItem(cartId);
    } else {
      this.cartService.deleteCartItemFromLocalStorage(product, priceId);
      this.reloadService.needRefreshCart$();
    }
  }

  private incrementCartQtyDB(cartId: string) {
    this.cartService.incrementCartQuantity(cartId)
      .subscribe(() => {
        this.reloadService.needRefreshCart$();
      }, error => {
        console.log(error);
      });
  }

  private decrementCartQtyDB(cartId: string) {
    this.cartService.decrementCartQuantity(cartId)
      .subscribe(() => {
        this.reloadService.needRefreshCart$();
      }, error => {
        console.log(error);
      });
  }

  private removeCartItem(cartId: string) {
    this.cartService.removeCartItem(cartId)
      .subscribe(() => {
        this.reloadService.needRefreshCart$();
      }, error => {
        console.log(error);
      });
  }

  /**
   * CART DATA
   */
  private getCartsItems(refresh?: boolean) {
    if (this.userService.getUserStatus()) {
      this.cartService.getCartItemList()
        .subscribe(res => {
          this.carts = res.data;
          if (refresh) {
            console.log('Iam on Cart trigger');
            this.cartSlide = true;
            console.log(this.cartSlide);
          }
        });
    } else {
      this.getCarsItemFromLocal(refresh);
    }

  }

  private getCarsItemFromLocal(refresh?: boolean) {
    const items = this.cartService.getCartItemFromLocalStorage();

    if (items && items.length > 0) {
      const ids: string[] = items.map(m => m.product as string);
      this.productService.getSpecificProductsById(ids, 'productName productSlug price prices discountType discountAmount  quantity images')
        .subscribe(res => {
          const products = res.data;
          if (products && products.length > 0) {
            this.carts = items.map(t1 => ({ ...t1, ...{ product: products.find(t2 => t2._id === t1.product) } }));
            if (refresh) {
              console.log('Iam on Cart trigger Local');
              this.cartSlide = true;
              console.log(this.cartSlide);
            }
          }
        });
    } else {
      this.carts = [];
    }
  }

  /**
   * LOGICAL METHODS
   */

  incrementQty(cartId: string, index: number) {
    if (this.userService.getUserStatus()) {
      this.incrementCartQtyDB(cartId);
    } else {
      const data = this.cartService.getCartItemFromLocalStorage();
      if (data != null) {
        data[index].selectedQty = data[index].selectedQty + 1;
        localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
        this.reloadService.needRefreshCart$();
      }
    }
  }

  decrementQty(cartId: string, index: number, sQty: number) {
    if (this.userService.getUserStatus()) {
      if (sQty === 1) {
        this.uiService.warn('Minimum quantity is 1');
        return;
      }
      this.decrementCartQtyDB(cartId);
    } else {
      const data = this.cartService.getCartItemFromLocalStorage();
      if (data[index].selectedQty === 1) {
        return;
      }
      if (data != null) {
        data[index].selectedQty = data[index].selectedQty - 1;
        localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(data));
        this.reloadService.needRefreshCart$();
      }
    }

  }

  /**
   * CALCULATION
   */

  get cartSubTotal(): number {
    if (this.carts && this.carts.length > 0) {
      return this.carts.map(t => {
        return this.cartPricePipe.transform(t, 'priceWithDiscount') as number;
      }).reduce((acc, value) => acc + value, 0);
    } else {
      return 0;
    }
  }



  /**
   * HANDLE SEARCH
   * OVERLAY
   * SELECT
   */


  onClickHeader(): void {
    this.handleCloseOnly();
  }

  onClickSearchArea(event: MouseEvent): void {
    event.stopPropagation();
  }


  handleOverlay(): void {
    this.overlay = false;
    this.isOpen = false;
    this.isFocused = false;
  }

  handleFocus(event: FocusEvent): void {
    this.searchInput.nativeElement.focus();

    if (this.isFocused) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.setPanelState(event);
    }
    this.isFocused = true;
  }


  private setPanelState(event: FocusEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isOpen = false;
    this.handleOpen();
  }


  handleOpen(): void {
    if (this.isOpen || this.isOpen && !this.isLoading) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.isOpen = true;
      this.overlay = true;
    }
  }

  handleOutsideClick(): void {
    if (!this.isOpen) {
      // this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  handleCloseOnly(): void {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  handleCloseAndClear(): void {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.searchProducts = [];
    this.isFocused = false;
  }


  onSelectItem(data: Product): void {
    this.handleCloseAndClear();
    this.router.navigate(['/', data?.productSlug]);
    // this.router.navigate(['/', data?.brandSlug, data?.categorySlug, data?.productSlug]);
  }


  /**
   * ON TOGGLE SIDE MENU
   */
  onToggleSidenav() {
    this.sidenavNavToggle.emit();
  }

  /**
   * SEARCH PLACEHOLDER ANIMATION
   */
  private searchAnim() {
    const target = this.searchInput.nativeElement as HTMLInputElement;
    target.placeholder = '|';
    this.typeIt(target);
  }

  private typeIt(target: HTMLInputElement) {
    const humanize = Math.round(Math.random() * (300 - 30)) + 30;
    this.timeOutOngoing = setTimeout(() => {
      this.char++;
      const type = this.txt.substring(0, this.char);
      target.placeholder = type + '|';
      this.typeIt(target);

      if (this.char === this.txt.length) {
        // target.placeholder = txt.slice(0, -1);
        target.placeholder = '|';
        this.char = 0;
        // clearTimeout(timeOut);
      }

    }, humanize);
  }

  onNavigate() {
    if (this.router.url === '/') {
      this.onReload();
    } else {
      this.router.navigate(['/']);
    }
  }

  onReload() {
    window.location.reload();
  }

  private getPromoPage() {
    this.promoPageService.getPromoPage()
      .subscribe(res => {
        this.promoPage = res.data;
      }, err => {
        console.log(err);
      });
  }


  ngOnDestroy() {
    if (this.timeOutOngoing) {
      clearTimeout(this.timeOutOngoing);
    }
  }

  /*** header-banner-hide */
  bannerHide() {
    this.hideAdBanner = true;
  }

  get visibleAddBanner(): boolean {
    if (this.promoPage && this.promoPage.image) {
      if (this.scrollPosition <= 40 && this.hideAdBanner === false) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**** cart-slide */
  cartSlideActive() {
    this.cartSlide = true;
  }

  cartSlideInactive() {
    this.cartSlide = false;
  }


  checkoutClick() {
    this.cartSlide = false;
    !this.isUserAuth ? localStorage.setItem("prevUrl", "/checkout") : null;
    this.router.navigate(['/checkout'])
  }


}
