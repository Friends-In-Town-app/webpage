import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

// Install router
Vue.use(Router)

// Routing
var router = new Router()

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
