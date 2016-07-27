<template>
  <!-- Side navbar -->
  <ul id="dropdown_user" class="dropdown-content">
    <li><a href="#!">Settings</a></li>
    <li><a href="#!">Account</a></li>
    <li class="divider"></li>
    <li><a href="#!">Logout</a></li>
  </ul>
  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper">
     <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <a href="#">
            <i class="material-icons left">location_on</i> Map
          </a>
        </li>
        <li>
          <a href="#">
          <i class="material-icons right">search</i> Search
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons left">star</i> Notifications
          </a>
        </li>
      </ul>
      <ul class="right hide-on-med-and-down">
        <li>
          <a class="dropdown-button" data-activates="dropdown_user">
            <i class="material-icons left">perm_identity</i>
              Username
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
<!-- Map -->
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

<!-- Friends List -->
<div class="container" vg-show="btState">
</div>

<!-- FAB -->
<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
  <a class="btn-floating btn-large orange">
    <i class="material-icons">group</i>
  </a>
</div>
</template>

<script>

import {load, Marker, Map} from 'vue-google-maps'

load(GOOGLEKEY, GOOGLEAPIVERSION);
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
html {
 height: 100%;
}

map {
  width:100%;
  height: 400px;
  display: block;
}
</style>