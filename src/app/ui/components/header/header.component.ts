import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'CRM Apps';
  public faBars = faBars;
  public faUser = faUser;
  public open = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.open = !this.open;
  }
}
