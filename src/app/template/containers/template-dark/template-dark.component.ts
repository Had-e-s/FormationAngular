import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-dark',
  templateUrl: './template-dark.component.html',
  styleUrls: ['./template-dark.component.scss']
})
export class TemplateDarkComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
