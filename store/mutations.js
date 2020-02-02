import Vue from 'vue';

export const setContact = (state, obj) => {
  const index = state.contacts.findIndex(
    (item) => Number(item.id) === Number(obj.id),
  );
  Vue.set(state.contacts, index, obj);
};

export const addContact = (state, obj) => {
  let id = Math.max.apply(
    Math,
    state.contacts.map((contact) => contact.id),
  );
  id += 1;
  obj.id = id;
  state.contacts.push(obj);
};

export const removeContact = (state, id) => {
  const filteredArray = state.contacts.filter(
    (item) => Number(item.id) !== Number(id),
  );

  if (state.searchContacts.length > 0) {
    state.searchContacts = state.contacts.filter(
      (item) => Number(item.id) !== Number(id),
    );
  }

  state.contacts = filteredArray;
};

export const setSearchContacts = (state, obj) => {
  state.searchContacts = obj;
};

export const setInputState = (state, bool) => {
  state.setInputState = bool;
};
