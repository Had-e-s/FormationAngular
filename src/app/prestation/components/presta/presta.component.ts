import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { database } from 'firebase';

@Component({
  selector: 'app-presta',
  templateUrl: './presta.component.html',
  styleUrls: ['./presta.component.scss']
})
export class PrestaComponent implements OnInit {

  public states = Object.values(State);
  public faTrashAlt = faTrashAlt;
  @Input() item: Prestation;
  constructor(
    private prestationService: PrestationService
  ) {

   }

  ngOnInit() {
  }

  public changeState(e) {
    const state = e.target.value;
    this.prestationService.update(this.item, state).then((data) => {
      this.item.state = state;
      // this.prestationService.msg$.next('Prestation ' + state + ' !');
      this.prestationService.msg$.next(`Prestation ${state}`);
    });
  }

  public delete() {
    this.prestationService.delete(this.item).then((data) => {
      this.prestationService.msg$.next('Prestation Supprimée !');
    });
  }
}
