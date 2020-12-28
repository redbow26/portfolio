<template>
    <div class="form">

        <label>
            Nom
            <input type="text" v-model="name" placeholder="Nom">
        </label><br>

        <label>
            Url du github
            <input type="text" v-model="githubUrl" placeholder="url du github">
        </label><br>

        <label>
            Url du projet
            <input type="text" v-model="projectUrl" placeholder="url du projet">
        </label><br>

        <label>
            Url de l'image
            <input type="text" v-model="imageUrl" placeholder="Url de l'image">
        </label><br>

        <label>
            Categories
            <input type="text" v-model="category" placeholder="Categories(séparer par des ,)">
        </label><br>

        <label>
            Langage
            <input type="text" v-model="language" placeholder="Langage (séparer par des ,)">
        </label><br>

        <label>
            Description
            <textarea v-model="description" placeholder="Votre description (supporte le markdown)"></textarea>
        </label><br>

        <button @click="checkForm">Ajouter un projet</button>
    </div>
</template>

<script>
import meQuery from '../graphql/me.graphql'
import createProject from "@/graphql/createProject.graphql";

export default {
    name: "Admin",
    data() {
        return {
            name: "",
            githubUrl: "",
            projectUrl: "",
            imageUrl: "",
            category: "",
            language: "",
            description: "",
        }
    },
    beforeMount: async function() {
        const me = await this.$apollo.query({
            query: meQuery
        })

        if (me.data.me === null)
            this.$router.push({name: "Login"})

        /*
        if (!me.data.me.roles.includes("ADMIN"))
            this.$router.push({name:"Home"})
        */
    },
    methods: {
        checkForm: async function () {
            let validate = true

            if (this.name === "") {
                this.$snotify.error("Nom obligatoire")
                validate = false
            }
            if (this.imageUrl === "") {
                this.$snotify.error("Url de l'image obligatoire")
                validate = false
            }
            if (this.description === "") {
                this.$snotify.error("Description obligatoire")
                validate = false
            }

            if (validate) {
                const category = this.category.split(',')
                const language = this.language.split(',')

                this.$apollo.mutate({
                    mutation: createProject,
                    variables: {
                        name: this.name,
                        githubUrl: this.githubUrl !== "" ? this.githubUrl : null,
                        projectUrl: this.projectUrl !== "" ? this.projectUrl : null,
                        imageUrl: this.imageUrl,
                        description: this.description,
                        category,
                        language
                    }
                })
                    .then(data => {
                        this.$snotify.success("Ajout du projet réussit")
                        this.name = ""
                        this.githubUrl = ""
                        this.projectUrl = ""
                        this.imageUrl = ""
                        this.category = ""
                        this.language = ""
                        this.description =""
                    })
                    .catch(err => {
                        this.$snotify.error("Le projet n'a pas pu etre ajouter")
                    })

            }

        }
    }

}
</script>

<style scoped>

</style>
