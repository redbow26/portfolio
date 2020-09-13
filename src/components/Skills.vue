<template>
    <div class="skill_div">
        <div class="skills">
            <h2>Compétences</h2>
            <skillBox skill="Python" percent="85%"></skillBox>
            <skillBox skill="Node JS" percent="60%"></skillBox>
            <skillBox skill="MongoDB" percent="60%"></skillBox>
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
                    title: "IUT de Lens",
                    content: "DUT informatique"
                },
                {
                    time: "2016-2019",
                    title: "Lycée Pablo Picasso Avion",
                    content: "Baccalauréat série scientifique option SVT"
                },
                {
                    time: "2013-2016",
                    title: "Collège Jean Jacques Rousseau Avion",
                    content: "Brevet"
                },
            ],
            jobs: []
        }
    },
    components: {
        skillBox: () => import('@/components/skillBox'),
        vStepProgress: () => import('@/components/vStepProgress')
    }
}
</script>

<style src="../assets/style/skills.scss" lang="scss" scoped></style>
