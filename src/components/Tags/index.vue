<template>
    <div class="tags">
      <span v-for="(t, index) in tags" :key="index" class="tag">{{ t }}</span>
    </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    tags: {
      type: Array,
    },
  },
};
</script>

<style scoped>

</style>
