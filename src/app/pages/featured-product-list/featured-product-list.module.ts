import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedProductListRoutingModule } from './featured-product-list-routing.module';
import { FeaturedProductListComponent } from './featured-product-list.component';
import {ProductCardOneModule} from '../../shared/lazy-component/product-card-one/product-card-one.module';
import {GridCardModule} from '../../shared/lazy-component/grid-card/grid-card.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../shared/shared.module';
import {SwiperModule} from 'swiper/angular';
import {BreadcrumbModule} from '../../shared/lazy-component/breadcrumb/breadcrumb.module';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    FeaturedProductListComponent
  ],
  imports: [
    CommonModule,
    FeaturedProductListRoutingModule,
    ProductCardOneModule,
    GridCardModule,
    NgxPaginationModule,
    MaterialModule,
    SharedModule,
    SwiperModule,
    BreadcrumbModule,
    MatSliderModule
  ]
})
export class FeaturedProductListModule { }
