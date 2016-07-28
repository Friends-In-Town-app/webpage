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
          <i class="material-icons left">search</i> Search
          </a>
        </li>
        <li>
          <a href="#">
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
<!-- Search -->
<div class="container">
  <br><br>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s8">
          <i class="material-icons prefix">search</i>
          <input id="search_email" type="tel" class="validate">
          <label for="search_email">Email</label>
        </div>
        <div class="input-field col s4">
          <a class="waves-effect waves-light btn orange">Search</a>
        </div>
      </div>
    </form>
  </div>
  <br><br>  
</div>
</template>

<script>
const API_ADDRESS = 'http://64.137.233.224:3000/';

export default {
	/**
   *
   */
  data: function data() {
		return {
			// Mocked Data
      user: {"name" : "Clark Kent"},

      searched_user: {
        "email" : "",
        "name" : ""
      },

      showResult: false
		};
	},
  
  /**
   *
   */
  methods: {
    searchUser : function(event) {
      this.$http.post(API_ADDRESS + 'search/' 
          + this.signin.email + '/').then((response) => {
            // 200 RESPONSE
            if(response.data.success){
              // Show the found user 
              this.searched_user.email = response.data.user.email;
              this.searched_user.name = response.data.user.n;
              router.go('/home');

            } else {
              // Throw an error in the HTML element
              Materialize.toast("User not found, please check the email again", 3000, 'rounded');
            }
            
            // Reset the signin form
            this.resetSignIn();

          }, (response) => {
          // Redirect to error message/page
          router.go('/error');
        });
    }, 
    addUser : function(event){
    }
  }
};
</script>