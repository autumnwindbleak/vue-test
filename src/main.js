import Vue from 'vue'
//element ui css
import 'element-ui/lib/theme-chalk/index.css';
//leaflet css
import 'leaflet/dist/leaflet.css'

import App from './App.vue'
new Vue({
  render: h => h(App),
}).$mount('#app')
