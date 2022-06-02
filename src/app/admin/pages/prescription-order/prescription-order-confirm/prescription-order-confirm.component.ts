import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../../../services/ui.service';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';
import { PrescriptionOrderService } from '../../../../services/prescription-order.service';
import { PrescriptionOrder } from '../../../../interfaces/prescription-order';
import { ConfirmDialogComponent } from '../../../../shared/components/ui/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadService } from '../../../../services/file-upload.service';
// import { PrescriptionOrderConfirmComponent } from '../prescription-order-confirm/prescription-order-confirm.component';
import { NgForm } from '@angular/forms';
import { Product, PriceData } from './../../../../interfaces/product';
import SwiperCore, { Zoom, FreeMode, Navigation, Thumbs } from "swiper";
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pluck, switchMap, } from 'rxjs/operators';
import { ProductService } from './../../../../services/product.service';
import { Pagination } from './../../../../interfaces/pagination';
// import { clearScreenDown } from 'readline';
import { SelectedItem } from './../../../../interfaces/seleted-item';
import { FinalProducts } from './../../../../interfaces/final-products';
import { ShippingChargeService } from 'src/app/services/shipping-charge';
import { UserService } from 'src/app/services/user.service';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from './../../../../interfaces/coupon';
import { StorageService } from 'src/app/services/storage.service';
import { CouponType } from 'src/app/enum/coupon-type';
import { CouponDiscountType } from 'src/app/enum/coupon-discount-type';
import { OrderStatus } from 'src/app/enum/order-status';
import { OrderService } from 'src/app/services/order.service';
import { image } from 'ngx-editor/schema/nodes';
import { ConfirmOrderDialogComponent } from './../../../../pages/user/checkout/confirm-order-dialog/confirm-order-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';






// install Swiper modules
SwiperCore.use([Zoom, FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-prescription-order-confirm',
  templateUrl: './prescription-order-confirm.component.html',
  styleUrls: ['./prescription-order-confirm.component.scss']
})
export class PrescriptionOrderConfirmComponent implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  control = new FormControl();
  // streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  searchProducts: Product[] = [];
  selectedQty = 1

  selectedItem: SelectedItem = {
    productName: null,
    productId: null,
    priceData: [],
    unitType: null,
    quantity: 1,
    price: 0,
    totalPrice: 0

  }



  finalProducts: FinalProducts[] = [];
  userInfo: any;
  prescriptionImages: [];
  shippingCharge: any;



  orderId: string = null;
  order: PrescriptionOrder = null;
  searchKey: string;

  isFocused = false;
  isOpen = false;
  isLoading = false;
  overlay = false;
  query = null;

  selectedIndex = 0;

  thumbsSwiper: any;

  albums: IAlbum[] = [];

  subTotal: number = 0;

  // Coupon
  couponText: string;
  couponData: Coupon = null;
  finalDiscount = 0;

  constructor(
    private route: ActivatedRoute,
    private prescriptionOrderService: PrescriptionOrderService,
    private uiService: UiService,
    private router: Router,
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig,
    private dialog: MatDialog,
    private fileUploadService: FileUploadService,
    private productService: ProductService,
    private shippingChargeService: ShippingChargeService,
    private userService: UserService,
    private couponService: CouponService,
    private storageService: StorageService,
    private orderService: OrderService,
    private spinner: NgxSpinnerService
  ) {



  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.orderId = param.get('id');
      this.getOrderDetails();
      // console.log("shippingCharge", this.shippingCharge)

      this.couponData = this.storageService.storedCouponData;
      if (this.couponData) {
        this.couponText = this.couponData.couponCode;
        this.getCouponCalculation();
      }

    });


  }

  ngAfterViewInit(): void {

    this.getShippingCharge();

  }

  /**
   * APPLY COUPON
   */

  applyCoupon() {
    if (!this.userService.getUserStatus()) {
      this.uiService.warn('Please log in for apply this coupon');
      return;
    }
    if (!this.couponText) {
      this.uiService.warn('No Coupon text');
      return;
    } else {
      this.checkCoupon();
    }
  }

  removeCoupon() {
    this.couponData = null;
    this.couponText = null;
    this.finalDiscount = 0;
    this.storageService.storeCouponData(this.couponData);
  }

  private checkCoupon() {
    this.couponService.checkCouponForApply(this.couponText)
      .subscribe(res => {
        if (res.success) {
          if (this.subTotal < res.data.couponMinPurchase) {
            this.uiService.warn('The minimum Amount for apply this coupon is ' + res.data.couponMinPurchase);
          } else {
            this.couponData = res.data;
            this.storageService.storeCouponData(this.couponData);
            this.getCouponCalculation();
            this.uiService.success(res.message);
          }

        } else {
          this.uiService.warn(res.message);
        }
      }, error => {
        console.log(error);
      });
  }

  getCouponCalculation() {

    if (this.couponData.couponType === CouponType.AMOUNT) {

      if (this.couponData.couponDiscountType === CouponDiscountType.ORDERDISCOUNT) {
        this.finalDiscount = this.couponData.couponAmount;
      } else if (this.couponData.couponDiscountType === CouponDiscountType.SHIPPINGDISCOUNT) {
        this.finalDiscount = (this.shippingCharge);
      } else {
        this.finalDiscount = this.couponData.couponAmount;
      }
    } else {
      if (this.couponData.couponDiscountType === CouponDiscountType.ORDERDISCOUNT) {
        this.finalDiscount = Math.floor(this.subTotal * (this.couponData.couponAmount / 100));
      } else if (this.couponData.couponDiscountType === CouponDiscountType.SHIPPINGDISCOUNT) {
        this.finalDiscount = (this.shippingCharge);
      } else {
        this.finalDiscount = (this.subTotal + this.shippingCharge * (this.couponData.couponAmount / 100));
      }
    }

    // if (this.couponData) {
    //   const amount = this.couponData.couponAmount;
    //   if (this.couponData.couponType === 1) {
    //     if (this.couponData.couponDiscountType === 2) {
    //       this.finalDiscount = (this.shippingChargeData && this.shippingChargeData.deliveryInDhaka ? this.shippingChargeData.deliveryInDhaka : 0) - amount;
    //       return this.finalDiscount;
    //     } else {
    //       return this.finalDiscount = amount;
    //     }
    //   } else {
    //     if (this.couponData.couponDiscountType === 1) {
    //       return this.finalDiscount = this.cartSubTotal * (amount / 100);
    //     } else if (this.couponData.couponDiscountType === 2) {
    //       return this.finalDiscount = (this.shippingChargeData && this.shippingChargeData.deliveryInDhaka ? this.shippingChargeData.deliveryInDhaka : 0) * (amount / 100);
    //     } else {
    //       return this.finalDiscount = (this.cartSubTotal + (this.shippingChargeData && this.shippingChargeData.deliveryInDhaka ? this.shippingChargeData.deliveryInDhaka : 0)) * (amount / 100);
    //     }
    //   }
    // } else {
    //   return 0;
    // }

  }

  // Get ShippingCharge By District

  getShippingCharge() {
    this.shippingChargeService.getShippingCharge()
      .subscribe(res => {
        // console.log(res.data);
        if (this.order?.district == "Dhaka") {
          this.shippingCharge = res.data?.deliveryInDhaka;
          console.log(this.shippingCharge)
        }
        else {
          this.shippingCharge = (res.data?.deliveryOutsideDhaka);
          console.log(this.shippingCharge)

        }
      })
  }


  // Search Product

  getSearchDataFromInput(value: string = "") {
    this.searchKey = value.trim();

    if (this.searchKey.length > 1) {
      // console.log("request call", this.searchKey);
      this.searchProduct();
    }


  }

  private searchProduct() {
    this.isLoading = true;

    const pagination: Pagination = {
      currentPage: '1',
      pageSize: '50'
    };

    debounceTime(500),
      distinctUntilChanged()

    // console.log("final -> search", this.searchKey);

    this.productService.addProductBySearchByAdminCustomOrder(this.searchKey, pagination)

      .subscribe(res => {
        this.isLoading = false;
        this.searchProducts = res.data;
        // console.log(this.searchProducts);

      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }





  // Get Product From Search 


  selectProduct(product: any) {
    var newPriceList = [];
    if (product.prices) {
      for (let index = 0; index < product.prices.length; index++) {
        const price = product.prices[index];
        newPriceList.push({
          ...price,
          selected: index === 0 ? true : false
        })
      }
    } else {
      console.log("no price found of this product .");
    }

    this.selectedItem = {
      productName: product.productName,
      productId: product.id,
      unitType: newPriceList[0]?.unit,
      quantity: this.selectedQty,
      price: product.prices[0].price,
      totalPrice: product.prices[0].price * this.selectedQty,
      priceData: newPriceList
    }


  }

  // Add New Product For Order

  addProductData(product: any) {


    const found = this.finalProducts.filter(item => item.product === product.productId && item.unitType.name === product.unitType.name);

    if (found.length > 0) {
      this.uiService.warn("This Variant is Already Added!. Please Try Another Variant")
    } else {
      this.finalProducts.push({
        productName: product.productName,
        product: product.productId,
        price: product.price,
        quantity: product.quantity,
        unitType: product.unitType,
        totalPrice: product.totalPrice,
        orderType: 'prescription'
      })
    }

    this.subTotalAmount()


  }

  // Remove Product

  removeProduct(i: number) {
    // console.log(i)
    this.finalProducts.splice(i, 1);
    this.subTotalAmount()
    // console.log(this.finalProducts);
  }




  // Sub Total Amount

  subTotalAmount() {
    this.subTotal = this.finalProducts.reduce((sum, product) => product.totalPrice + sum, 0);
  }


  // Variant/ Unit Type Select

  selectedUnitType(i: number) {

    const selectedPriceType = this.selectedItem.priceData[i]

    for (let index = 0; index < this.selectedItem.priceData.length; index++) {
      this.selectedItem.priceData[index].selected = index === i ? true : false;
    }

    // console.log(selectedPriceType)
    this.selectedItem.unitType = selectedPriceType.unit;
    this.selectedItem.price = selectedPriceType.price;
    this.selectedItem.totalPrice = selectedPriceType.price * this.selectedQty;

  }

  /**
   * QUANTITY CONTROL
   */

  onChangeQty = (qty: any) => {
    // console.log(qty.target.value);
    this.selectedQty = parseInt(qty.target.value);
    this.selectedItem.totalPrice = this.selectedItem.price * this.selectedQty;
  }

  incrementQty() {
    this.selectedQty += 1;
    this.selectedItem.quantity = this.selectedQty;
    this.selectedItem.totalPrice = this.selectedItem.price * this.selectedQty;
  }

  decrementQty() {
    if (this.selectedQty === 1) {
      this.uiService.warn('Minimum Quantity is selected');
      return;
    }
    this.selectedQty -= 1;
    this.selectedItem.quantity = this.selectedQty;
    this.selectedItem.totalPrice = this.selectedItem.price * this.selectedQty;
  }


  /**
   * MODIFY IMAGES AS ALBUM FOR LIGHTBOX
   */
  private prepareImagesForLightBox() {
    this.albums = this.prescriptionImages.map(m => {
      return {
        src: m,
        caption: '',
        thumb: m
      } as IAlbum;
    });
  }

  /**
   * LIGHT BOX VIEW DIALOG
   */

  openLightBox(index: number): void {
    console.log(index);
    this.lightboxConfig.showZoom = true;
    this.lightboxConfig.showRotate = true;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.enableTransition = true;
    this.lightbox.open(this.albums, index);
  }

  closeLightBox(): void {
    this.lightbox.close();
  }


  /**
   * HTTP REQ HANDLE
   */

  private getOrderDetails() {
    this.spinner.show();
    this.prescriptionOrderService.getOrderDetails(this.orderId)
      .subscribe(res => {
        this.spinner.hide();
        this.order = res.data;

        this.userInfo = this.order?.user;
        // console.log(this.order)
        this.prescriptionImages = this.order?.prescriptionId?.images;
        // console.log(this.order)
        // console.log("images", this.prescriptionImages)
        if (this.order && this.prescriptionImages && this.prescriptionImages.length) {
          this.prepareImagesForLightBox();
        }
      }, error => {
        console.log(error);
      });
  }


  // Cancel Order

  cancelOrderByAdmin() {
    // console.log(this.order?.orderId)
    this.prescriptionOrderService.cancelOrderByAdmin(this.order?.orderId)
      .subscribe(res => {
        if (res) {
          this.uiService.success(res.message)
          this.router.navigate(['/admin/prescription-orders'])
        }
        else {
          this.uiService.warn(res.message)
        }
      })
  }


  //  CONFIRM ORDER



  public confirmPrescriptionOrderByAdmin() {


    if (this.finalProducts.length == 0) {
      this.uiService.warn("Please Add Minimum One Product")
      return;
    }
    else {
      this.spinner.show();


      this.prescriptionOrderService.confirmPrescriptionOrderByAdmin(

        {

          orderId: this.order.orderId,
          orderedItems: this.finalProducts,
          subTotal: this.subTotal,
          shippingFee: this.shippingCharge,
          totalAmount: this.subTotal + this.shippingCharge,
          discount: this.finalDiscount,
          totalAmountWithDiscount: this.finalDiscount > (this.subTotal + this.shippingCharge) ? 0 : (this.subTotal + this.shippingCharge - this.finalDiscount),
          couponId: this.couponData ? this.couponData?._id : null,
          couponValue: this.couponData ? this.finalDiscount : 0,
        }

      )
        .subscribe(res => {
          console.log(res)
          if (res.status) {
            this.spinner.hide();
            this.uiService.success(res.message)
            this.router.navigate(['/admin/prescription-orders'])
          }
          else {
            this.uiService.warn(res.message)
          }
        })
    }


  }

  /**
 * COMPONENT DIALOg
 */

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'Are you sure you want to confirm this order?',
        title: 'Confirm Order'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.confirmPrescriptionOrderByAdmin();
      }
    });
  }

  public openCancelOrderDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'Are you sure you want to cancel this order?',
        title: 'Cancel Order'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.cancelOrderByAdmin();
      }
    });
  }


  // public openUpdateOrderDialog() {
  //   const dialogRef = this.dialog.open(PrescriptionOrderConfirmComponent, {
  //     data: this.order,
  //     panelClass: ['theme-dialog'],
  //     width: '90%',
  //     maxWidth: '850px',
  //     maxHeight: '90vh',
  //     autoFocus: false,
  //     disableClose: false
  //   });
  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     if (dialogResult) {
  //       // if (dialogResult.selectedIds) {
  //       //   this.selectedProductIds = dialogResult.selectedIds;
  //       //   this.dataForm.patchValue({products: dialogResult.selectedIds});
  //       //   this.getSpecificProductsById(this.selectedProductIds);
  //       // }
  //     }
  //   });
  // }


}
