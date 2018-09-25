import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestation } from './fakeprestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];

  constructor() {
    this._collection = fakePrestation;
   }

  // Get Collections
  get collection(): Prestation[] {
    return this._collection;
  }

  // Set Collections
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // Get Item by ID

  // Update

  // Delete

}
