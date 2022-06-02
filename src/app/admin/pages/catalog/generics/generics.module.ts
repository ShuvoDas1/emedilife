import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenericsRoutingModule} from './generics-routing.module';
import {GenericsComponent} from './generics.component';
import {AddNewGenericComponent} from './add-new-generic/add-new-generic.component';
import {MaterialModule} from '../../../../material/material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    GenericsComponent,
    AddNewGenericComponent
  ],
  imports: [
    CommonModule,
    GenericsRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ]
})
export class GenericsModule {
}
