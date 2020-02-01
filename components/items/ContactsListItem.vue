<template>
  <nuxt-link :to="route" class="contact">
    <div class="pic"></div>
    <div class="info">
      <span v-text="fullname" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullname() {
      return `${this.contact.firstname} ${this.contact.lastname}`;
    },
    route() {
      return {
        name: this.contact.fullname,
        path: `user/${this.contact.id}`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.contact
  height 70px
  width 100%
  display flex
  align-items center
  position relative
  text-decoration none
  color inherit
  transition background-color 300ms ease-out
  padding 0 30px
  box-sizing border-box

  &:hover {
    background-color $color-background-tertiary
  }

  &:after
    content ''
    position absolute
    top 50%
    right 30px
    transform-origin center center
    transform rotate(45deg) translateY(-50%)
    border-top 1px solid $color-fifth
    border-right 1px solid $color-fifth
    height 5px
    width @height

  .pic
    background-color lightblue
    border-radius 50%
    width 40px
    height @width
    margin-right 30px

  .info
    span
      font-size $font-size-basic
      color $color-secondary
</style>
