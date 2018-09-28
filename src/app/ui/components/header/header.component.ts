import { Component, OnInit } from '@angular/core';
import { faBars, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'CRM Apps';
  public faBars = faBars;
  public faUser = faUser;
  public faSignInAlt = faSignInAlt;
  public faSignOutAlt = faSignOutAlt;
  public open = true;
  public user: string;
  public log$: BehaviorSubject<string>;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.log$ = this.loginService.log$;
    this.user = this.loginService.user;
  }

  public toggle() {
    this.open = !this.open;
  }

  public login(): void {
    this.loginService.login();
  }

  public logout(): void {
    this.loginService.logout();
  }
}
