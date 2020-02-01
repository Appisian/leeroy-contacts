<template>
  <div class="contacts-block">
    <SearchInput />
    <ContactsList />
  </div>
</template>

<script>
import SearchInput from '@/components/form/SearchInput.vue';
import ContactsList from '@/components/lists/ContactsList.vue';

export default {
  components: {
    SearchInput,
    ContactsList,
  },
};
</script>

<style lang="stylus" scoped>
.contacts-block
  width 375px
  align-self stretch
  border-radius 10px 0 0 10px
  border-right 1px solid $color-primary
  padding 20px 0 0 20px
  box-sizing border-box
  background-color $color-background-secondary
</style>
