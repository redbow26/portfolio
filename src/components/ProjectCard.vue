<template>

    <div class="project">
        <div class="front">
            <img class="thumbnail" :src="imageUrl" alt="">
            <h3 class="name">{{name}}</h3>
            <div class="information">
                <div class="category">
                    <span class="badge">{{category[0]}}</span>
                </div>
                <div class="category">
                    <span class="badge">{{language[0]}}</span>
                </div>
            </div>
        </div>

        <div class="back">
            <div class="information">
                <div class="category">
                    <span class="badge" v-for="item in category">{{item}}</span>
                </div>
                <div class="category">
                    <span class="badge" v-for="item in language">{{item}}</span>
                </div>
            </div>

            <div class="link">
                <button class="btn-project" v-if="githubUrl" :href="githubUrl">
                    <i class="fab fa-github"></i> Lien vers github
                </button>
                <button class="btn-project" v-if="projectUrl" :href="projectUrl">Lien vers le projet</button>
            </div>
            <button class="btn-project">Plus de details</button>
        </div>

        <div class="background">

        </div>
    </div>

</template>

<script>
export default {
    name: "ProjectCard",
    props: [
        "name",
        "date",
        "shortDescription",
        "description",
        "githubUrl",
        "projectUrl",
        "imageUrl",
        "category",
        "language",
    ]
}
</script>

<style src="../assets/style/ProjectCard.scss" lang="scss" scoped></style>
