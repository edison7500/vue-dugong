<template>
    <div class="media-content">
      <h1 class="title">
        <router-link :to="{name: 'post-detail', params: {slug: post.slug }}">
          {{ post.title }}
        </router-link>
      </h1>
      <truncate class="content" :text="post.digest" clamp="..."></truncate>

      <div class="level">
        <div class="level-left">
          <d-tags :tags="post.tags"/>
        </div>
        <div class="level-right">
          <div class="level-item">
            <span class="icon is-small"><font-awesome-icon :icon="['far', 'clock']" /></span>
            <time>{{ post.created_at_ts|ts2datetime }}</time>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import truncate from 'vue-truncate-collapsed';
import { ts2datetime } from '@/filters';
import Tags from '@/components/Tags/index';

export default {
  name: 'post-cell',
  props: [
    'post',
  ],
  components: {
    'd-tags': Tags,
    truncate,
  },
  filters: {
    ts2datetime,
  },
};
</script>

<style scoped>
  .title {
    font-size: 16px;
  }
</style>
