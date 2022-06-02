import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { PrescriptionOrderService } from './../../../../services/prescription-order.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PrescriptionOrder } from './../../../../interfaces/prescription-order';


@Component({
  selector: 'app-prescription-order-details',
  templateUrl: './prescription-order-details.component.html',
  styleUrls: ['./prescription-order-details.component.scss']
})
export class PrescriptionOrderDetailsComponent implements OnInit, AfterViewInit {


  order: PrescriptionOrder = null;


  constructor(
    private prescriptionOrderService: PrescriptionOrderService,
    private spinner: NgxSpinnerService,
  ) {



  }

  ngOnInit(): void {



  }

  ngAfterViewInit(): void {



  }

  // private getOrderDetails() {
  //   this.spinner.show();
  //   this.prescriptionOrderService.getOrderDetails(this.orderId)
  //     .subscribe(res => {
  //       this.spinner.hide();
  //       this.order = res.data;

  //       this.userInfo = this.order?.user;
  //       console.log(this.order)
  //       this.prescriptionImages = this.order?.prescriptionId?.images;
  //       // console.log(this.order)
  //       console.log("images", this.prescriptionImages)
  //       if (this.order && this.prescriptionImages && this.prescriptionImages.length) {
  //         this.prepareImagesForLightBox();
  //       }
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  /**
   * APPLY COUPON
   */









}
