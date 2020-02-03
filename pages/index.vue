<template>
  <div class="container">
    <div class="description">
      <h1>SÉLECTIONNEZ UN CONTACT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
        finibus lorem, eu tincidunt quam. Nulla vel imperdiet sapien. Integer
        rutrum mauris laoreet, imperdiet risus quis, malesuada risus. Proin ut
        fringilla libero. Aliquam ullamcorper magna sit amet eros bibendum, in
        convallis eros ultricies.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  align-items center

  .description

    h1
      color $color-primary
      text-align center
      margin 0 0 20px

    p
      text-align center
      font-size $font-size-basic
      color $color-tertiary
      line-height 25px
      width 400px
      margin 0 auto
</style>
