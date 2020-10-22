<template>
    <div class="about_div">
        <h2>À propos de moi</h2>
        <div class="info">
            <p>
                <span class="clickable" @click="displayCV">Afficher mon cv</span> / <span class="clickable" @click="downloadCV">Télécharger mon cv</span>
                <br>
                <span>{{ age }} ans</span> / <span>France</span> / <span>Junior</span>
            </p>
        </div>
        <p>
            Développeur
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
            if (this.askCV) return;
            this.askCV = true;
            /*
            Here we pass an buttons array, which contains of 2 element of type SnotifyButton
             */
            const toast = this.$snotify.confirm(
                "Choix de la langue",
                "Mon CV",
                {
                    position: "rightTop",
                    buttons: [
                        {
                            text: 'Français',
                            action: () => {
                                window.open(`${this.publicPath}cv_tristan_leroy_dark_fr.pdf`, '_blank');
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {
                            text: 'Anglais',
                            action: () => {
                                window.open(`${this.publicPath}cv_tristan_leroy_dark_fr.pdf`, '_blank');
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {
                            text: 'Annuler',
                            action: () => {
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        }
                    ]
                }
            );
        },
        downloadCV() {
            if (this.askCV) return;
            this.askCV = true;
            const download = (file_path) => {
                let a = document.createElement('A');
                a.href = file_path;
                a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

            }
            /*
            Here we pass an buttons array, which contains of 2 element of type SnotifyButton
             */
            const toast = this.$snotify.confirm(
                "Choix de la langue",
                "Mon CV",
                {
                    position: "rightTop",
                    buttons: [
                        {
                            text: 'Français',
                            action: () => {
                                download(`${this.publicPath}cv_tristan_leroy_light_fr.pdf`);
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {
                            text: 'Anglais',
                            action: () => {
                                download(`${this.publicPath}cv_tristan_leroy_light_fr.pdf`);
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        },
                        {
                            text: 'Annuler',
                            action: () => {
                                this.askCV = false;
                                this.$snotify.remove(toast.id);
                            },
                            bold: false
                        }
                    ]
                }
            );
        },
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
