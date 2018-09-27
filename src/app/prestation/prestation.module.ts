import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestaComponent } from './components/presta/presta.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';


@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    RouterModule,
    TemplateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListPrestationComponent,
    PrestaComponent,
    AddPrestationComponent,
    EditPrestationComponent,
    FormComponent,
    FormReactiveComponent
  ]
})
export class PrestationModule { }
