import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-presta',
  templateUrl: './presta.component.html',
  styleUrls: ['./presta.component.scss']
})
export class PrestaComponent implements OnInit {

  public states = Object.values(State);
  @Input() item: Prestation;
  constructor(
    private prestationService: PrestationService
  ) {

   }

  ngOnInit() {
  }

  public changeState(e) {
    const state = e.target.value;
    this.prestationService.update(this.item, state);
  }
}
