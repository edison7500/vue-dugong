<template>
  <div>
    <section class="section">
      <d-navbar></d-navbar>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop is-centered">
          <div class="column is-8 is-desktop">
            <div class="box">
              <h1 class="title">{{ post.title }}</h1>
              <div class="meta">
                <time>
                  <font-awesome-icon :icon="['far', 'calendar-alt']"/>
                  {{ post.created_at_ts|ts2dt_str }}
                </time>
              </div>
              <article class="content" v-html="post.html_content"></article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <d-footer></d-footer>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import { fetchDetail } from '@/api/post';
import Navbar from '@/components/Navbar/index';
import Footerbar from '@/components/Footer/index';


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
  },
  filters: {
    ts2dt_str(ts) {
      return moment.unix(ts).format('YYYY-MM-DD');
    },
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
