import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateLightComponent } from './containers/template-light/template-light.component';
import { TemplateDarkComponent } from './containers/template-dark/template-dark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateLightComponent, TemplateDarkComponent],
  exports: [TemplateLightComponent, TemplateDarkComponent]
})
export class TemplateModule { }
