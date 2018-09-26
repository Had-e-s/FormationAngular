import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './containers/list-client/list-client.component';

const appRoutes: Routes = [
  { path: '', component: ListClientComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ClientRoutingModule { }
