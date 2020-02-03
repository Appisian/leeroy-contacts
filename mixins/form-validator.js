export default {
  methods: {
    isMail(string) {
      const regex = new RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, //eslint-disable-line
      );
      return regex.test(string);
    },
    isName(string) {
      const regex = new RegExp(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      );
      return regex.test(string);
    },
    isPhone(string) {
      const regex = new RegExp(
        /^\d+$/, //eslint-disable-line
      );
      return regex.test(string);
    },
  },
};
