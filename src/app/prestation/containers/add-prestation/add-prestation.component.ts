import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation): void {
    this.prestationService.add(item);
    // this.prestationService.add(item).subscribe((data) => {
    //   // exploite la reponse du serveur
    // });
    this.router.navigate(['prestation']);
  }

}
