<template>
  <div id="app">
    <d-navbar />
    <router-view/>
    <d-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';

export default {
  name: 'App',
  components: {
    'd-navbar': NavBar,
    'd-footer': Footer,
  },
};
</script>

<style lang="scss">
  @import "scss/main";
</style>
