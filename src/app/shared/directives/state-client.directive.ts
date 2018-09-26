import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appStateClient]'
})
export class StateClientDirective implements OnChanges {

  @Input() appState: StateClient;
  @HostBinding('class') nomClass: string;
  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: StateClient): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
