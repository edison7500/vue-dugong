<template>
  <div>
    <d-navbar></d-navbar>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop is-centered">
          <div class="column is-8 is-desktop">
            <div class="box">
              <h1 class="title">{{ post.title }}</h1>
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <font-awesome-icon :icon="['far', 'clock']" />
                    <p>{{ post.created_at_ts|ts2datetime }}</p>
                  </div>
                </div>
              </div>
              <article class="content" v-html="post.html_content"></article>

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

    <d-footer></d-footer>
  </div>
</template>

<script>
import { fetchDetail } from '@/api/post';
import { ts2datetime } from '@/filters';
import Navbar from '@/components/Navbar/index';
import Footerbar from '@/components/Footer/index';
import Tags from '@/components/Tags/index';


export default {
  name: 'detail',
  data() {
    return {
      breaks: false,
      post: {},
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
    'd-tags': Tags,
  },
  filters: {
    ts2datetime,
  },
  methods: {
    getDetail(slug) {
      fetchDetail(slug).then((response) => {
        this.post = response.data;
      });
    },
  },
};
</script>

<style scoped>

</style>
