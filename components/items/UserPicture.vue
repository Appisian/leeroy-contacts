<template>
  <transition name="fade" mode="out-in">
    <div :style="bg" :key="picture" class="picture" />
  </transition>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
  },
  computed: {
    bg() {
      return {
        'background-image': `url(${this.picture})`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.picture
  min-height 150px
  width 150px
  height @width
  border-radius 50%
  overflow hidden
  background-repeat no-repeat
  background-size cover
  background-position center center
  margin 0 auto
</style>
