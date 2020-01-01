<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Power by Django</strong>
          <a href="https://jiaxin.im" title="Python 观察员">Python 观察员</a>. The source code is licensed
          <a href="http://www.gnu.org/licenses/">GNU</a>. Build nicely.
        </p>
        <p>
          <a  href="https://github.com/edison7500/dugong">
            <font-awesome-icon :icon="['fab', 'github-alt']" size="2x" />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'd-footer',
};
</script>

<style scoped>
  .footer{
    margin-top: 40px;
  }
</style>
