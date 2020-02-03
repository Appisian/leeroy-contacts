<template>
  <div class="container">
    <div class="description">
      <h1>SÉLECTIONNEZ UN CONTACT</h1>
      <p>
        Dans ce carnet d'adresses vous pouvez ajouter, modifier, supprimer et
        rechercher des contacts. La persistance des données est gérée par le
        VUEX, c'est-à-dire que si vous changez de route les données seront
        toujours sauvegardées or si vous rechargez la page les données seront
        perdues. Naviguez sur ce site aussi bien sur ordinateur que sur votre
        tablette ou téléphone.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="stylus" scoped>
.container
  display none

  +desktop()
    display flex
    justify-content center
    align-items center

  .description

    h1
      color $color-primary
      text-align center
      margin 0 0 20px

    p
      text-align center
      font-size $font-size-basic
      color $color-tertiary
      line-height 25px
      width 400px
      margin 0 auto
</style>
