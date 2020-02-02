<template>
  <div class="cta-wrapper">
    <CallingButton :phone="phone" />
    <MailButton :mail="mail" />
  </div>
</template>

<script>
import CallingButton from '@/components/buttons/CallingButton.vue';
import MailButton from '@/components/buttons/MailButton.vue';

export default {
  components: {
    CallingButton,
    MailButton,
  },
  props: {
    phone: {
      type: String,
      default: '+3300000000',
    },
    mail: {
      type: String,
      default: 'xxxx@xxxx.xx',
    },
  },
};
</script>

<style lang="stylus" scoped>
.cta-wrapper
  display flex
  width 100px
  justify-content space-between
  margin 0 auto
</style>
