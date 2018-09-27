import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  public states = Object.values(State);
  public form: FormGroup;
  private init: Prestation = new Prestation();

  @Output() nPresta: EventEmitter<Prestation> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta: [
        this.init.type_presta
      ],
      client: [
        this.init.client
      ],
      nb_jours: [
        this.init.nb_jours
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      taux_tva: [
        this.init.taux_tva
      ],
      state: [
        this.init.state
      ],
    });
  }

  public process(): void {
    this.nPresta.emit(new Prestation(this.form.value));
  }
}
