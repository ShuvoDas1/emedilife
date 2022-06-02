import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionOrderRoutingModule } from './prescription-order-routing.module';
import { PrescriptionOrderComponent } from './prescription-order.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../../../material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LightboxModule } from 'ngx-lightbox';
import { PrescriptionOrderDetailsComponent } from './prescription-order-details/prescription-order-details.component';
import { PrescriptionOrderConfirmComponent } from './prescription-order-confirm/prescription-order-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { SwiperModule } from 'swiper/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgxImageZoomModule } from "ngx-image-zoom";
// import { OrderDetailsComponent } from './../orders/order-details/order-details.component';



@NgModule({
  declarations: [
    PrescriptionOrderComponent,
    PrescriptionOrderDetailsComponent,
    PrescriptionOrderConfirmComponent,
    // OrderDetailsComponent

  ],
  imports: [


    CommonModule,
    PrescriptionOrderRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    NgxSpinnerModule,
    LightboxModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DigitOnlyModule,
    SwiperModule,
    MatAutocompleteModule,
    FormsModule,
    PipesModule,
    NgxImageZoomModule
  ]
})
export class PrescriptionOrderModule { }
