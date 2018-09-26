import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestaComponent } from './components/presta/presta.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    ListPrestationComponent,
    PrestaComponent
  ]
})
export class PrestationModule { }
