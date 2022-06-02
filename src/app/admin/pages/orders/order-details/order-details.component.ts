import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../interfaces/order';
import { OrderStatus } from '../../../../enum/order-status';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../../services/order.service';
import { UiService } from '../../../../services/ui.service';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

import SwiperCore, { Zoom, FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([Zoom, FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string = null;
  order: Order = null;
  prescriptionImages: any;

  albums: IAlbum[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.orderId = param.get('id');
      this.getOrderDetails();
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  private getOrderDetails() {
    this.orderService.getOrderDetails(this.orderId)
      .subscribe(res => {
        this.order = res.data;
        // console.log(this.order)
        this.prescriptionImages = this.order?.prescriptionId?.images;
        console.log(this.prescriptionImages)

        if (this.order && this.order.images && this.order.images.length) {
          this.prepareImagesForLightBox();
        }
      }, error => {
        console.log(error);
      });
  }

  /**
   * MODIFY IMAGES AS ALBUM FOR LIGHTBOX
   */
  private prepareImagesForLightBox() {
    this.albums = this.order.images.map(m => {
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
    this.lightboxConfig.showZoom = true;
    this.lightboxConfig.showRotate = true;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.enableTransition = true;
    this.lightbox.open(this.albums, index);
  }

  closeLightBox(): void {
    this.lightbox.close();
  }


}
