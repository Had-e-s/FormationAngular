import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestation } from './fakeprestation';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection: Observable<Prestation[]>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this._collection = this.itemsCollection.valueChanges().pipe(
      map(data => data.map(presta => new Prestation(presta)))
    );

    // this.http.get<Prestation[]>('url_api/prestation');
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

   // add presta
   add(item: Prestation): any {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestation', item);
  }


  update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  // Delete

}
