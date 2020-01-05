<template>
  <div class="level">
    <div class="level-left" v-if="ts">
      <div class="level-item">
        <span class="icon is-small">
          <font-awesome-icon :icon="['far', 'clock']" />
        </span>
        <time>{{ ts|ts2datetime }}</time>
      </div>
    </div>
    <div class="level-right" v-if="origin_link">
      <div class="level-item">
        <a :href="origin_link" target="_blank">
          <font-awesome-icon :icon="['fas', 'external-link-square-alt']" />
          [原文链接]
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ts2datetime } from '@/filters';

export default {
  name: 'article-meta',
  props: {
    ts: {
      type: Number,
    },
    origin_link: {
      type: String,
    },
  },
  filters: {
    ts2datetime,
  },
};
</script>

<style scoped>

</style>
