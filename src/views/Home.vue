<template>
    <div class="home">
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <a class="nav-link">
                        <span class="link-text logo-text">Tristan</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    class="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    class="fa-primary"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('About')" class="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="user"
                            class="svg-inline--fa fa-user fa-w-14"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <g class="fa-group">
                                <path fill="currentColor"
                                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                      class="fa-secondary"></path>
                            </g>
                        </svg>
                        <span class="link-text">À propos</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Projects')" class="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="briefcase"
                            class="svg-inline--fa fa-briefcase fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
                                    class="fa-secondary">
                                </path>
                            </g>
                        </svg>
                        <span class="link-text">Projets</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Contact')" class="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="mobile"
                            class="svg-inline--fa fa-mobile fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                    class="fa-secondary"
                                >
                                </path>
                            </g>
                        </svg>
                        <span class="link-text">Contact</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a @click="switchComponent('Skills')" class="nav-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="readme"
                            class="svg-inline--fa fa-readme fa-w-18"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"
                                    class="fa-secondary"
                                >
                                </path>
                            </g>
                        </svg>
                        <span class="link-text">Compétences</span>
                    </a>
                </li>

                <li class="nav-item" id="themeButton">
                    <a href="#" class="nav-link">
                        <svg
                            id="lightIcon"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="moon-stars"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                                    class="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                                    class="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span class="link-text">Thème</span>
                    </a>
                </li>
            </ul>
        </nav>
        <main>
            <keep-alive>
                <component :is="component"></component>
            </keep-alive>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        About: () => import("@/components/About"),
        Contact: () => import("@/components/Contact"),
        Projects: () => import("@/components/Projects"),
        Skills: () => import('@/components/Skills')
    },
    data() {
        return {
            component: "Projects"
        }
    },
    methods: {
        switchComponent(component) {
            this.component = component
        }
    }
}
</script>

<style src="../assets/style/home.scss" lang="scss" scoped></style>
