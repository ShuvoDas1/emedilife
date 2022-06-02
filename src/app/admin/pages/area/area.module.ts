import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { AddAreaComponent } from './add-area/add-area.component';
import {MaterialModule} from '../../../material/material.module';
import {SharedModule} from '../../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AreaComponent,
    AddAreaComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    MaterialModule,
    SharedModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class AreaModule { }
