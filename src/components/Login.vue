<template>
    <div class="form">
        <input class="contact-input" type="text" v-model="email" placeholder="Email">

        <input class="contact-input" type="password" v-model="password" placeholder="Password">

        <button @click="checkForm">Envoyer</button>
    </div>
</template>

<script>
import gql from "graphql-tag";
import {onLogin} from "@/vue-apollo";

export default {
name: "Login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        checkForm: async function () {

            const data = await this.$apollo.mutate({
                mutation: gql`
                    mutation login($email: String!, $password: String!) {
                      login (password: $password email: $email) {
                        accessToken
                      }
                    }
                `,
                variables: {
                    email: this.email,
                    password: this.password
                }
            })
            await onLogin(this.$apollo.provider.defaultClient, data.data.login.accessToken)
            this.$router.push({name: 'Admin'});

        }
    }
}
</script>

<style scoped>

</style>
