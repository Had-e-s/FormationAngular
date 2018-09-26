import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../interfaces/row';

@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.scss']
})
export class AddLineComponent implements OnInit {

  @Input() addRow: Row;
  constructor() { }

  ngOnInit() {
  }

}
