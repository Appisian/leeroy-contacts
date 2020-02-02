<template>
  <div class="user-form">
    <form @submit="e.preventDefault()">
      <label class="picture-file">
        MODIFIER UNE IMAGE
        <input @change="updateImage" type="file" />
      </label>
      <label :class="{ error: !isName(firstname) && firstname.length > 0 }">
        <span>Prénom</span>
        <input v-model="firstname" type="text" />
      </label>
      <label :class="{ error: !isName(lastname) && lastname.length > 0 }">
        <span>Nom</span>
        <input v-model="lastname" type="text" />
      </label>
      <label :class="{ error: !isPhone(phone) && phone.length > 0 }">
        <span>Téléphone</span>
        <input v-model="phone" type="tel" />
      </label>
      <label :class="{ error: !isMail(mail) && mail.length > 0 }">
        <span>Adresse mail</span>
        <input v-model="mail" type="email" />
      </label>
      <div class="buttons-wrapper">
        <button @click="cancelForm" class="cancel">Annuler</button>
        <button @click="submit" :class="['validation', { valid: valid }]">
          Enregistrer
        </button>
      </div>
      <div class="delete-button-wrapper">
        <button @click="removeUser" class="remove">Supprimer</button>
      </div>
    </form>
  </div>
</template>

<script>
import formValidator from '@/mixins/form-validator.js';

export default {
  mixins: [formValidator],
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      firstname: this.contact.firstname,
      lastname: this.contact.lastname,
      phone: this.contact.phone,
      mail: this.contact.mail,
      picture: this.contact.picture,
    };
  },
  computed: {
    valid() {
      return (
        this.isMail(this.mail) &&
        this.isPhone(this.phone) &&
        this.isName(this.firstname) &&
        this.isName(this.lastname)
      );
    },
  },
  methods: {
    cancelForm(e) {
      e.preventDefault();
      this.$emit('cancelForm', null);
    },
    submit(e) {
      e.preventDefault();

      if (!this.valid) return;

      this.$emit('submitForm', {
        id: this.contact.id,
        firstname: this.firstname,
        lastname: this.lastname.toUpperCase(),
        phone: this.phone,
        mail: this.mail,
        picture: this.picture,
      });
    },
    removeUser(e) {
      e.preventDefault();
      this.$emit('removeUser', null);
    },
    async updateImage(e) {
      const file = e.target.files[0];

      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      this.picture = await toBase64(file);
    },
  },
};
</script>

<style lang="stylus" scoped>
.user-form
  background-color $color-background-fifth
  border-radius 0 10px 10px 0
  width 300px
  height 100%
  top 0
  right 0
  position absolute
  z-index 1
  box-sizing border-box
  padding 40px 20px
  overflow auto
  box-shadow -2px 0 5px rgba(0,0,0,.2)

  label
    font-family $font-family-main
    letter-spacing 0
    text-transform uppercase
    font-size $font-size-small
    font-weight 400
    color $color-tertiary
    display block
    box-sizing border-box

    &.error
        color $color-fifth

    &.picture-file
      overflow hidden
      height 40px
      line-height 40px
      width 150px
      text-align center
      border 1px solid $color-background-primary
      border-radius 3px
      display block
      color $color-background-primary
      margin 0 auto 60px

      &:hover
        color $color-secondary
        background-color $color-background-primary

      input
        visibility hidden

    + label
      margin-top 30px

    input[type="text"], input[type="email"], input[type="tel"]
      background-color $color-background-fifth
      border none
      height 30px
      font-size $font-size-basic
      width 100%
      margin 0
      color $color-primary
      border-bottom 1px solid $color-background-primary
      padding 0
      outline 0

  .buttons-wrapper
    margin-top 40px
    display flex
    justify-content space-around

    button
      padding 7px 10px
      border-radius 3px
      color $color-secondary
      transition all 50ms linear


      &.cancel
        background-color $color-fifth
        box-shadow 0 3px 0 #b5382d

      &.validation
        background-color #2ecc71
        box-shadow 0 3px 0 #27ae60
        opacity .2
        &.valid
            opacity 1

      &:hover
        box-shadow none
        transform translateY(3px)

  .delete-button-wrapper
    text-align center
    .remove
      text-decoration underline
      color $color-primary
      margin-top 50px
</style>
