import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { QuickViewDialogComponent } from './quick-view-dialog/quick-view-dialog.component';
import { PipesModule } from '../../pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductRatingViewModule } from '../product-rating-view/product-rating-view.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AlternativeProductCardComponent } from './alternative-product-card.component';


@NgModule({
  declarations: [
    AlternativeProductCardComponent,
    QuickViewDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PipesModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    ProductRatingViewModule,
    LazyLoadImageModule,
    SwiperModule
  ],
  exports: [
    AlternativeProductCardComponent,
  ],
})
export class AlternativeProductCardModule { }
