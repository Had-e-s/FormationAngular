import { NgModule } from '@angular/core';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

import { RouterModule, Routes } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
  { path: 'add', component: AddPrestationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationRoutingModule { }
