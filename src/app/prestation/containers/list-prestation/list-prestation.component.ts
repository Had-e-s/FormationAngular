import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {
  public collection: Prestation[];
  public states = Object.values(State);
  public title: string;

  constructor(
    private prestationService: PrestationService
  ) {
    this.title = 'List of Prestations';
   }

  ngOnInit() {
    this.collection = this.prestationService.collection;
  }

}
