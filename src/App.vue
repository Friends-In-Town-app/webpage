<template>
  <div id="app">
  	<un-auth-home></un-auth-home>
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