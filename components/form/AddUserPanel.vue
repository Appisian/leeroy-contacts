<template>
  <div class="add-user-panel">
    <div :class="['panel', { open: open }]" />
    <transition name="scale-fade" mode="out-in">
      <div v-if="open" class="form-wrapper">
        <form @submit="e.preventDefault()">
          <label :class="['picture-file', { 'has-file': inputFileState }]">
            AJOUTER UNE IMAGE
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
          <label>
            <span>Job</span>
            <input v-model="job" type="text" />
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
            <button @click="submit" :class="['add', { valid: valid }]">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import formValidator from '@/mixins/form-validator.js';

export default {
  mixins: [formValidator],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      job: '',
      phone: '',
      mail: '',
      picture: '',
      inputFileState: false,
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
      this.$emit('closeUserPanel', null);
    },
    submit(e) {
      e.preventDefault();

      if (!this.valid) return;

      const obj = {
        firstname: this.firstname,
        lastname: this.lastname.toUpperCase(),
        phone: this.phone,
        job: this.job,
        mail: this.mail,
        picture: this.picture,
      };
      this.$store.dispatch('addContact', obj);
      this.$emit('closeUserPanel', null);
      this.firstname = this.lastname = this.phone = this.job = this.mail = '';
      this.picture = null;
      this.inputFileState = false;
    },
    async updateImage(e) {
      const file = e.target.files[0];
      e.target.files.length > 0
        ? (this.inputFileState = true)
        : (this.inputFileState = false);

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
.add-user-panel

  .panel
    position absolute
    background-color $color-background-quaternary
    height 20px
    width 20px
    top 40px
    right 40px
    border-radius 50%
    transform-origin center center
    z-index 1
    transform scale(1) rotate(.1deg)
    transition transform 500ms linear;
    &.open
      transform scale(90) rotate(.1deg)

  .form-wrapper
    position fixed
    z-index 1
    width 100%
    height 100%
    top 0
    left 0
    padding 60px 30px
    box-sizing border-box
    overflow auto

    +desktop()
      position absolute

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
        border 1px solid $color-tertiary
        border-radius 3px
        display block
        color $color-tertiary
        margin 0 auto 60px

        &.has-file
          color $color-secondary
          background-color $color-tertiary


        &:hover
          color $color-secondary
          background-color $color-tertiary

        input
          visibility hidden

      + label
        margin-top 30px

      input[type="text"], input[type="email"], input[type="tel"]
        background-color $color-background-quaternary
        border none
        height 30px
        font-size $font-size-basic
        width 100%
        margin 0
        color $color-secondary
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

        &.add
          opacity .2
          background-color #2ecc71
          box-shadow 0 3px 0 #27ae60
          &.valid
            opacity 1

        &:hover
          box-shadow none
          transform translateY(3px)
</style>
