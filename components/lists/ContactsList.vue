<template>
  <div class="contacts-list">
    <ContactsListItem
      v-for="(contact, index) in contacts"
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
  },
  mounted() {
    console.info(this.contacts);
  },
};
</script>

<style lang="stylus" scoped>
.contacts-list {
  box-sizing border-box

}
</style>
