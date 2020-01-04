<template>
  <div>
    <d-navbar />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <d-breadcrumb :items="items" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="columns is-desktop is-centered">
          <div class="column is-8 is-desktop">
            <div class="box">
              <h1 class="title">{{ post.title }}</h1>
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <span class="icon is-small">
                      <font-awesome-icon :icon="['far', 'clock']" />
                    </span>
                    <time>{{ post.created_at_ts|ts2datetime }}</time>
                  </div>
                </div>
              </div>
              <article class="content" v-html="post.html_content" />
              <hr>
              <div class="level">
                <div class="level-left">
                  <d-tags :tags="post.tags" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <d-footer />
  </div>
</template>

<script>
import { fetchDetail } from '@/api/post';
import { ts2datetime } from '@/filters';
import Navbar from '@/components/Navbar/index';
import Footerbar from '@/components/Footer/index';
import Breadcrumb from '@/components/Breadcrumb/index';
import Tags from '@/components/Tags/index';


export default {
  name: 'detail',
  data() {
    return {
      breaks: false,
      post: {},
      items: [
        {
          name: 'post',
          icon: ['fas', 'pencil-alt'],
          path: '/posts',
          is_active: false,
        },
      ],
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  created() {
    this.getDetail(this.slug);
  },
  components: {
    'd-navbar': Navbar,
    'd-footer': Footerbar,
    'd-breadcrumb': Breadcrumb,
    'd-tags': Tags,
  },
  filters: {
    ts2datetime,
  },
  methods: {
    getDetail(slug) {
      fetchDetail(slug).then((response) => {
        this.post = response.data;
        const item = {
          name: this.post.title,
          path: '/posts',
          is_active: true,
        };
        this.items.push(...[item]);
      });
    },
  },
};
</script>

<style scoped>

</style>
