import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PrestationService } from './prestation.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolveService implements Resolve<Prestation> {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Prestation> {
    const id = route.paramMap.get('id');
    console.log('Prestation Resolve !');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map((data) => {
        if (data) {
          console.log('return Prestation Resolve !');
          return data;
        } else {
          console.log('return null  Prestation Resolve !');
          this.router.navigate(['/prestation']);
          return null;
        }
      }));

    // return this.prestationService.getPrestation(id);

    // return this.prestationService.getPrestation(id).pipe(
    //   take(1),
    //   mergeMap(data => {
    //     if (data) {
    //       return of(data);
    //     } else { // id not found
    //       this.router.navigate(['/prestation']);
    //       return EMPTY;
    //     }
    //   })
    // );
    // return this.prestationService.getPrestation(id);
  }
}
