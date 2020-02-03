<template>
  <div>
    <div class="identity">
      <transition name="slide-up" mode="out-in">
        <h1 :key="fullname" v-text="fullname" />
      </transition>
      <transition name="slide-up" mode="out-in">
        <h2 :key="job" v-text="job" />
      </transition>
    </div>
    <UserButtons :phone="contact.phone" :mail="contact.mail" />
    <UserDetails :contact="contact" />
  </div>
</template>

<script>
import UserButtons from '@/components/items/UserButtons.vue';
import UserDetails from '@/components/items/UserDetails.vue';

export default {
  components: {
    UserButtons,
    UserDetails,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullname() {
      return `${this.contact.firstname} ${this.contact.lastname}`;
    },
    job() {
      return this.contact.job;
    },
  },
};
</script>

<style lang="stylus" scoped>
.identity
  margin 30px 0
  text-align center
  padding 0 20px

  +desktop()
    padding 0

  h1
    font-size $font-size-medium
    color $color-primary
    margin 0 auto
    word-break break-all

    +desktop()
      width 500px

  h2
    font-size $font-size-xx-basic
    color $color-tertiary
    font-weight 300
    font-style italic
    margin 10px 0 0
</style>
