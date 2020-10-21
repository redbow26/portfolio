<template>
    <div class="home">

        <nav class="navbar" :class="navbar">
            <ul class="">

                <li class="nav-item">
                    <a @click="switchComponent('About')" class="nav-link">
                        <span class="icon"><i class="fas fa-user"></i></span>
                        <span class="title">À propos</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Projects')" class="nav-link">
                        <span class="icon"><i class="fas fa-toolbox"></i></span>
                        <span class="title">Projets</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Contact')" class="nav-link">
                        <span class="icon"><i class="fas fa-mobile"></i></span>
                        <span class="title">Contact</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Skills')" class="nav-link">
                        <span class="icon"><i class="fas fa-book-open"></i></span>
                        <span class="title">Compétences</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="toggle" :class="navbar" @click="toggleNav"></div>
        <main>
            <keep-alive>
                <component :is="component"></component>
            </keep-alive>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About"

export default {
    name: 'Home',
    components: {
        About,
        Contact: () => import("@/components/Contact"),
        Projects: () => import("@/components/Projects"),
        Skills: () => import('@/components/Skills')
    },
    data() {
        return {
            component: "About",
            navbar: ""
        }
    },
    methods: {
        switchComponent(component) {
            this.component = component
            this.navbar = "";
        },
        toggleNav(){
            if (this.navbar === "")
                this.navbar = "active"
            else
                this.navbar = ""
        }
    }
}
</script>

<style src="../assets/style/home.scss" lang="scss" scoped></style>
