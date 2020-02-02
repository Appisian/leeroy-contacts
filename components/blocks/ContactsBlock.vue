<template>
  <div class="contacts-block">
    <div class="form">
      <SearchInput />
      <AddButton @toggleUserPanel="toggleUserPanel" :open="addUserPanel" />
    </div>
    <ContactsList />
    <AddUserPanel @closeUserPanel="toggleUserPanel" :open="addUserPanel" />
  </div>
</template>

<script>
import SearchInput from '@/components/form/SearchInput.vue';
import ContactsList from '@/components/lists/ContactsList.vue';
import AddButton from '@/components/buttons/AddButton.vue';
import AddUserPanel from '@/components/form/AddUserPanel.vue';

export default {
  components: {
    SearchInput,
    ContactsList,
    AddButton,
    AddUserPanel,
  },
  data() {
    return {
      addUserPanel: false,
    };
  },
  methods: {
    toggleUserPanel() {
      this.addUserPanel = !this.addUserPanel;
    },
  },
};
</script>

<style lang="stylus" scoped>
.contacts-block
  width 375px
  align-self stretch
  border-radius 10px 0 0 10px
  border-right 1px solid $color-primary
  padding 30px 0 0
  box-sizing border-box
  background-color $color-background-secondary
  position relative
  overflow hidden
  display flex
  flex-direction column

  .form
    display flex
    justify-content space-between
    padding 0 30px
    box-sizing border-box
</style>
