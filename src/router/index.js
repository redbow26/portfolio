import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/components/Login";
import Admin from "@/components/Admin";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/cv',
        name: 'cv',
        component: () => import(/* webpackChunkName: "Cv" */ '@/views/Cv.vue')
    },
    {
        path: '*',
        name: 'missing',
        component: () => import(/* webpackChunkName: "Missing" */ '@/views/Missing.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
