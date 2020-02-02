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

  .__default
    width 1080px
    background-color white
    border-radius 10px
    box-shadow 0 0 5px rgba(0,0,0,.2)
    height 700px
    display flex

    .__nuxt
      flex 1
</style>
