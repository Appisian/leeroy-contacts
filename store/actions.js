export const updateContact = (context, options = {}) => {
  const { commit } = context;
  commit('setContact', options);
};

export const addContact = (context, options = {}) => {
  const { commit } = context;
  commit('addContact', options);
};
