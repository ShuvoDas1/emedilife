import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrescriptionOrder } from '../../../interfaces/prescription-order';
import { PrescriptionOrderService } from '../../../services/prescription-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pagination } from '../../../interfaces/pagination';
import { Order } from 'src/app/interfaces/order';
import { OrderStatus } from 'src/app/enum/order-status';

@Component({
  selector: 'app-prescription-order',
  templateUrl: './prescription-order.component.html',
  styleUrls: ['./prescription-order.component.scss']
})
export class PrescriptionOrderComponent implements OnInit, OnDestroy, AfterViewInit {


  private subAcRoute: Subscription;
  private subData: Subscription;

  public orderEnum = OrderStatus;

  userOrder: PrescriptionOrder[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 20;
  totalProductsStore = 0;

  constructor(
    private orderService: PrescriptionOrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getOrderListByAdmin();
    });


  }

  ngAfterViewInit(): void {

    // this.getOrderByDeliveryStatus();

  }


  /**
   * NG CLASS
   */
  getDeliveryStatusColor(order: Order) {
    switch (order.deliveryStatus) {

      case this.orderEnum.CANCEL: {
        return 'cancel';
      }
      case this.orderEnum.PROCESSING: {
        return 'processing';
      }
      case this.orderEnum.CONFIRM: {
        return 'confirm';
      }
      case this.orderEnum.DELIVERED: {
        return 'delivered';
      }
      case this.orderEnum.REFUND: {
        return 'refund';
      }
      case this.orderEnum.SHIPPING: {
        return 'shipping';
      }
      default: {
        return 'none';
      }
    }
  }





  private getOrderListByAdmin() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.orderService.getAllOrdersByAdmin(pagination)
      .subscribe(res => {
        console.log("prescription Order:", res.data)
        this.spinner.hide();
        this.userOrder = res.data;
        this.totalProducts = res.count;
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  // NONE = 0,
  // PENDING = 1,
  // CONFIRM = 2,
  // PROCESSING = 3,
  // SHIPPING = 4,
  // DELIVERED = 5,
  // CANCEL = 6,
  // REFUND = 7

  // setRouterOption: any = null;

  // getOrderByDeliveryStatus() {
  //   this.userOrder.filter(order => {
  //     if (order.deliveryStatus == 2) {
  //       this.setRouterOption = "order-details/"
  //       console.log(this.setRouterOption)
  //     }
  //     else if (order.deliveryStatus == 1) {
  //       this.setRouterOption = "get-single-order-by-admin/"
  //     }
  //   })
  // }


  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], { queryParams: { page: event } });
  }

  orderDetailsClick(index: number) {

    var order = this.userOrder[index];
    console.log(order)

    var url = "";
    if (order.deliveryStatus == 1) {
      url = "get-single-order-by-admin/" + order._id
    } else {
      url = "order-details/" + order._id
    }

    this.router.navigate(['admin/prescription-orders/' + url])



  }


  /**
   * ON DESTROY
   */
  ngOnDestroy() {

    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }

    if (this.subData) {
      this.subData.unsubscribe();
    }

  }




}
