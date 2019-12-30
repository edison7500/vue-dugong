import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/views/posts/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
    },
  ],
});
