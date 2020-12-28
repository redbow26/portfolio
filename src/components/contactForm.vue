<template>
    <div class="form">
        <input class="contact-input" type="text" v-model="firstName" placeholder="Prénom">

        <input class="contact-input" type="text" v-model="lastName" placeholder="Nom">

        <input class="contact-input" type="text" v-model="email" placeholder="Email">

        <textarea class="contact-input" v-model="content" placeholder="Votre message..."></textarea>

        <button @click="checkForm">Envoyer</button>
    </div>
</template>

<script>
import createMessage from '../graphql/createMessage.graphql';

export default {
    name: "contactForm",
    data() {
        return {
            lastName: "",
            firstName: "",
            email: "",
            content: ""
        }
    },
    methods: {
        checkForm: async function () {
            let validate = true

            if (this.firstName === "") {
                this.$snotify.error("Prénom invalide")
                validate = false
            }
            if (this.lastName === "") {
                this.$snotify.error("Nom invalide")
                validate = false
            }
            if (this.content === "") {
                this.$snotify.error("Message invalide")
                validate = false
            }
            const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            if (!email_regex.test(this.email) || this.email === "") {
                this.$snotify.error("Email invalide")
                validate = false
            }

            if (validate) {

                this.$apollo.mutate({
                    mutation: createMessage,
                    variables: {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        content: this.content
                    }
                })
                    .then(data => {
                        this.$snotify.success("Envoi du message réussit")
                        this.firstName = ""
                        this.lastName = ""
                        this.email = ""
                        this.content = ""
                    })
                    .catch(err => {
                        this.$snotify.error("Le message n'a pas pu être envoyer")
                    })

            }

        }
    }
}
</script>

<style src="../assets/style/contactForm.scss" lang="scss" scoped></style>
