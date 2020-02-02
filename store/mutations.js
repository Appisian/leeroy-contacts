import Vue from 'vue';

export const setContact = (state, obj) => {
  console.info('mutation ', obj);
  const index = state.contacts.findIndex(
    (item) => Number(item.id) === Number(obj.id),
  );
  Vue.set(state.contacts, index, obj);
};
