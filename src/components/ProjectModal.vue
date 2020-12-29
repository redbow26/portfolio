<template>
    <b-modal :id="id" hide-header hide-footer>
        <h1 class="title">{{name}}</h1>
        <hr>

        <div v-markdown class="description">
            {{description}}
        </div>
        <br>

        <a :ref="githubUrl" v-if="githubUrl" class="btn-project">
            <i class="fab fa-github"></i> Lien vers github
        </a>
        <a :href="projectUrl" v-if="projectUrl" class="btn-project">Lien vers le projet</a>
    </b-modal>
</template>

<script>
export default {
    name: "ProjectModal",
    props: [
        "id",
        "name",
        "description",
        "githubUrl",
        "projectUrl"
    ]
}
</script>

<style src="../assets/style/projectModal.scss" lang="scss" scoped></style>
