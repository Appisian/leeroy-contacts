export const setContact = (state, obj) => {
  const findContact = state.contacts.findIndex(
    (item) => Number(item.id) === Number(obj.id),
  );
  state.contacts[findContact] = obj;
};
