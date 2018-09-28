import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = 'Alpha';
  public log$ = new BehaviorSubject('logout');
  constructor() { }

  public login(): void {
    this.log$.next('login');
  }

  public logout(): void {
    this.log$.next('logout');
  }
}
