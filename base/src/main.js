import Vue from 'vue';
import microApp from '@micro-zoe/micro-app';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

microApp.start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
