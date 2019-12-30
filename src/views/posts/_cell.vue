<template>
  <article class="media">
    <div class="media-content">
      <h1 class="title">
        <a>{{ post.title }}</a>
      </h1>
    </div>
  </article>
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
