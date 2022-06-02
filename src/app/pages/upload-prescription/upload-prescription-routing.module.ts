import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPrescriptionComponent } from './upload-prescription.component';

const routes: Routes = [
  { path: '', component: UploadPrescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadPrescriptionRoutingModule { }
