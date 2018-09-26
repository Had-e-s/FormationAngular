import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {
  public collection: Prestation[];
  public listHeaders: string[];
  public title: string;
  public faPlusCircle = faPlusCircle;
  public row: Row;

  constructor(
    private prestationService: PrestationService
  ) {
    this.title = 'List of Prestations';
   }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.listHeaders = [
      'Type',
      'Client',
      'NB Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'Action'
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };
  }

}
