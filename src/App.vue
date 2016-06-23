<template>
  <div id="app">
  	<auth-home></auth-home>
  </div>
</template>

<script>
import {router} from './main'
import UnAuthHome from './components/Home/UnAuthHome.vue'
import AuthHome from './components/Home/AuthHome.vue'

export default {
  components: {
    UnAuthHome,
    AuthHome
  }
}

</script>