<template>
  <div class="search-input">
    <img
      src="@/assets/images/svg/searching-magnifying-glass.svg"
      alt="search"
    />
    <input type="text" placeholder="Rechercher" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.search-input
  margin: 0 20px 30px 0;
  position relative

  img
    width 20px
    height 20px
    position absolute
    left 10px
    top 50%
    transform translateY(-50%)

  input
    width 100%
    height 40px
    box-sizing border-box
    outline: 0
    border-radius 5px
    border: 1px solid $color-primary
    padding 0 40px
</style>
