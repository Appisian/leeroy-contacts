<template>
  <div class="contacts-list">
    <ContactsListItem
      v-for="(contact, index) in items"
      :contact="contact"
      :key="index"
    />
  </div>
</template>

<script>
import ContactsListItem from '@/components/items/ContactsListItem.vue';

export default {
  components: {
    ContactsListItem,
  },
  computed: {
    contacts() {
      return this.$store.getters.getContacts;
    },
    searchContacts() {
      return this.$store.getters.getSearchContacts;
    },
    inputState() {
      console.info(this.$store.getters.getInputState);
      return this.$store.getters.getInputState;
    },
    items() {
      return this.searchContacts.length > 0 || this.inputState
        ? this.searchContacts
        : this.contacts;
    },
  },
};
</script>

<style lang="stylus" scoped>
.contacts-list
  box-sizing border-box
  overflow auto
</style>
