<template>
    <div class="about_div">
        <h2>À propos de moi</h2>
        <div class="info">
            <p>
                <span>{{ age }} ans</span> / <span>France</span> / <span>Junior</span>
                <br>
                <br>
            </p>
            <router-link class="cv-link" to="cv">Mon cv</router-link>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aperiam dignissimos doloremque dolores eveniet facere illo, in, labore laboriosam magni maiores natus, reprehenderit temporibus totam. Aliquid consectetur impedit neque!
        </p>
        <hr />
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            askCV: false
        }
    },
    methods: {
    },
    computed: {
        age: () => {
            let today = new Date();
            let birthDate = new Date("2001-01-26");
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }
}
</script>

<style src="../assets/style/about.scss" lang="scss" scoped></style>
