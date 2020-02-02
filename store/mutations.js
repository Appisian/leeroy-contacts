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
