import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {

  public title: string;
  constructor() {
    this.title = 'My prestation : works!';
   }

  ngOnInit() {
  }

}
