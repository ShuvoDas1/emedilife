import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTypesRoutingModule } from './unit-types-routing.module';
import { UnitTypesComponent } from './unit-types.component';
import { AddNewUnitComponent } from './add-new-unit/add-new-unit.component';
import {MaterialModule} from '../../../../material/material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {DigitOnlyModule} from '@uiowa/digit-only';


@NgModule({
  declarations: [
    UnitTypesComponent,
    AddNewUnitComponent
  ],
  imports: [
    CommonModule,
    UnitTypesRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    DigitOnlyModule
  ]
})
export class UnitTypesModule { }
