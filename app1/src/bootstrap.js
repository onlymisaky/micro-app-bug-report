import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = null
window.mount = () => {
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
window.unmount = () => {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
