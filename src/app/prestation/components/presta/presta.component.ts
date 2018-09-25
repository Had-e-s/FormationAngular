import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-presta',
  templateUrl: './presta.component.html',
  styleUrls: ['./presta.component.scss']
})
export class PrestaComponent implements OnInit {

  public states = Object.values(State);
  @Input() item: Prestation;
  constructor() {
    console.log(this.item);
   }

  ngOnInit() {
  }

}
