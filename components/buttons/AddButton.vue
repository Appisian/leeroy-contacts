<template>
  <nuxt-link to="/adduser" class="button">
    +
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.button {
  width 40px
  height 40px
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

  &:hover {
    background-color white

  }
}
</style>
