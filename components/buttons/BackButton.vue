<template>
  <nuxt-link class="back-button" to="/"></nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.back-button
  width 20px
  height @width
  border-top 2px solid $color-primary
  border-left 2px solid $color-primary
  transform-origin center center
  transform rotate(-45deg)
  display block
  position absolute
  top 20px
  left 20px
  display block

  +desktop()
    display none
</style>
