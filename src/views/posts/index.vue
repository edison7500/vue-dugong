<template>
  <div>
    <d-navbar></d-navbar>
    <div class="container">
      <div class="columns is-desktop is-multiline clearfix">
        <div class="column is-8">
          <section class="box">
            <article class="media" v-for="(post, index) in posts" v-bind:key="index">
              <post-cell :post=post></post-cell>
            </article>
          </section>
        </div>
      </div>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
import { fetchList } from '@/api/post';
import NavBar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';
import PostCell from './_cell';

export default {
  name: 'index',
  components: {
    'd-navbar': NavBar,
    'd-footer': Footer,
    'post-cell': PostCell,
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
