import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFeatureBrandsRoutingModule } from './all-feature-brands-routing.module';
import { AllFeatureBrandsComponent } from './all-feature-brands.component';
import {CategoryCardModule} from '../../shared/lazy-component/category-card/category-card.module';
import {SwiperModule} from 'swiper/angular';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AllFeatureBrandsComponent
  ],
  imports: [
    CommonModule,
    AllFeatureBrandsRoutingModule,
    CategoryCardModule,
    SwiperModule,
    PipesModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AllFeatureBrandsModule { }
