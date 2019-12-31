import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/views/posts/index';
import PostDetail from '@/views/posts/detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/posts/:slug',
      name: 'post-detail',
      component: PostDetail,
    },
  ],
});
