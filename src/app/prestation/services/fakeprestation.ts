import { State } from '../../shared/enums/state.enum';
import { Prestation } from '../../shared/models/prestation';

export const fakePrestation: Prestation[] = [
 new Prestation( {
   id: 'a1',
   type_presta: 'Formation',
   client: 'Modis',
   nb_jours: 2,
   tjm_ht: 500,
   state: State.OPTION
 }),
 new Prestation({
  id: 'b1',
  type_presta: 'Coaching',
  client: 'Edugroup',
  nb_jours: 3,
  tjm_ht: 550
})
];
