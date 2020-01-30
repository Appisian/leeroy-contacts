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
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
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
