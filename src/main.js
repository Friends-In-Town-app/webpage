import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import VueResource from 'vue-resource'

import UnAuthHome from './components/Home/UnAuthHome.vue'
import AuthHome from './components/Home/AuthHome.vue'
import Error505 from './components/Handler/Error505.vue'

// Install router and resource
Vue.use(Router)
Vue.use(VueResource)

// Routing
const router = new Router({
	history: true
});

router.map({
  '/': {
    component: UnAuthHome
  },
  '/home':{
  	component: AuthHome
  },
  '/error':{
  	component: Error505
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/'
})

router.start(App, '#app')