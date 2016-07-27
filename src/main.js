import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import VueResource from 'vue-resource'

import UnAuthHome from './components/home/UnAuthHome.vue'
import AuthHome from './components/userHome/AuthHome.vue'
import Error505 from './components/handler/Error505.vue'

// Install router and resource
Vue.use(Router)
Vue.use(VueResource)

// Routing
var router = new Router({
	history: true
});

router.map({
  '/': {
    component: AuthHome
  },
  '/home':{
  	component: AuthHome
  },
  '/error':{
  	component: Error505
  }
})

router.start(App, '#app')