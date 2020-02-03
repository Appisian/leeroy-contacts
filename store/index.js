import Vuex from "vuex"; //eslint-disable-line
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = () => ({
  contacts: [
    {
      id: 0,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Dawn',
      lastname: 'D. BAILEY',
      phone: '0000000000',
      mail: 'DawnDBailey@armyspy.com',
      job: 'Caregiver',
    },
    {
      id: 1,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Brian',
      lastname: 'N. DANIELS',
      phone: '0000000000',
      mail: 'BrianNDaniels@rhyta.com',
      job: 'Corporate office services manager',
    },
    {
      id: 2,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Margarita',
      lastname: 'S. MARTINEZ',
      phone: '0000000000',
      mail: 'MargaritaSMartinez@teleworm.us',
      job: 'Consultant dietitian',
    },
    {
      id: 3,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Roger',
      lastname: 'A. EMBERTON',
      phone: '0000000000',
      mail: 'RogerAEmberton@teleworm.us',
      job: 'Claims appraiser',
    },
    {
      id: 4,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Arienne',
      lastname: 'GIVRY',
      phone: '0000000000',
      mail: 'ArienneGivry@rhyta.com',
      job: 'Electrician',
    },
    {
      id: 5,
      picture:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      firstname: 'Arienne',
      lastname: 'BRIAN',
      phone: '0000000000',
      mail: 'ArienneBrian@teleworm.us',
      job: 'Aircraft electronics specialist',
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
