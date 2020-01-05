<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <img v-lazy=tutorial.cover_url  :alt="tutorial.title">
      </figure>
    </div>
    <div class="card-content">
      <h1>
        <router-link :to="{name: 'tutorial-detail', params: {slug: tutorial.slug}}">
          {{ tutorial.title }}
        </router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tutorial-cell',
  props: {
    tutorial: {
      type: Object,
    },
  },
};
</script>

<style scoped>

</style>
