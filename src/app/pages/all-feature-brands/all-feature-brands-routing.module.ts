import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllFeatureBrandsComponent} from './all-feature-brands.component';

const routes: Routes = [
  {path: '', component: AllFeatureBrandsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFeatureBrandsRoutingModule { }
