import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import VueResource from 'vue-resource'

// Install router and resource
Vue.use(Router)
Vue.use(VueResource)

// Routing
const router = new Router()

router.map({
  '/': {
    component: App
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/'
})

router.start(App, '#app')