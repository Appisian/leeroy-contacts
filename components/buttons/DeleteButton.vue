<template>
  <button @click="deleteContact">
    Supprimer le contact
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteContact() {},
  },
};
</script>

<style lang="stylus" scoped></style>
