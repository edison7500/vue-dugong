<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $body-background-color: #f8f8f8;

  $link: $black;
  $link-invert: $grey;

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
