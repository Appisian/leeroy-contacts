import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = () => ({
  contacts: [
    {
      id: 0,
      firstname: 'Amélie',
      lastname: 'Darouechi',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 1,
      firstname: 'Marnaud',
      lastname: 'NGUNDU',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 2,
      firstname: 'Radja',
      lastname: 'SANKHARE',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 3,
      firstname: 'Gregory',
      lastname: 'MARI',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 4,
      firstname: 'Martin',
      lastname: 'BOIS',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 5,
      firstname: 'Jérémy',
      lastname: 'KIM',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
  ],
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
