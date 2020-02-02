export default {
  methods: {
    isMail(string) {
      const regex = new RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, //eslint-disable-line
      );
      console.info('mail', regex.test(string));
      return regex.test(string);
    },
    isName(string) {
      const regex = new RegExp(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      );
      console.info('name', regex.test(string));
      return regex.test(string);
    },
    isPhone(string) {
      const regex = new RegExp(/^\+\d+$/);
      console.info('phone', regex.test(string));
      return regex.test(string);
    },
  },
};
