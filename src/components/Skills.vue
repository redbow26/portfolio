<template>
    <div class="skill_div">
        <div class="skills">
            <h2>Compétences</h2>
            <skillBox skill="Node JS" percent="75%"></skillBox>
            <skillBox skill="VueJS" percent="65%"></skillBox>
            <skillBox skill="Typescript" percent="50%"></skillBox>
            <skillBox skill="MongoDB" percent="80%"></skillBox>
            <skillBox skill="GraphQl" percent="60%"></skillBox>
        </div>
        <hr class="separator" />
        <div class="study-div">
            <h2>Études</h2>
            <vStepProgress :items="studys"></vStepProgress>
        </div>
        <hr class="separator" />
        <div class="job-div">
            <h2>Experience</h2>
            <vStepProgress :items="jobs"></vStepProgress>
        </div>

    </div>
</template>

<script>
export default {
    name: "Skill",
    data() {
        return {
            studys: [
                {
                    time: "2019-2021",
                    title: "DUT informatique",
                    content: "Preparation d'un DUT informatique a l'iut de lens"
                },
                {
                    time: "2016-2019",
                    title: "Baccalauréat",
                    content: "Obtention du baccalauréat série scientifique"
                }
            ],
            jobs: [{
                time: "2020-2021",
                title: "Coding Party",
                content: "Coding Party est un concours que j'ai eu l'organisation d'organiser pour les DUT1 informatique sur le language python."
            },{
                time: "2019-2020",
                title: "Cours d'informatique",
                content: "Cours de programmation sur python dans le lycée Pablo Picasso a Avion"
            },]
        }
    },
    components: {
        skillBox: () => import('@/components/skillBox'),
        vStepProgress: () => import('@/components/vStepProgress')
    }
}
</script>

<style src="../assets/style/skills.scss" lang="scss" scoped></style>
