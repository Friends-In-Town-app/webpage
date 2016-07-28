<template>
  <div>
  	<router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import UnAuthHome from './components/home/UnAuthHome.vue'
import AuthHome from './components/userHome/AuthHome.vue'
import Error505 from './components/handler/Error505.vue'
import Search from './components/search/Search.vue'

let App = {
  components:{}
}

// Install router and resource
Vue.use(Router)
Vue.use(VueResource)

// Routing
var router = new Router({
	history: true
});

router.map({
  '/': {
    component: AuthHome,
    name: 'root'
  },
  '/home':{
  	component: AuthHome,
    name: 'home'
  },
  '/error':{
  	component: Error505,
    name: 'error'
  },
  '/search':{
    component: Search,
    name: 'search'
  }
})

router.start(App, '#app')

</script>

<style>
.icon-block {
  padding: 0 15px;
}

.icon-block .material-icons {
  font-size: inherit;
}

/* or divider */
.vertical-or {
  position: absolute;
  top: calc(50% - 23px);
  left: -11px;
  background: #ffffff;
  padding: 10px 0px;
  color: #9e9e9e;
}

.or-divider {
  border-top: 1px solid #e0e0e0;
  color: #9e9e9e;
  text-align: center;
  margin: 2rem 0rem;
}

.or-divider > span {
  position: relative;
  top: -10px;
  background: #ffffff;
  padding: 0px 10px; 
}

.fb-login-button {
  text-align:center;
  margin:auto;
}
</style>