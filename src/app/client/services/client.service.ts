import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/state-client.enum';
import { fakeClient } from './fakeClient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client[];

  constructor() {
    this._collection = fakeClient;
   }

  // Get Collections
  get collection(): Client[] {
    return this._collection;
  }

  // Set Collections
  set collection(col: Client[]) {
    this._collection = col;
  }

  // Get Item by ID

  // Update
  public update(item: Client, state: StateClient) {
    item.state = state;
  }

  // Delete
}
