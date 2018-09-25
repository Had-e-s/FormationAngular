import { NgModule } from '@angular/core';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationRoutingModule { }
