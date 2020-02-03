<template>
  <div class="__container">
    <div class="__default">
      <ContactsBlock />
      <nuxt class="__nuxt" />
    </div>
  </div>
</template>

<script>
import ContactsBlock from '@/components/blocks/ContactsBlock.vue';

export default {
  components: {
    ContactsBlock,
  },
};
</script>

<style lang="stylus" scoped>
.__container
  background-color $color-background-primary
  display flex
  justify-content center
  align-items center
  height 100vh

  +desktop()
    padding: 0 20px

  .__default
    background-color white
    box-shadow 0 0 5px rgba(0,0,0,.2)
    display flex
    overflow hidden
    width 100%
    height 100%

    +desktop()
      height 700px
      width 1080px
      border-radius 10px

    .__nuxt
      position absolute
      background-color white
      +desktop()
        flex 1
        background-color none
        position relative
</style>
