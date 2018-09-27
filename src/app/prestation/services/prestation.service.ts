import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestation } from './fakeprestation';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection: Observable<Prestation[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    // 1ere methode
    this._collection = this.itemsCollection.valueChanges().pipe(
      map(data => data.map(presta => new Prestation(presta)))
    );
    // 2e methode
    // this._collection = this.itemsCollection.valueChanges().pipe(
    //   map((data) => {
    //     const tab = [];
    //     data.forEach((presta) => {
    //       tab.push(new Prestation(presta));
    //     });
    //     return tab;
    //   })
    // );
   }

  // Get Collections
  get collection(): Observable<Prestation[]> {
    return this._collection;
  }

  // Set Collections
  set collection(col: Observable<Prestation[]>) {
    this._collection = col;
  }

  // Get Item by ID

  // Add Item
  public add(item: Prestation): void {
    // this.collection.push(item);
    // this.itemsCollection.add(item);
  }

  // Update
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // Delete

}
