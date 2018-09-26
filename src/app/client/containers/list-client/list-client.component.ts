import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { Row } from '../../../shared/interfaces/row';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  public collection: Client[];
  public listHeaders: string[];
  public faPlusCircle = faPlusCircle;
  public row: Row;

  constructor(
    private clientService: ClientService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.listHeaders = [
      'Nom',
      'Email',
      'Tel',
      'Contact',
      'Etat'
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter un client'
    };
  }

}
