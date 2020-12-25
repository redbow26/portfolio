<template>

</template>

<script>

import gql from "graphql-tag";

export default {
    name: "Admin",
    beforeMount: async function() {
        const me = await this.$apollo.query({
            query: gql`
            query {
                me {
                    roles
                }
            }`
        })

        if (me.data.me === null)
            this.$router.push({name: "Login"})

        /*
        if (!me.data.me.roles.includes("ADMIN"))
            this.$router.push({name:"Home"})
        */
    }

}
</script>

<style scoped>

</style>
