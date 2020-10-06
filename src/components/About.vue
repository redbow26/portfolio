<template>
    <div class="about_div">
        <h2>À propos de moi</h2>
        <div class="info">
            <p>
                <span>{{ age }} ans</span> / <span>France</span> / <span>Junior</span>
                <br>
            </p>
            <span class="clickable" @click="onConfirmation">Mon cv</span>
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
            askCV: false,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        displayCV() {
            console.log("CV")
        },
        onConfirmation() {
            if (this.askCV) return;
            this.askCV = true;
            /*
            Here we pass an buttons array, which contains of 2 element of type SnotifyButton
             */
            const toast = this.$snotify.confirm(
                "CV",
                {
                    buttons: [
                        {text: 'Français',
                            action: () => {
                                window.open(`${this.publicPath}resume.pdf`, '_blank');
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {text: 'English',
                            action: () => {
                                window.open(`${this.publicPath}resume.pdf`, '_blank');
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {text: 'Annuler',
                            action: () => {
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        }
                    ]
                }
            );
        }
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
