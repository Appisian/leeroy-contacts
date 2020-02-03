<template>
  <div class="__user">
    <BackButton />
    <UserPicture :picture="contact.picture" />
    <UserDescription :contact="contact" />
    <EditButton @editUser="editUser" />
    <transition name="slide-left">
      <EditUserForm
        v-if="triggerForm"
        :contact="contact"
        @removeUser="removeUser"
        @cancelForm="cancelForm"
        @submitForm="submitForm"
      />
    </transition>
  </div>
</template>

<script>
import UserPicture from '@/components/items/UserPicture.vue';
import UserDescription from '@/components/items/UserDescription.vue';
import EditButton from '@/components/buttons/EditButton.vue';
import BackButton from '@/components/buttons/BackButton.vue';
import EditUserForm from '@/components/form/EditUserForm.vue';

export default {
  components: {
    UserPicture,
    UserDescription,
    EditButton,
    EditUserForm,
    BackButton,
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
  min-height 100%
  padding 50px 30px
  display flex
  flex-direction column
  justify-content center
  z-index 4
  box-sizing border-box

  +desktop()
    height 100%
    min-height auto
    overflow auto
    display block
    position relative
    height auto
</style>
