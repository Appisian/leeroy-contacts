<template>
  <div :style="bg" class="picture" />
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      default:
        'https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
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
