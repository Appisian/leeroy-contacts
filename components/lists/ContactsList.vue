<template>
  <div class="contacts-list">
    <transition-group tag="div" name="list">
      <ContactsListItem
        v-for="contact in items"
        :active="Number(currentIndex) === Number(contact.id)"
        :contact="contact"
        :key="contact.id"
      />
    </transition-group>
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
    currentIndex() {
      return this.$route.params.id;
    },
    searchContacts() {
      return this.$store.getters.getSearchContacts;
    },
    inputState() {
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
