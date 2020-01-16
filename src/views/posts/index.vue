<template>
  <div>
<!--    <d-navbar />-->

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop">
            <d-breadcrumb :items="items"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="columns is-desktop is-multiline clearfix">
          <div class="column is-8">
            <div class="box">
              <article class="media"
                       v-for="(post, index) in posts"
                       v-bind:key="index"
              >
                <post-cell :post=post />
              </article>
            </div>
            <infinite-loading @infinite="infiniteHandler">
              <div slot="no-more">No more message</div>
              <div slot="no-results">No results message</div>
            </infinite-loading>
          </div>
        </div>
      </div>
    </section>

<!--    <d-footer/>-->
  </div>
</template>

<script>
import { fetchList } from '@/api/post';
// import NavBar from '@/components/Navbar/index';
// import Footer from '@/components/Footer/index';
import Breadcrumb from '@/components/Breadcrumb/index';
import PostCell from './_cell';

export default {
  name: 'post-index',
  components: {
    'd-breadcrumb': Breadcrumb,
    'post-cell': PostCell,
  },
  data() {
    return {
      posts: [],
      items: [
        {
          name: 'post',
          icon: ['fas', 'pencil-alt'],
          path: '/posts',
          is_active: true,
        },
      ],
      query: {
        size: 20,
        page: 1,
      },
      error: null,
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
      }).catch((error) => {
        this.error = error;
        $state.error();
      });
    },
  },
};
</script>

