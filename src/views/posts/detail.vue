<template>
  <div>
    <d-navbar></d-navbar>
    <div class="container">
      <div class="columns is-desktop is-centered">
        <div class="column is-8 is-desktop">
          <section class="box">
            <h1 class="title">{{ post.title }}</h1>
            <article class="content" v-html="post.html_content">
<!--              {{ post.html_content }}-->
<!--              <vue-markdown :source="post.content" :breaks="breaks"></vue-markdown>-->
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import { fetchDetail } from '@/api/post';
import Navbar from '@/components/Navbar/index';


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
    this.getDetail();
  },
  components: {
    'd-navbar': Navbar,
    'vue-markdown': VueMarkdown,
  },
  methods: {
    getDetail() {
      fetchDetail(this.$route.params.slug).then((response) => {
        this.post = response.data;
      });
    },
  },
};
</script>

<style scoped>

</style>
