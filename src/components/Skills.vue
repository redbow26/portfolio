<template>
    <div class="skill-div">
        <div class="skills">
            <h2>Compétences</h2>
            <skillBox skill="Python" percent="85%"></skillBox>
            <skillBox skill="Javascript" percent="60%"></skillBox>
        </div>
        <hr/>
        <div class="study-div">

        </div>
        <hr/>
        <div class="work-div">

        </div>

    </div>
</template>

<script>
export default {
    name: "Skill",
    components: {
        skillBox: () => import('@/components/skillBox')
    }
}
</script>

<style src="../assets/style/skills.scss" lang="scss" scoped></style>
