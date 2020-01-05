import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/views/posts/index';
import PostDetail from '@/views/posts/detail';
import Tutorials from '@/views/tutorials/index';
import TutorialDetail from '@/views/tutorials/detail';
import About from '@/views/about';

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
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
    },
    {
      path: '/tutorials/:slug',
      name: 'tutorial-detail',
      component: TutorialDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
