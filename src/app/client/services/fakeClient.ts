import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/state-client.enum';

export const fakeClient: Client[] = [
  new Client({
    id: 'c1',
    name: 'Bob',
    email: 'bob@gmail.com',
    tel: '01010101',
    contact: 'Eponge',
    state: StateClient.ACTIF
  }),
  new Client({
    id: 'c2',
    name: 'Pikachu',
    email: 'pikachu@gmail.com',
    tel: '02020202',
    contact: 'Eclair',
    state: StateClient.INACTIF
  }),
];

