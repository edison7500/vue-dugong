<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="(item, index) in breadcrumes"
          :key="index"
          :class="{'is-active':(item.is_active === true)}">
        <router-link :to="{path: item.path}" :title="item.name">
          <span class="icon is-small" v-if="item.icon"><font-awesome-icon :icon="item.icon"/></span>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'd-breadcrumb',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    breadcrumes() {
      const data = [{
        name: 'home',
        icon: ['fas', 'home'],
        path: '/',
      }];
      if (this.items) {
        data.push(...this.items);
      }
      return data;
    },
  },
};
</script>

<style scoped>

</style>
