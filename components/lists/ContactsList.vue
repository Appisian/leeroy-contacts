<template>
  <div class="contacts-list">
    <ContactsListItem v-for="(contact, index) in contactsArray" :key="index" />
  </div>
</template>

<script>
import ContactsListItem from '@/components/items/ContactsListItem.vue';

export default {
  components: {
    ContactsListItem,
  },
  data() {
    return {
      contactsArray: [1],
    };
  },
};
</script>

<style lang="stylus" scoped>
.contacts-list {

}
</style>
