import { NgModule } from '@angular/core';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

import { RouterModule, Routes } from '@angular/router';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationResolveService } from './services/prestation-resolve.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
  { path: 'add', component: AddPrestationComponent },
  {
    path: 'edit/:id',
    component: EditPrestationComponent,
    resolve: {
      prest: PrestationResolveService
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationRoutingModule { }
