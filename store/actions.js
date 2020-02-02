export const updateContact = (context, options = {}) => {
  const { commit } = context;
  commit('setContact', options);
};

export const addContact = (context, options = {}) => {
  const { commit } = context;
  commit('addContact', options);
};

export const removeContact = (context, options = {}) => {
  const { commit } = context;
  commit('removeContact', options);
};
