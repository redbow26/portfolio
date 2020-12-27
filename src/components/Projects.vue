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
                name="Test"
                date="Today"
                shortDescription="Petite description"
                description="Description"
                projectUrl="Projet"
                imageUrl="https://www.geronimo-agency.com/wp-content/uploads/2019/09/Webp.net-resizeimage.png"
                :category="['Categories', '2']"
                :language="['JavaScript', 'typescript', 'python']"
            ></ProjectCard><ProjectCard
            name="Test"
            date="Today"
            shortDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate ante eu lorem porta ante. "
            description="Description"
            githubUrl="Github"
            projectUrl="Projet"
            imageUrl="https://www.geronimo-agency.com/wp-content/uploads/2019/09/Webp.net-resizeimage.png"
            :category="['Categories', '2']"
            :language="['JavaScript', 'typescript', 'python']"
        ></ProjectCard><ProjectCard
            name="Test"
            date="Today"
            shortDescription="Petite description"
            description="Description"
            githubUrl="Github"
            imageUrl="https://www.geronimo-agency.com/wp-content/uploads/2019/09/Webp.net-resizeimage.png"
            :category="['Categories', '2']"
            :language="['JavaScript', 'typescript', 'python']"
        ></ProjectCard>
        </div>
    </div>
</template>

<script>
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
            loading: false,
        }
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

