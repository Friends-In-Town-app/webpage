<template>
<div>
  <map
    :center.sync="center"
    :zoom="7"
    >
  </map>
  <marker 
      v-for="m in markers"
      :position.sync="m.position"
      :clickable="true"
      :draggable="true"
      @g-click="center=m.position"
    ></marker>
</div>
</template>

<script>
import {load, Marker, Map} from 'vue-google-maps'

load('AIzaSyABcYOCvykYyyPHmQf4-J-XGMHfCPkGX2I', '3.24');
export default {
	data: function data() {
		return {
			center: {lat: -22.0, lng: -43.0},
        	markers: [{
          		position: {lat: -22.0, lng: -43.0}
        	}, {
          		position: {lat: -21.0, lng: -42.0}
        	}]
		};
	},
	components: {
		Map,
		Marker
	}
};
</script>

<style>
map {
  width:100%;
  height: 600px;
  display: block;
}
</style>