import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { AddLineComponent } from './components/add-line/add-line.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [TotalPipe, TableauComponent, AddLineComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, AddLineComponent, StateDirective]
})
export class SharedModule { }
