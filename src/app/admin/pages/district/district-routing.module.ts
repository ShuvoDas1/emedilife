import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DistrictComponent} from './district.component';
import {AddDistrictComponent} from './add-district/add-district.component';

const routes: Routes = [
  {path: '', component: DistrictComponent},
  {path: 'add-district', component: AddDistrictComponent},
  {path: 'edit-district/:id', component: AddDistrictComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
