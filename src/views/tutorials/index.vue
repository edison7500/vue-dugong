<template>
  <div>
    <d-navbar />
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third is-block-tablet"
               v-for="(tutorial, index) in tutorials"
               :key="index">
            <d-tutorial-cell :tutorial="tutorial"/>
          </div>

          <div class="column">
            <infinite-loading @infinite="infiniteHandler">
              <div slot="no-more">No more message</div>
              <div slot="no-results">No results message</div>
            </infinite-loading>
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
import TutorailCell from './_cell';
import { fetchList } from '../../api/tutorial';

export default {
  name: 'index',
  components: {
    'd-navbar': NavBar,
    'd-footer': Footer,
    'd-breadcrumb': Breadcrumb,
    'd-tutorial-cell': TutorailCell,
  },
  data() {
    return {
      tutorials: [],
      query: {
        page: 1,
        size: 12,
      },
    };
  },
  methods: {
    infiniteHandler($state) {
      fetchList(this.query).then((response) => {
        if (response.data.count) {
          this.query.page += 1;
          this.tutorials.push(...response.data.results);
          $state.loaded();
        } else {
          $state.complete();
        }
      }).catch((error) => {
        this.error = error;
        $state.error();
      });
    },
  },
};
</script>

<style scoped>

</style>
