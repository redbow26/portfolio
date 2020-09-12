<template>
    <div class="skillBox">
        <p>{{ skill }}</p>
        <p>{{ percent }}</p>
        <div class="skill">
            <div class="skill_level" :style="'width: ' + percent + ';--percent: ' + percent"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skillBox",
    props: [
        'skill',
        'percent'
    ]
}
</script>

<style src="../assets/style/skillBox.scss" lang="scss" scoped></style>
