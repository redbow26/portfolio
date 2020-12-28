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
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :name="project.name"
                :date="project.date"
                :description="project.description"
                :githubUrl="project.githubUrl"
                :projectUrl="project.projectUrl"
                :imageUrl="project.imageUrl ? project.imageUrl : ''"
                :category="project.category ? project.category : []"
                :language="project.language ? project.language : []"
            ></ProjectCard>
        </div>
    </div>
</template>

<script>
import projectsQuery from '../graphql/projects.graphql'

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
            },
            projects: [],
            loading: true,
        }
    },
    mounted: async function() {
        const projects = await this.$apollo.query({
            query: projectsQuery
        })

        if (projects.data.projects) {
            this.projects = projects.data.projects
        } else {
            this.projects = []
            this.$snotify.error("Impossible de récupérer les données", "Erreur")
        }

        this.loading = false;

    },
    methods: {
        furryEgg() {
            this.loading = !this.loading;
        }
    },
    components: {
        ProjectCard: () => import('@/components/ProjectCard')
    }
}
</script>

<style src="../assets/style/projects.scss" lang="scss" scoped></style>

