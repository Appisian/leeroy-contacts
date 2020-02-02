<template>
  <div class="search-input">
    <img
      src="@/assets/images/svg/searching-magnifying-glass.svg"
      alt="search"
    />
    <input v-model="search" type="text" placeholder="Rechercher" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      const array = this.$store.getters.getContacts.filter((item) =>
        `${item.firstname.toLowerCase()} ${item.lastname.toLowerCase()}`.includes(
          this.search.toLowerCase(),
        ),
      );

      this.search.length > 0
        ? this.$store.dispatch('setInputState', true)
        : this.$store.dispatch('setInputState', false);
      this.$store.dispatch('setSearchContacts', array);
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-input
  margin: 0 20px 30px 0
  position relative

  img
    width 20px
    height 20px
    position absolute
    left 10px
    top 50%
    transform translateY(-50%)

  input
    width 250px
    height 40px
    box-sizing border-box
    outline: 0
    border-radius 40px
    background-color $color-background-quaternary
    border none
    padding 0 40px
    font-size $font-size-basic
    color $color-primary

    &::placeholder {
      color $color-primary
    }
</style>
