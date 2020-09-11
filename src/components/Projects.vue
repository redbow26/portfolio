<template>
    <div>
        <h1>Projects</h1>
        <img class="loading" src="../assets/loading.gif" alt="Loading gif" v-if="loading"/>
        <div class="project" v-if="!loading">
            <ul>
                <li v-for="project in projects" :key="project._id">
                    <a :href="'#' +  project._id">{{ project.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Projects",
    computed: {
        ...mapGetters(['projects', 'loading'])
    },
    methods: {
        ...mapActions(['fetchProjects'])
    },
    activated() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss">
.loading {
    margin-top: 5rem;
    margin-left: 6rem;
    width: 15rem;
}
</style>

