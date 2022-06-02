import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionOrderComponent } from './prescription-order.component';
import { PrescriptionOrderDetailsComponent } from './prescription-order-details/prescription-order-details.component';
import { PrescriptionOrderConfirmComponent } from './prescription-order-confirm/prescription-order-confirm.component';
// import { OrderDetailsComponent } from './../../../pages/user/account/order-details/order-details.component';
import { OrderDetailsComponent } from './../orders/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: PrescriptionOrderComponent },
  { path: 'get-single-order-by-admin/:id', component: PrescriptionOrderConfirmComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],



  exports: [RouterModule]
})
export class PrescriptionOrderRoutingModule { }
