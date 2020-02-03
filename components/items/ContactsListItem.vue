<template>
  <nuxt-link :to="route" :class="['contact', { active: active }]">
    <transition name="fade" mode="out-in">
      <div :key="contact.picture" :style="bg" class="pic" />
    </transition>
    <transition name="slide-right" mode="out-in">
      <div :key="fullname" class="info">
        <span v-text="fullname" />
      </div>
    </transition>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullname() {
      return `${this.contact.firstname} ${this.contact.lastname}`;
    },
    route() {
      return {
        path: `/user/${this.contact.id}`,
      };
    },
    bg() {
      return {
        'background-image': `url(${this.contact.picture})`,
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

  &.active {
    background-color $color-background-tertiary
  }

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
    min-width 40px
    margin-right 30px
    background-size cover
    background-position center center

  .info
    span
      font-size $font-size-basic
      color $color-secondary
      width 170px
      white-space nowrap
      text-overflow ellipsis
      display block
      overflow hidden

      +desktop()
        width 200px
</style>
