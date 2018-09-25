import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationRoutingModule } from './prestation-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule
  ],
  declarations: [
    ListPrestationComponent
  ]
})
export class PrestationModule { }
