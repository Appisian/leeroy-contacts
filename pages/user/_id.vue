<template>
  <div class="__user">
    <UserPicture />
    <UserDescription :contact="contact" />
    <EditButton @editUser="editUser" />
    <EditUserForm
      v-if="triggerForm"
      :contact="contact"
      @removeUser="removeUser"
      @cancelForm="cancelForm"
      @submitForm="submitForm"
    />
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
  computed: {
    contact() {
      return this.$store.getters.getContacts[this.index];
    },
  },
  asyncData({ store, params, error }) {
    const id = params.id;
    const index = store.state.contacts.findIndex(
      (item) => Number(item.id) === Number(id),
    );
    if (index === -1) {
      return error({ statusCode: 404, message: 'Page not found' });
    }
    return {
      triggerForm: false,
      index,
      id,
    };
  },
  methods: {
    editUser() {
      this.triggerForm = true;
    },
    cancelForm() {
      this.triggerForm = false;
    },
    submitForm(obj) {
      this.triggerForm = false;
      this.$store.dispatch('updateContact', obj);
    },
    removeUser() {
      this.$store.dispatch('removeContact', this.id);
      this.$router.push('/');
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
