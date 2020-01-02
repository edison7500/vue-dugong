<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" title="Python观察员">
          Python观察员
        </router-link>
      </div>
      <div class="navbar-menu">

        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            <font-awesome-icon :icon="['fas', 'book']" />
          </router-link>
          <router-link to="/" class="navbar-item">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </router-link>
        </div>

        <div class="navbar-end">
          <a href="https://github.com/edison7500/dugong" class="navbar-item" target="_blank">
            <font-awesome-icon :icon="['fab', 'github-alt']" />
          </a>
          <router-link :to="{name: 'about'}" class="navbar-item">
            <font-awesome-icon :icon="['far', 'info']" />
          </router-link>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped>
</style>
