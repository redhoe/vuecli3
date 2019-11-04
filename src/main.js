import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 引入axios模块
Vue.prototype.$axios=axios
Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://trade.a.top/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
