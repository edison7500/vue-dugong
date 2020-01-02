// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import InfiniteLoading from 'vue-infinite-loading';
// import 'buefy/dist/buefy.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import App from './App';
import router from './router';


library.add(fab);
library.add(far);
library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(InfiniteLoading, { /* options */ });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
