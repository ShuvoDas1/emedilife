import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDataService } from '../../../services/user-data.service';
import { ReloadService } from '../../../services/reload.service';
import { Cart } from '../../../interfaces/cart';
import { UiService } from '../../../services/ui.service';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../interfaces/product';
import { Order, OrderItem } from '../../../interfaces/order';
import { UtilsService } from '../../../services/utils.service';
import { SslInit } from '../../../interfaces/ssl-init';
import { OrderService } from '../../../services/order.service';
import { PaymentSslService } from '../../../services/payment-ssl.service';
import { SslInitResponse } from '../../../interfaces/ssl-init-response';
import { ConfirmOrderDialogComponent } from './confirm-order-dialog/confirm-order-dialog.component';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { User } from '../../../interfaces/user';
import { ShippingCharge } from '../../../interfaces/shippingcharge';
import { StorageService } from '../../../services/storage.service';
import { CouponService } from '../../../services/coupon.service';
import { ShippingChargeService } from '../../../services/shipping-charge';
import { Coupon } from '../../../interfaces/coupon';
import { BulkSmsService } from 'src/app/services/bulk-sms.service';
import { CartPricePipe } from '../../../shared/pipes/cart-price.pipe';
import { CartUnitTypePipe } from '../../../shared/pipes/cart-unit-type.pipe';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DATABASE_KEY } from '../../../core/utils/global-variable';
import { CouponType } from '../../../enum/coupon-type';
import { CouponDiscountType } from '../../../enum/coupon-discount-type';
import { OrderStatus } from '../../../enum/order-status';
import { MatSelectChange } from '@angular/material/select';
import { District } from '../../../interfaces/district';
import { DistrictService } from '../../../services/district.service';
import { Area } from '../../../interfaces/area';
import { AreaService } from '../../../services/area.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [CartPricePipe, CartUnitTypePipe]
})
export class CheckoutComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;


  // DATA
  carts: Cart[] = [];
  shippingChargeData: ShippingCharge = null;
  user: User = null;
  districts: District[] = [];
  areas: Area[] = [];

  // Coupon
  couponText: string;
  couponData: Coupon = null;
  finalDiscount = 0;

  // Final Shipping Charge
  shippingCharge = 0;


  // Store Order Data
  order: Order = null;

  // PAYMENT DATA
  currency = 'BDT';
  shippingMethod: 'Courier';
  shippingType = 'Courier';
  productsNameStr: string = null;
  productsCatStr: string = null;

  // PAYMENT TYPES
  paymentTypes: any[] = [
    { value: 'cash_on_delivery', name: "Cash On Delivery", viewValue: 'Cash on Delivery', image: '/assets/images/payments/cash-on-delivery.png' },
    { value: 'online_payment', name: "Online Payment", disable: true, viewValue: 'Online Payment or Bkash, Nagad or Rocket', image: '/assets/images/payments/debit-card.png' }
  ];


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private userDataService: UserDataService,
    private reloadService: ReloadService,
    private uiService: UiService,
    private cartService: CartService,
    private cartPricePipe: CartPricePipe,
    private cartUnitTypePipe: CartUnitTypePipe,
    private utilsService: UtilsService,
    private orderService: OrderService,
    private storageService: StorageService,
    private couponService: CouponService,
    private paymentSslService: PaymentSslService,
    private shippingService: ShippingChargeService,
    private router: Router,
    private userService: UserService,
    private bulkSmsService: BulkSmsService,
    private districtService: DistrictService,
    private areaService: AreaService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {

    this.reloadService.refreshCart$.subscribe(() => {
      this.getCartsItems();
    });

    this.getLoggedInUserInfo();
    this.getCartsItems();
    this.getShippingCharge();
    this.getAllDistricts();

    this.couponData = this.storageService.storedCouponData;
    if (this.couponData) {
      this.couponText = this.couponData.couponCode;
      this.getCouponCalculation();
    }

    // Order Form
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      phoneNo: [null, Validators.required],
      email: [null, Validators.email],
      district: [null, Validators.required],
      area: [null, Validators.required],
      shippingAddress: [null, Validators.required],
      orderType: ['cash_on_delivery'],
      orderNotes: [null],
    });
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

  /**
   * HTTP REQ HANDLE
   */

  private getShippingCharge() {
    const select = 'deliveryInDhaka deliveryOutsideDhaka -_id';
    this.shippingService.getShippingCharge(select)
      .subscribe(res => {
        this.shippingChargeData = res.data;
        this.getFinalShippingCharge();
      }, error => {
        console.log(error);
      });
  }

  private getAllDistricts() {
    this.districtService.getAllDistricts()
      .subscribe(res => {
        this.districts = res.data;
        this.dataForm.patchValue(
          { district: this.user && this.user.district ? this.user?.district : null }
        );

        if (this.user && this.user?.district) {
          const districtId = this.districts.find(f => f.district === String(this.user.district))._id;
          if (districtId) {
            this.getAllAreaByDistrict({ district: districtId });
          }
        }

      }, error => {
        console.log(error);
      });
  }

  private getAllAreaByDistrict(filter: any) {
    // console.log(filter)
    this.areaService.getAllAreaByDistrict(filter)
      .subscribe(res => {
        this.areas = res.data;
        this.dataForm.patchValue({ area: this.user.area });
      }, error => {
        console.log(error);
      });
  }


  /**
   * SHIPPING CHARGED BASED ON LOCATION
   */

  private getFinalShippingCharge() {
    // console.log(this.dataForm.value.district);
    if (this.dataForm.value.district === 'Dhaka') {
      this.shippingCharge = this.shippingChargeData && this.shippingChargeData.deliveryInDhaka ? this.shippingChargeData.deliveryInDhaka : 0;
    } else {
      this.shippingCharge = this.shippingChargeData && this.shippingChargeData.deliveryOutsideDhaka ? this.shippingChargeData.deliveryOutsideDhaka : 0;

    }
  }

  private checkCoupon() {
    this.couponService.checkCouponForApply(this.couponText)
      .subscribe(res => {
        if (res.success) {
          if (this.cartSubTotal < res.data.couponMinPurchase) {
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

  /**
   * CART DATA
   */
  private getCartsItems() {
    this.cartService.getCartItemList()
      .subscribe(res => {
        this.carts = res.data;
        if (this.carts && this.carts.length > 0) {
          const productNames = this.carts.map(m => {
            const product = m.product as Product;
            return product.productName;
          });
          const productCategories = this.carts.map(m => {
            const product = m.product as Product;
            return product.categorySlug;
          });
          this.productsNameStr = productNames.join();
          this.productsCatStr = productCategories.join();
        } else {
          this.router.navigate(['/']);
        }

      }, error => {
        console.log(error);
      });
  }


  /**
   * CART FUNCTIONALITY
   */
  onDeleteCartItem(cartId: string, product: string, priceId?: string) {
    if (this.userService.getUserStatus()) {
      this.removeCartItem(cartId);
    } else {
      this.cartService.deleteCartItemFromLocalStorage(product, priceId);
      this.reloadService.needRefreshCart$();
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

  getCouponCalculation() {

    if (this.couponData.couponType === CouponType.AMOUNT) {

      if (this.couponData.couponDiscountType === CouponDiscountType.ORDERDISCOUNT) {
        this.finalDiscount = this.couponData.couponAmount;
      } else if (this.couponData.couponDiscountType === CouponDiscountType.SHIPPINGDISCOUNT) {
        this.finalDiscount = (this.shippingChargeData && this.shippingChargeData.deliveryOutsideDhaka ? this.shippingChargeData.deliveryOutsideDhaka : 0);
      } else {
        this.finalDiscount = this.couponData.couponAmount;
      }
    } else {
      if (this.couponData.couponDiscountType === CouponDiscountType.ORDERDISCOUNT) {
        this.finalDiscount = Math.floor(this.cartSubTotal * (this.couponData.couponAmount / 100));
      } else if (this.couponData.couponDiscountType === CouponDiscountType.SHIPPINGDISCOUNT) {
        this.finalDiscount = (this.shippingChargeData && this.shippingChargeData.deliveryOutsideDhaka ? this.shippingChargeData.deliveryOutsideDhaka : 0);
      } else {
        this.finalDiscount = (this.cartSubTotal + (this.shippingChargeData && this.shippingChargeData.deliveryOutsideDhaka ? this.shippingChargeData.deliveryOutsideDhaka : 0)) * (this.couponData.couponAmount / 100);
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

  get cartSubTotal(): number {
    return this.carts.map(t => {
      return this.cartPricePipe.transform(t, 'priceWithDiscount') as number;
    }).reduce((acc, value) => acc + value, 0);
  }


  /**
   * HTTP REQ HANDLE
   */

  private removeCartItem(cartId: string) {
    this.cartService.removeCartItem(cartId)
      .subscribe(() => {
        this.reloadService.needRefreshCart$();
      }, error => {
        console.log(error);
      });
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


  /**
   * COMPONENT DIALOG VIEW
   */

  openConfirmOrderDialog() {
    const dialogRef = this.dialog.open(ConfirmOrderDialogComponent, {
      data: {
        order: this.order,
        carts: this.carts,
        selectedPaymentType: this.dataForm.value.orderType
      },
      panelClass: ['theme-dialog'],
      width: '90%',
      maxWidth: '1050px',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        if (dialogResult.isConfirm) {
          if (this.dataForm.value.orderType === 'cash_on_delivery') {
            this.saveOrderInformationToMain();
          } else if (this.order.totalAmountWithDiscount < 10) {
            this.order.paymentMethod = 'cash_on_delivery';
            if (this.order.totalAmountWithDiscount === 0) {
              this.order.paymentStatus = 'paid';
            }
            this.saveOrderInformationToMain();
          } else {
            this.saveOrderInformationToTemp();
          }
        }
      }
    });
  }


  /**
   * HTTP REQ HANDLE
   * LOCAL STORAGE HANDLE
   */

  private getLoggedInUserInfo() {
    const select = '-password';
    this.userDataService.getLoggedInUserInfo(select)
      .subscribe(res => {
        this.user = res.data;
        if (this.user) {
          this.dataForm.patchValue(
            { ...this.user, ...{ name: this.user.fullName } }
          );
        }
        console.log(this.user);
      }, error => {
        console.log(error);
      });
  }


  private saveOrderInformationToMain() {
    this.orderService.placeOrder(this.order)
      .subscribe(res => {
        this.couponData = null;
        this.couponText = null;
        this.storageService.storeCouponData(this.couponData);

        // Update User Info
        const updateUserData = {
          fullName: this.dataForm.value.name,
          email: this.dataForm.value.email,
          district: this.dataForm.value.district,
          area: this.dataForm.value.area,
          shippingAddress: this.dataForm.value.shippingAddress
        };
        this.editLoggedInUserData(updateUserData);
        // this.reloadService.needRefreshCart$();
        // Create Message Data
        const finalPhoneNo = this.order.phoneNo;
        const message = `Dear ${this.order.name}, Your order ${res.orderId} has been placed. We will update you once the order is confirmed. Thank you for shopping at www.emedilife.com`;
        this.sentSingleBulkSms(finalPhoneNo, message);
        this.uiService.success(res.message);
        this.router.navigate(['/account/order-list']);

      }, error => {
        console.log(error);
      });
  }

  private saveOrderInformationToTemp() {
    this.orderService.placeTempOrder(this.order)
      .subscribe(res => {
        this.couponData = null;
        this.couponText = null;
        this.storageService.storeCouponData(this.couponData);
        // Update User Info
        const updateUserData = {
          fullName: this.dataForm.value.name,
          email: this.dataForm.value.email,
          district: this.dataForm.value.district,
          area: this.dataForm.value.area,
          shippingAddress: this.dataForm.value.shippingAddress
        };
        this.editLoggedInUserData(updateUserData);
        // console.log(res);
        this.sslInitWithOrder(res.orderId, res._id);
      }, error => {
        console.log(error);
      });

  }


  /**
   * MAIN PLACE ORDER
   */
  placeOrder() {

    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field');
      return;
    }

    // console.log(this.dataForm.value);
    const products = this.carts.map(m => {
      const product = m.product as Product;
      // console.log(product)
      return {
        product: product._id,
        price: this.cartPricePipe.transform(m, 'priceWithDiscount', true) as number,
        discountType: product.discountType,
        discountAmount: product.discountAmount,
        quantity: m.selectedQty,
        unitType: this.cartUnitTypePipe.transform(m),
        orderType: 'regular',
      } as OrderItem;
    });

    this.order = {
      paymentMethod: this.dataForm.value.orderType,
      checkoutDate: new Date(),
      name: this.dataForm.value.name,
      phoneNo: this.dataForm.value.phoneNo,
      email: this.dataForm.value.email ? this.dataForm.value.email : 'N/A',
      alternativePhoneNo: null,
      area: this.dataForm.value.area,
      district: this.dataForm.value.district,
      shippingAddress: this.dataForm.value.shippingAddress,
      deliveryDate: null,
      deliveryStatus: OrderStatus.PENDING,
      shippingFee: this.shippingCharge,
      subTotal: this.cartSubTotal,
      discount: this.finalDiscount,
      totalAmount: this.cartSubTotal + this.shippingCharge,
      totalAmountWithDiscount: this.finalDiscount > (this.cartSubTotal + this.shippingCharge) ? 0 : (this.cartSubTotal + this.shippingCharge - this.finalDiscount),
      deletedProduct: false,
      refundAmount: 0,
      paymentStatus: 'unpaid',
      hasPreorderItem: false,
      orderTimeline: {
        others: false,
        othersData: null,
        orderPlaced: false,
        orderPlacedDate: new Date(),
        orderProcessing: false,
        orderProcessingDate: null,
        orderPickedByDeliveryMan: false,
        orderPickedByDeliveryManDate: null,
        orderDelivered: false,
        orderDeliveredDate: null
      },
      couponId: this.couponData ? this.couponData?._id : null,
      couponValue: this.couponData ? this.finalDiscount : 0,
      orderedItems: products,
      orderNotes: this.dataForm.value.orderNotes,
      orderType: '0',
      sessionkey: null
    };


    console.log(this.order);

    this.openConfirmOrderDialog();

  }

  private sslInitWithOrder(orderId: string, id: string) {
    const baseHost = this.utilsService.getHostBaseUrl();

    const sslPaymentInit: SslInit = {
      store_id: null,
      store_passwd: null,
      total_amount: this.order.totalAmountWithDiscount,
      currency: this.currency,
      tran_id: orderId,
      success_url: baseHost + '/callback/payment/success',
      fail_url: baseHost + '/callback/payment/fail',
      cancel_url: baseHost + '/callback/payment/cancel',
      ipn_url: environment.sslIpnUrl,
      shipping_method: 'Courier',
      product_name: this.productsNameStr,
      product_category: this.productsCatStr,
      product_profile: 'general',
      cus_name: this.order.name,
      cus_email: this.order.email ? this.order.email : 'N/A',
      cus_add1: this.order.shippingAddress,
      cus_add2: '',
      cus_city: this.order.district ? this.order.district : 'N/A',
      cus_state: '',
      cus_postcode: this.order.postCode ? this.order.postCode : 'N/A',
      cus_country: 'Bangladesh',
      cus_phone: this.order.phoneNo,
      cus_fax: '',
      ship_name: this.order.name,
      ship_add1: this.order.shippingAddress,
      ship_add2: '',
      ship_city: this.order.district ? this.order.district : 'N/A',
      ship_state: '',
      ship_postcode: this.order.postCode ? this.order.postCode : 'N/A',
      ship_country: 'Bangladesh',
      // multi_card_name: '',
      value_a: this.order.orderNotes,
      // value_b: '',
      // value_c: '',
      // value_d: ''
    };

    this.paymentSslService.initSSLPayment(sslPaymentInit)
      .subscribe(res => {
        const sslInitResponse: SslInitResponse = res.data;
        const sessionkey = sslInitResponse.sessionkey;
        this.orderService.updateOrderSessionKey(id, sessionkey)
          .subscribe(res3 => {
            const gatewayPageURL = sslInitResponse.GatewayPageURL;
            // window.open(gatewayPageURL);
            this.document.location.href = gatewayPageURL ? gatewayPageURL : '';
          }, error => {
            this.uiService.wrong('This order could not be processed at this time, please try again.');
          });

      }, error => {
        console.log(error);
      });
  }


  /**
   * BULK SMS
   */
  private sentSingleBulkSms(phoneNo: string, message: string) {
    this.bulkSmsService.sentSingleBulkSms(phoneNo, message)
      .subscribe(res => {
        // console.log(res);
      }, error => {
        console.log(error);
      });
  }

  onDistrictChange(event: MatSelectChange) {
    this.getFinalShippingCharge();
    const districtId = this.districts.find(f => f.district === event.value)._id;
    const filter = { district: districtId };
    this.getAllAreaByDistrict(filter);
  }


  editLoggedInUserData(data: any) {
    this.userDataService.editLoginUserInfo(data)
      .subscribe((res) => {
        this.reloadService.needRefreshUser$();
      }, error => {
        console.log(error);
      });
  }

}
