export const updateContact = (context, options = {}) => {
  const { commit } = context;
  commit('setContact', options);
};
