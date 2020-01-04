import { fetchList } from '@/api/post';

const state = {
  posts: [],
};

const getters = {};


const actions = {
  getPosts({ commit }) {
    fetchList().then((response) => {
      commit('setPosts', response.data.results);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
