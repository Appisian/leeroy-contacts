<template>
  <button @click="toggleUserPanel" :class="['button', { open: open }]">
    +
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleUserPanel() {
      this.$emit('toggleUserPanel', null);
    },
  },
};
</script>

<style lang="stylus" scoped>
.button
  width 40px
  height 40px
  min-width 40px
  background-color $color-background-quaternary
  border-radius 50%
  color $color-primary
  line-height 0
  font-size $font-size-x-basic
  text-decoration none
  display flex
  align-items center
  justify-content center
  text-align center
  font-size $font-size-xx-basic
  transition background-color 250ms ease-out
  position relative
  z-index 3

  &:hover
    background-color white


  &.open
    transform rotate(45deg)
    background-color $color-background-tertiary
    color white
</style>
