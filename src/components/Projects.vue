<template>
    <div class="projects_div" v-konami:opts.custom="furryEgg">
        <h2>Projets</h2>
        <div class="filter" v-if="!loading">
            <div class="language">
                <span>Langage : </span>
                <b-button-group size="sm">
                    <b-button
                        v-for="(btn, idx) in buttonsLang"
                        :key="idx"
                        :pressed.sync="btn.state"
                        variant="danger"
                    >
                        {{ btn.caption }}
                    </b-button>
                </b-button-group>
            </div>
            <div class="category">
                <span>Categories: </span>
                <b-button-group size="sm">
                    <b-button
                        v-for="(btn, idx) in buttonsCate"
                        :key="idx"
                        :pressed.sync="btn.state"
                        variant="danger"
                    >
                        {{ btn.caption }}
                    </b-button>
                </b-button-group>
            </div>
        </div>

        <img class="loading" src="../assets/loading.gif" alt="Loading gif" v-if="loading"/>
        <div class="projects" v-if="!loading">
            <ul>
                <li v-for="project in filtered" :key="project._id">
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
    data() {
        return {
            buttonsLang: [
                { caption: 'Python', state: true },
                { caption: 'Nodejs', state: true },
            ],
            buttonsCate: [
                { caption: 'Discord Bot', state: true },
            ],
            opts: {
                timeout: 3000,
                chain: '70-85-82-82-89'
            }
        }
    },
    computed: {
        ...mapGetters(['projects', 'loading']),
        filtered: function () {
            const category = this.buttonsCate.filter(btn => btn.state)
                .map(btn => btn.caption.toLowerCase())

            const language = this.buttonsLang.filter(btn => btn.state)
                .map(btn => btn.caption.toLowerCase())

            let p

            if (category.length >= 1 && language.length >= 1) {
                p = this.projects.filter(project =>
                    project.language.some(r => language.indexOf(r) >= 0) &&
                    project.category.some(r => category.indexOf(r) >= 0)
                )
            }
            else if (category.length >= 1 ) {
                p = this.projects.filter(project =>
                    project.category.some(r => category.indexOf(r) >= 0)
                )
            }
            else if (language.length >= 1) {
                p = this.projects.filter(project =>
                    project.language.some(r => language.indexOf(r) >= 0)
                )
            }
            else {
                p = this.projects
            }
        return p
        }
    },
    methods: {
        ...mapActions(['fetchProjects', 'setLoading']),
        furryEgg() {
            this.setLoading(!this.loading);
        }
    },
    activated() {
        this.fetchProjects()
    }
}
</script>

<style src="../assets/style/projects.scss" lang="scss" scoped></style>

