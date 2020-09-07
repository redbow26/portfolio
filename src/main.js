import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import apolloProvider from './vue-apollo'
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/dark.css'

Vue.config.productionTip = false

const option = {
  toast : {
    timeout: 3000
  }
}

Vue.use(Snotify, option)

new Vue({
  router,
  store,
  apolloProvider,
  render: function (h) { return h(App) }
}).$mount('#app')
