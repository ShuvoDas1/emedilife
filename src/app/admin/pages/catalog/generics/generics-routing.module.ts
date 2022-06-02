import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenericsComponent} from './generics.component';
import {AddNewGenericComponent} from './add-new-generic/add-new-generic.component';

const routes: Routes = [
  {path: '', component: GenericsComponent},
  {path: 'add-new-generic', component: AddNewGenericComponent},
  {path: 'edit-generic/:id', component: AddNewGenericComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericsRoutingModule {
}
