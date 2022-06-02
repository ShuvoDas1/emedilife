import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferProductRoutingModule } from './offer-product-routing.module';
import { OfferProductComponent } from './offer-product.component';
import { AddOfferProductComponent } from './add-offer-product/add-offer-product.component';
import {MaterialModule} from '../../../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    OfferProductComponent,
    AddOfferProductComponent
  ],
  imports: [
    CommonModule,
    OfferProductRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class OfferProductModule { }
