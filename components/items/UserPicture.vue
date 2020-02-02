<template>
  <div :style="bg" class="picture" />
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
  width 150px
  height @width
  border-radius 50%
  overflow hidden
  background-repeat no-repeat
  background-size cover
  background-position center center
  margin 0 auto
</style>
