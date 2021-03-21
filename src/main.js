import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import babel from 'babel-loader'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '@/assets/config/api.js'

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  babel,
  store,
  render: h => h(App),
  data:{
    api:api
  }
}).$mount('#app')
