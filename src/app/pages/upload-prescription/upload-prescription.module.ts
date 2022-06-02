import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPrescriptionRoutingModule } from './upload-prescription-routing.module';
import { UploadPrescriptionComponent } from './upload-prescription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DigitOnlyModule} from '@uiowa/digit-only';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    UploadPrescriptionComponent
  ],
    imports: [
        CommonModule,
        UploadPrescriptionRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        DigitOnlyModule,
        NgxDropzoneModule,
        NgxSpinnerModule
    ]
})
export class UploadPrescriptionModule { }
