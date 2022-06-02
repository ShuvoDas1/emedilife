import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitTypesComponent} from './unit-types.component';
import {AddNewUnitComponent} from './add-new-unit/add-new-unit.component';

const routes: Routes = [
  {path: '', component: UnitTypesComponent},
  {path: 'add-new-unit', component: AddNewUnitComponent},
  {path: 'edit-unit/:id', component: AddNewUnitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitTypesRoutingModule {
}
