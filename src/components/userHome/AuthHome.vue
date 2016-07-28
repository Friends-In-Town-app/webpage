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
          <a href="#" v-link="{ path: 'home' }">
            <i class="material-icons left">location_on</i> Map
          </a>
        </li>
        <li>
          <a href="#" v-link="{ path: 'search' }">
          <i class="material-icons left">search</i> Search
          </a>
        </li>
        <li>
          <a href="#" v-link="{ path: 'notifications' }">
            <i class="material-icons left">stars</i> Notifications
          </a>
        </li>
      </ul>
      <ul class="right hide-on-med-and-down">
        <li>
          <a class="dropdown-button" data-activates="dropdown_user">
            <i class="material-icons left">perm_identity</i>
              {{user.name}}
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
<ul id="slide-out" class="side-nav">
  <li><div class="userView">
    <img class="background" src="src/assets/imgs/map_background.jpg">
    <img class="circle" v-bind="{src:user.profile_pic}">
    <span class="fwhite-text name">{{user.name}}</span>
    <span class="white-text email">{{user.email}}</span>
  </div></li>
  <li><i class="material-icons">group</i>Your Friends</li>
  <li><div class="divider"></div></li>
  <li v-for="friend in user_friends">
    <a class="waves-effect" href="#!">
      <img style="vertical-align:middle" class="circle" v-bind="{src:friend.profile_pic}">
      <span class="fwhite-text name">{{friend.name}}</span>
    </a>
  </li>
</ul>

<!-- FAB -->
<div class="fixed-action-btn" style="bottom: 45px; right: 30px;">
  <a  href="#" data-activates="slide-out" class="button-collapse btn-floating btn-large orange" v-on:click="showFriendsList">
    <i class="material-icons">group</i>
  </a>
</div>
</template>

<script>
import {load, Marker, Map} from 'vue-google-maps'

load(GOOGLEKEY, GOOGLEAPIVERSION);
export default {
	/**
   *
   */
  data: function data() {
		return {
			center: {lat: -22.0, lng: -43.0},
      
      markers: [
        {
          position: {lat: -22.0, lng: -43.0}
        }, {
          position: {lat: -21.0, lng: -42.0}
        }],

        // Mocked Data
        user: {
          "name": "Clark Kent",
          "email" : "clark.kent@dailyplanet.org",
          "profile_pic":"src/assets/imgs/clarkkent.jpg",
          "pos":""
        },

        user_friends: [
        ]
		};
	},
  
  /**
   *
   */
	components: {
		Map,
		Marker
	},
  
  /**
   *
   */
  methods: {
    showFriendsList : function(event) {
      this.getFriendsList();
    }, 
    getFriendsList : function(event){
      this.user_friends = [{ 
          "name": "El Diablo",
          "profile_pic":"src/assets/imgs/eldiablo.jpg",
          "pos":""
        },
        { 
          "name": "DeadShot",
          "profile_pic":"src/assets/imgs/deadshot.jpg",
          "pos":""
        },
        { 
          "name": "Joker",
          "profile_pic":"src/assets/imgs/joker.jpg",
          "pos":""
        },
        { 
          "name": "Bruce Wayne",
          "profile_pic":"src/assets/imgs/brucewayne.jpg",
          "pos":""
        },
        { 
          "name": "Harley Quinn",
          "profile_pic":"src/assets/imgs/harleyquinn.jpg",
          "pos":""
        }];
    }
  }
};
</script>

<style>
html {
 height: 100%;
}

map {
  width:100%;
  height: 600px;
  display: block;
}
</style>