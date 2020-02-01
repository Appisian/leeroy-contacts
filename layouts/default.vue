<template>
  <div class="__container">
    <div class="__default">
      <MainHeader />
      <div class="__body">
        <ContactsBlock />
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsBlock from '@/components/blocks/ContactsBlock.vue';
import MainHeader from '@/components/common/MainHeader.vue';

export default {
  components: {
    ContactsBlock,
    MainHeader,
  },
};
</script>

<style lang="stylus" scoped>
.__container {
  background-color: $color-background-primary;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .__default {
    width: 1080px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;

    .__body {
      display: flex;
      height: 700px;
    }
  }
}
</style>
