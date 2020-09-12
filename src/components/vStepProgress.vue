<template>
    <div class="timeline" v-if="items.length > 0">
        <div class="timeline-body">
            <div class="timeline-item" v-for="item in items">
                <p class="time">{{ item.time }}</p>
                <div class="content">
                    <h3 class="title">{{ item.title }}</h3>
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vStepProgress",
    props: [
        'items'
    ]
}
</script>

<style src="../assets/style/vStepProgress.scss" lang="scss" scoped></style>
