<template>
  <nav class="panel">
    <p class="panel-heading">
      github
      <!--      <font-awesome-icon :icon="['fab', 'github-alt']"/>&nbsp;github-->
    </p>
    <div v-for="(repo, index) in repos" :key="index">
      <a :href="repo.link" target="_blank" :title="repo.name" class="panel-block">
        <span class="panel-icon">
          <font-awesome-icon :icon="repo.icon" />
        </span>{{ repo.name }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'gh-sidebar',
  data() {
    return {
      repos: [
        {
          link: 'https://github.com/edison7500/dugong',
          name: 'dugong',
          icon: ['fab', 'github-alt'],
        },
        {
          link: 'https://github.com/edison7500/django-bulma',
          name: 'django-bulma',
          icon: ['fab', 'github-alt'],
        },
        {
          link: 'https://github.com/edison7500/django-leancloud-sms',
          name: 'django-leancloud-sms',
          icon: ['fab', 'github-alt'],
        },
        {
          link: 'https://github.com/edison7500/flask-oss',
          name: 'flask-oss',
          icon: ['fab', 'github-alt'],
        },
        {
          link: 'https://github.com/edison7500/django-sendcloud',
          name: 'django-sendcloud',
          icon: ['fab', 'github-alt'],
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
