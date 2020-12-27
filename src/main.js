import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Snotify from 'vue-snotify'
import VueKonami from 'vue-konami'
import 'vue-snotify/styles/dark.css'
import './Boostrap-vue'
import markdown from './directives/markdown';

Vue.config.productionTip = false

import '@/assets/style/custom.scss'
import { apolloProvider } from './vue-apollo'

const option = {
    toast: {
        timeout: 3000
    }
}

Vue.use(Snotify, option)

Vue.use(VueKonami)

Vue.directive('markdown', markdown)

new Vue({
    router,
    apolloProvider,

    render: function (h) {
        return h(App)
    }
}).$mount('#app')
