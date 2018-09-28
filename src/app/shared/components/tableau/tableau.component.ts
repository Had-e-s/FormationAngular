import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PrestationService } from '../../../prestation/services/prestation.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  public msg$: Subject<any>;

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.msg$ = this.prestationService.msg$;
  }

}
