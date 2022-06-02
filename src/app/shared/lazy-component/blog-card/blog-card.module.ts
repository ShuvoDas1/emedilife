import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports:[
    BlogCardComponent
  ]
})
export class BlogCardModule { }
