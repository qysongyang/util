import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'

Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
