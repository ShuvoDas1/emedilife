import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AreaComponent} from './area.component';
import {AddAreaComponent} from './add-area/add-area.component';

const routes: Routes = [
  {path: '', component: AreaComponent},
  {path: 'add-area', component: AddAreaComponent},
  {path: 'edit-area/:id', component: AddAreaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
