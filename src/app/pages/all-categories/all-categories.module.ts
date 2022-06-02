import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { AllCategoriesComponent } from './all-categories.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DirectivesModule} from '../../shared/directives/directives.module';


@NgModule({
  declarations: [
    AllCategoriesComponent
  ],
    imports: [
        CommonModule,
        AllCategoriesRoutingModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        DirectivesModule
    ]
})
export class AllCategoriesModule { }
