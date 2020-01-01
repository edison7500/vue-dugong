<template>
  <div>
    <d-navbar></d-navbar>
    <div class="container">
      <div class="columns is-desktop is-centered">
        <div class="column is-8 is-desktop">
          <section class="box">
            <h1 class="title">{{ post.title }}</h1>
            <article class="content" v-html="post.html_content">
            </article>
          </section>
        </div>
      </div>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
import { fetchDetail } from '@/api/post';
import Navbar from '@/components/Navbar/index';
import Footerbar from '@/components/Footer/index';


export default {
  name: 'detail',
  props: {
    slug: {
      type: String,
    },
  },
  data() {
    return {
      breaks: false,
      post: {},
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getDetail(this.slug);
  },
  components: {
    'd-navbar': Navbar,
    'd-footer': Footerbar,
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
