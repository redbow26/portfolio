<template>
    <div class="projects_div" v-konami:opts.custom="furryEgg">
        <h2>Projets</h2>

        <img class="loading" src="../assets/loading.gif" alt="Loading gif" v-if="loading"/>
        <div class="projects" v-if="!loading">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :id="project.id"
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
            opts: {
                timeout: 3000,
                chain: '70-85-82-82-89'
            },
            projects: [],
            loading: true,
        }
    },
    mounted: async function() {
        try {
            const projects = await this.$apollo.query({
                query: projectsQuery
            })

            if (projects.data.projects) {
                this.projects = projects.data.projects
            } else {
                this.projects = []
                this.$snotify.error("Impossible de récupérer les données des projets", "Erreur")
            }
        } catch (e) {
            console.log(e)
            this.$snotify.error("Impossible de récupérer les données des projets", "Erreur")
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

