<template>
  <nuxt-link :to="route" class="contact">
    <div class="pic"></div>
    <div class="info">
      <h1 v-text="fullname" />
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
  height 80px
  width 100%
  border-bottom 1px solid $color-primary
  display flex
  align-items center
  position relative
  text-decoration none
  color inherit

  &:after
    content ''
    position absolute
    top 50%
    right 20px
    transform-origin center center
    transform rotate(45deg) translateY(-50%)
    border-top 1px solid $color-fifth
    border-right 1px solid $color-fifth
    height 8px
    width @height

  .pic
    background-color lightblue
    border-radius 50%
    width 40px
    height @width
    margin-right 30px

  .info
    h1
      font-size $font-size-x-basic
      color #34495e

    p
      margin 5px 0 0 0
      color $color-fifth
</style>
