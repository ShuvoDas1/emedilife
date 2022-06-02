import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturedProductListComponent} from './featured-product-list.component';

const routes: Routes = [
  {path: ':id', component: FeaturedProductListComponent},

  {path: 'brand/:brandId', component: FeaturedProductListComponent},
  {path: ':categorySlug', component: FeaturedProductListComponent},
  {path: ':categorySlug/:subCategorySlug', component: FeaturedProductListComponent},
  {path: ':categorySlug/:subCategorySlug/:brandSlug', component: FeaturedProductListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedProductListRoutingModule { }
