import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-light',
  templateUrl: './template-light.component.html',
  styleUrls: ['./template-light.component.scss']
})
export class TemplateLightComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
