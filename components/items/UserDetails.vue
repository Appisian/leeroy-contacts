<template>
  <div class="user-details">
    <ul>
      <li>
        <Phone class="icon" />
        <transition name="slide-up" mode="out-in">
          <span :key="phone" v-text="phone" />
        </transition>
      </li>
      <li>
        <At class="icon" />
        <transition name="slide-up" mode="out-in">
          <span :key="mail" v-text="mail" />
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import Phone from '@/components/common/icons/Phone.vue';
import At from '@/components/common/icons/At.vue';

export default {
  components: {
    Phone,
    At,
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  computed: {
    phone() {
      return this.contact.phone;
    },
    mail() {
      return this.contact.mail;
    },
  },
};
</script>

<style lang="stylus" scoped>
.user-details
  display: flex
  justify-content center;
  margin 40px 0

  ul
    list-style none
    padding 0
    li
      color $color-tertiary

      + li
        margin-top 10px
      .icon
        width 20px
        vertical-align middle
        margin-right 10px

      span
        display inline-block
</style>
