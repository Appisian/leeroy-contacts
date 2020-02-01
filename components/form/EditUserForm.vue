<template>
  <div class="user-form">
    <form @submit="e.preventDefault()">
      <label class="picture-file">
        MODIFIER UNE IMAGE
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
        <button @click="submit" class="validation">Enregistrer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: this.contact.id,
      firstname: this.contact.firstname,
      lastname: this.contact.lastname,
      phone: this.contact.phone,
      mail: this.contact.mail,
    };
  },
  methods: {
    cancelForm(e) {
      e.preventDefault();
      this.$emit('cancelForm', null);
    },
    submit(e) {
      e.preventDefault();
      this.$store.dispatch('updateContact', {
        id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        mail: this.mail,
      });
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

      &:hover
        box-shadow none
        transform translateY(3px)
</style>
