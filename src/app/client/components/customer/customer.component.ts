import { Component, OnInit, Input } from '@angular/core';
import { StateClient } from '../../../shared/enums/state-client.enum';
import { Client } from '../../../shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public states = Object.values(StateClient);
  @Input() item: Client;
  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  public changeState(e) {
    const state = e.target.value;
    this.clientService.update(this.item, state);
  }
}
