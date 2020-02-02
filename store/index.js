import Vuex from "vuex"; //eslint-disable-line
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = () => ({
  contacts: [
    {
      id: 0,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Amélie',
      lastname: 'DAROUECHI',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 1,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Marnaud',
      lastname: 'NGUNDU',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 2,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Radja',
      lastname: 'SANKHARE',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 3,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Gregory',
      lastname: 'MARI',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 4,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Martin',
      lastname: 'BOIS',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
    {
      id: 5,
      picture:
        'https://lh3.googleusercontent.com/-H6PacdskbPehw_P3NQvLvIix3PK3gNC82AZXhpFhYm5PVY26CqyHieUp_jifhmYY-FrcezAVQ=w640-h400-e365',
      firstname: 'Jérémy',
      lastname: 'KIM',
      phone: '+33333333333',
      mail: 'aze@aze.com',
    },
  ],
  searchContacts: [],
  setInputState: false,
});

function createStore() {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
  });
}

export default createStore;
