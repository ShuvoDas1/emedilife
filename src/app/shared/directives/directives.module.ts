import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLoadErrorDirective} from './image-load-error.directive';
import {OutSideClickDirective} from './out-side-click.directive';



@NgModule({
  declarations: [
    ImageLoadErrorDirective,
    OutSideClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLoadErrorDirective,
    OutSideClickDirective
  ]
})
export class DirectivesModule { }
