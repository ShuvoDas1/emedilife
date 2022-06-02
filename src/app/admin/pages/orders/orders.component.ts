import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderStatus } from '../../../enum/order-status';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { ConfirmDialogComponent } from '../../../shared/components/ui/confirm-dialog/confirm-dialog.component';
import { Subscription } from 'rxjs';
import { Order, OrderItem } from '../../../interfaces/order';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pagination } from '../../../interfaces/pagination';
import { FormControl, FormGroup } from '@angular/forms';
import { UiService } from '../../../services/ui.service';
import { UtilsService } from '../../../services/utils.service';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import { ReloadService } from '../../../services/reload.service';
import * as XLSX from 'xlsx';

export interface OrderFilter {
  deliveryStatus?: number;
  checkoutDate?: any;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {


  private subAcRoute: Subscription;

  public orderEnum = OrderStatus;

  orders: Order[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 50;
  totalProductsStore = 0;

  orderStatus: any[] = [
    { value: null, viewValue: 'None' },
    { value: OrderStatus.PENDING, viewValue: 'Pending' },
    { value: OrderStatus.CONFIRM, viewValue: 'Confirm' },
    { value: OrderStatus.PROCESSING, viewValue: 'Processing' },
    { value: OrderStatus.SHIPPING, viewValue: 'Shipping' },
    { value: OrderStatus.DELIVERED, viewValue: 'Delivered' },
    { value: OrderStatus.CANCEL, viewValue: 'Cancel' },
    { value: OrderStatus.REFUND, viewValue: 'Refund' }
  ];

  // Filter Date Range
  startDate?: string;
  endDate?: string;

  // Form Group
  dataFormRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  // Data Filtering
  isFiltering = false;

  // Max & Min Data
  today = new Date();
  // QUERY
  filterQuery: OrderFilter = null;

  @ViewChild('matSelectFilter') matSelectFilter: MatSelect;

  // DOWNLOADABLE
  dataTypeFormat = 'exel';

  constructor(
    private dialog: MatDialog,
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private uiService: UiService,
    private utilsService: UtilsService,
    private reloadService: ReloadService,
  ) {
  }

  ngOnInit(): void {
    this.reloadService.refreshOrder$
      .subscribe(() => {
        this.getAllOrdersByAdmin();
      });
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getAllOrdersByAdmin();
    });
  }

  private getAllOrdersByAdmin() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    this.orderService.getAllOrdersByAdmin(pagination, null, this.filterQuery)
      .subscribe(res => {
        this.orders = res.data;
        // console.log(this.orders)
        this.totalProducts = res.count;
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
    this.router.navigate([], { queryParams: { page: event } });
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

  /**
   * HTTP REQ
   */

  public deleteOrderByAdmin(id: string) {
    this.orderService.deleteOrderByAdmin(id)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }

  /**
   * OPEN COMPONENT DIALOG
   */

  public openUpdateOrderDialog(order?: Order) {
    const dialogRef = this.dialog.open(UpdateOrderStatusComponent, {
      data: order,
      panelClass: ['theme-dialog'],
      // width: '100%',
      // minHeight: '60%',
      autoFocus: false,
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        // if (dialogResult.selectedIds) {
        //   this.selectedProductIds = dialogResult.selectedIds;
        //   this.dataForm.patchValue({products: dialogResult.selectedIds});
        //   this.getSpecificProductsById(this.selectedProductIds);
        // }
      }
    });
  }

  /**
   * ON FILTER CHANGE
   */
  onFilterSelectChange(event: MatSelectChange) {
    if (event.value) {
      if (this.filterQuery && this.filterQuery.deliveryStatus) {
        this.filterQuery.deliveryStatus = event.value;
      } else if (this.filterQuery) {
        this.filterQuery = { ...this.filterQuery, ...{ deliveryStatus: event.value } };
      } else {
        this.filterQuery = { deliveryStatus: event.value };
      }
      console.log('On Type Filter');
      console.log(this.filterQuery);
      this.getAllOrdersByAdmin();
    } else {
      delete this.filterQuery.deliveryStatus;
      this.getAllOrdersByAdmin();

    }
  }

  public openConfirmDialog(data?: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want delete this category?'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        console.log('Data should be deleted');
        // TODO DELETE PROCESS HANDLE HERE
      }
    });
  }


  /**
   * FILTER DATA
   */

  onFilterData() {
    if (
      this.dataFormRange.controls.start.hasError('matStartDateInvalid') ||
      !this.dataFormRange.value.start
    ) {
      this.uiService.warn('Invalid start date');
      return;
    }

    if (
      this.dataFormRange.controls.end.hasError('matEndDateInvalid') ||
      !this.dataFormRange.value.end
    ) {
      this.uiService.warn('Invalid end date');
      return;
    }
    this.isFiltering = true;
    this.startDate = this.utilsService.getDateString(this.dataFormRange.value.start);
    this.endDate = this.utilsService.getDateString(this.dataFormRange.value.end);


    // this.getAllReports();

    if (this.isFiltering) {

      if (this.filterQuery && this.filterQuery.checkoutDate) {
        this.filterQuery.checkoutDate = { $gte: this.startDate, $lte: this.endDate };
      } else if (this.filterQuery) {
        this.filterQuery = { ...this.filterQuery, ...{ checkoutDate: { $gte: this.startDate, $lte: this.endDate } } };
      } else {
        this.filterQuery = { checkoutDate: { $gte: this.startDate, $lte: this.endDate } };
      }

      this.getAllOrdersByAdmin();

      console.log('On date Filter');
      console.log(this.filterQuery);

      // this.filterQuery = {checkoutDate: { $gte: this.startDate, $lte: this.endDate }}

      // const date = this.utilsService.getStartEndDate(new Date(), true);
      // this.startDate = date.firstDay as string;
      // this.endDate = this.utilsService.getDateString(new Date());
    }

  }

  /**
   * CLEAR FILTERING
   */
  clearFiltering() {
    this.isFiltering = false;
    this.dataFormRange.reset();
    this.filterQuery = null;
    this.matSelectFilter.value = null;
    this.getAllOrdersByAdmin();
  }

  exportDataToFile() {
    this.exportToExcel();
  }

  /**
   * EXPORTS TO EXCEL
   */
  private getProductInfoAsString(items: OrderItem[]) {
    const itemsStrArr = items.map(m => {
      // @ts-ignore
      return `${m.product.productName} - ${this.utilsService.slugToNormal(m.product.categorySlug)} - ${this.utilsService.slugToNormal(m.product.subCategorySlug)} - ${this.utilsService.slugToNormal(m.product.brandSlug)} (QTY #${m.quantity})`;
    });
    return itemsStrArr.join();
  }


  exportToExcel() {
    this.spinner.show();
    this.orderService.getAllOrdersByAdminNoPaginate()
      .subscribe(res => {
        const allData = res.data as Order[];
        const mData = allData.map(m => {
          return {
            orderId: m.orderId,
            checkoutDate: this.utilsService.getDateString(m.checkoutDate),
            deliveryDate: this.utilsService.getDateString(m.deliveryDate),
            subTotal: m.subTotal,
            discount: m.discount,
            shippingFee: m.shippingFee,
            totalAmount: m.totalAmount,
            totalAmountWithDiscount: m.totalAmountWithDiscount,
            paymentStatus: m.paymentStatus,
            paymentMethod: m.paymentStatus,
            name: m.name,
            phoneNo: m.phoneNo,
            email: m.email,
            alternativePhoneNo: m.alternativePhoneNo ? m.alternativePhoneNo : 'N/A',
            city: m.city ? m.city : 'N/A',
            area: m.area ? m.area : 'N/A',
            postCode: m.postCode ? m.postCode : 'N/A',
            shippingAddress: m.shippingAddress,
            couponId: m.couponId,
            couponValue: m.couponValue,
            orderNotes: m.orderNotes,
            products: this.getProductInfoAsString(m.orderedItems)
          };
        });

        const date = this.utilsService.getDateString(new Date());
        // EXPORT XLSX
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Orders');
        XLSX.writeFile(wb, `Orders_Export_${date}.xlsx`);
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * ON DESTROY
   */
  ngOnDestroy() {

    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }
}
