<template>
  <div>
    <d-navbar />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <d-breadcrumb />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8-desktop">
            <div class="box">
              <h1 class="title">{{ article.title }}</h1>
              <d-article-meta :ts="article.created_at_ts" :origin_link="article.origin_link" />
              <article v-html=article.html_content class="content"/>
              <hr>
              <div class="level">
                <div class="level-left">
                  <d-tags :tags="article.tags" />
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
import NavBar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';
import Breadcrumb from '@/components/Breadcrumb/index';
import Tags from '@/components/Tags/index';
import ArticleMeta from '@/components/Widgets/Article/_meta';
import { fetchDetail } from '@/api/tutorial';
import { ts2datetime } from '@/filters';

export default {
  name: 'detail',
  components: {
    'd-navbar': NavBar,
    'd-footer': Footer,
    'd-breadcrumb': Breadcrumb,
    'd-tags': Tags,
    'd-article-meta': ArticleMeta,
  },
  data() {
    return {
      article: {},
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  filters: {
    ts2datetime,
  },
  created() {
    this.getDetail(this.slug);
  },
  methods: {
    getDetail(slug) {
      fetchDetail(slug).then((response) => {
        this.article = response.data;
        // const item = {
        //   name: this.article.title,
        //   path: this.$route.path,
        //   is_active: true,
        // };
        // this.items.push(...[item]);
      });
    },
  },
};
</script>

<style scoped>

</style>
