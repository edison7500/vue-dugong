<template>
  <div class="container">
    <navbar></navbar>
    <div class="columns is-desktop is-multiline clearfix">
      <div class="column is-8">
        <section class="box" v-for="(post, index) in posts" v-bind:key="index">
          <cell :post=post></cell>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/post';
import navbar from '@/components/Navbar/index';
import cell from './_cell';

export default {
  name: 'index',
  components: { navbar, cell },
  comments: {
    navbar,
  },
  data() {
    return {
      posts: [],
      isLoading: true,
      query: {
        size: 20,
      },
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.isLoading = true;
      fetchList(this.query).then((response) => {
        this.posts = response.data.results;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
</style>
