import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import apolloProvider from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: function (h) { return h(App) }
}).$mount('#app')
