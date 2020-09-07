<template>
  <div>
    <h1>Projects</h1>
    <div class="loading" v-if="loading">Loading</div>
    <div class="project" v-if="!loading">
      <ul>
        <li v-for="project in projects" :key="project._id">
          <a :href="'#/' +  project._id">{{ project.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Projects",
  computed: {
    ...mapGetters(['projects', 'loading'])
  },
  methods: {
    ...mapActions(['fetchProjects'])
  },
  mounted() {
    this.fetchProjects()
  }
}
</script>

