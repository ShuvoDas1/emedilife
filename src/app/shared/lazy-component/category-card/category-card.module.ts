import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card.component';
import {RouterModule} from '@angular/router';
import {DirectivesModule} from '../../directives/directives.module';



@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  exports: [
    CategoryCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule
    ]
})
export class CategoryCardModule { }
