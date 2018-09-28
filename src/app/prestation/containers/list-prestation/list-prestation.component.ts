import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public listHeaders: string[];
  public title: string;
  public faPlusCircle = faPlusCircle;
  public row: Row;
  // public sub: Subscription;

  constructor(
    private prestationService: PrestationService
  ) {
    this.title = 'List of Prestations';
   }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   this.collection = data;
    // });

    this.listHeaders = [
      'Type',
      'Client',
      'NB Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'Action',
      'Delete'
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };
  }

  // ngOnDestroy(): void {
  //   // this.sub.unsubscribe();
  // }

}
