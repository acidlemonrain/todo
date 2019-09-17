import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import '../node_modules/bulma/css/bulma.css'
 
import VueDragDrop from 'vue-drag-drop';
 
Vue.use(VueDragDrop);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
