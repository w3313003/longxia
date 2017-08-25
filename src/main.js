// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from "mint-ui"
import "mint-ui/lib/style.css"
import store from './store'



Vue.use(mint)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
window.checkph = /^1[34578]\d{9}$/;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    a: 2
  },
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})