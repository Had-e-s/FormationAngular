import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  public prest: Prestation;
  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.data);

    // this.route.data.subscribe();

    // this.prestationService.collection$.subscribe((data) => {
    //   this.route.data.value;
    //         });

    this.activatedRoute.data
    .subscribe((data: { prest: Prestation }) => {
      this.prest = data.prest;
    });

    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     console.log(params.get('id'));
    //     // params.get('id');
    //     return params.get('id');
    //   })
    // ).subscribe();
  }


}
