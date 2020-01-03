<template>
  <div>
    <d-navbar></d-navbar>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop is-multiline clearfix">
          <div class="column is-8">
            <div class="box">
              <article class="media" v-for="(post, index) in posts" v-bind:key="index">
                <post-cell :post=post></post-cell>
              </article>
            </div>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
          </div>
        </div>
      </div>
    </section>

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
      query: {
        size: 20,
        page: 1,
      },
    };
  },
  methods: {
    infiniteHandler($state) {
      fetchList(this.query).then((response) => {
        if (response.data.count) {
          this.query.page += 1;
          this.posts.push(...response.data.results);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
</script>

