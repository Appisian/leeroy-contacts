<template>
  <div class="add-user-panel">
    <div :class="['panel', { open: open }]" />
    <div v-if="open" class="form-wrapper">
      <form @submit="e.preventDefault()">
        <label class="picture-file">
          AJOUTER UNE IMAGE
          <input type="file" />
        </label>
        <label>
          <span>Prénom</span>
          <input v-model="firstname" type="text" />
        </label>
        <label>
          <span>Nom</span>
          <input v-model="lastname" type="text" />
        </label>
        <label>
          <span>Téléphone</span>
          <input v-model="phone" type="tel" />
        </label>
        <label>
          <span>Adresse mail</span>
          <input v-model="mail" type="email" />
        </label>
        <div class="buttons-wrapper">
          <button @click="cancelForm" class="cancel">Annuler</button>
          <button @click="submit" class="add">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
      phone: '',
      mail: '',
    };
  },
  methods: {
    cancelForm(e) {
      e.preventDefault();
      this.$emit('closeUserPanel', null);
    },
    submit(e) {
      e.preventDefault();
      const obj = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        mail: this.mail,
      };
      this.$store.dispatch('addContact', obj);
      this.$emit('closeUserPanel', null);
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
    transition transform 500ms ease-in-out;
    &.open
      transform scale(90)

  .form-wrapper
    position absolute
    z-index 1
    width 100%
    height 100%
    top 0
    left 0
    padding 60px 30px
    box-sizing border-box

    label
      font-family $font-family-main
      letter-spacing 0
      text-transform uppercase
      font-size $font-size-small
      font-weight 400
      color $color-tertiary
      display block
      box-sizing border-box

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
          background-color #2ecc71
          box-shadow 0 3px 0 #27ae60

        &:hover
          box-shadow none
          transform translateY(3px)
</style>
