import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { RouterModule } from '@angular/router';
import { ListClientComponent } from './containers/list-client/list-client.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    RouterModule,
    TemplateModule
  ],
  declarations: [ListClientComponent, CustomerComponent]
})
export class ClientModule { }
