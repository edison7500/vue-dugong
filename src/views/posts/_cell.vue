<template>
<!--  <article class="media">-->
    <div class="media-content">
      <h1 class="title">
        <router-link :to="{name: 'post-detail', params: {slug: post.slug }}">
          {{ post.title }}
        </router-link>
      </h1>
    </div>
<!--  </article>-->
</template>

<script>

export default {
  name: 'post-cell',
  props: [
    'post',
  ],
};
</script>

<style scoped>
  .title {
    font-size: 16px;
  }
</style>
