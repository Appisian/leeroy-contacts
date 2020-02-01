<template>
  <div class="__user">
    <UserPicture />
    <UserDescription :contact="contact" />
    <EditButton @editUser="editUser" />
    <EditUserForm v-if="!triggerForm" />
  </div>
</template>

<script>
import UserPicture from '@/components/items/UserPicture.vue';
import UserDescription from '@/components/items/UserDescription.vue';
import EditButton from '@/components/buttons/EditButton.vue';
import EditUserForm from '@/components/form/EditUserForm.vue';

export default {
  components: {
    UserPicture,
    UserDescription,
    EditButton,
    EditUserForm,
  },
  asyncData({ store, params, error }) {
    const id = params.id;
    const contact = store.state.contacts.filter(
      (item) => Number(item.id) === Number(id),
    )[0];
    if (contact.length === 0) {
      return error({ statusCode: 404, message: 'Page not found' });
    }
    return {
      contact,
      id,
      triggerForm: false,
    };
  },
  methods: {
    editUser() {
      this.triggerForm = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.__user
  width 100%
  position relative
  padding 50px 30px
</style>
