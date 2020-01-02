<template>
    <div class="media-content">
      <h1 class="title">
        <router-link :to="{name: 'post-detail', params: {slug: post.slug }}">
          {{ post.title }}
        </router-link>
      </h1>
      <truncate class="content" :text="post.digest" clamp="..."></truncate>
    </div>
</template>

<script>
import truncate from 'vue-truncate-collapsed';

export default {
  name: 'post-cell',
  props: [
    'post',
  ],
  components: {
    truncate,
  },
};
</script>

<style scoped>
  .title {
    font-size: 16px;
  }
</style>
