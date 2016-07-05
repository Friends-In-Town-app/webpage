<template>
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a class="modal-trigger" href="#signin-modal">Sign in</a></li>
          <li><a href="#signup">Sign up</a></li>
          <li><a href="#about-footer">About us</a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
          <li><a class="modal-trigger" href="#signin-modal">Sign in</a></li>
          <li><a href="#signup">Sign up</a></li>
          <li><a href="#about-footer">About us</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">Friends in Town</h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern app for the youth that considers themselves global citizens</h5>
      </div>
      <div class="row center">
        <a href="#icon-block" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
      </div>
      <br><br>
    </div>
  </div>

  <!-- Modal Structure for signin-->
  <div id="signin-modal" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 class="header center orange-text"> Sign in</h4>
      <div class="container">
        <div class="row">  
          <div class="col s12 input-field">
            <input id="signin-email" name="signin-email" type="email" v-model="signin.email">
            <label for="signin-email">E-mail address</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12 input-field">
            <input id="signin-password" name="signin-password" type="password" v-model="signin.password">
            <label for="signin-password">Password</label>
          </div>
        </div>
        <h5 class="center light-blue-text"> Or </h5>
        <div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="true" data-auto-logout-link="false"></div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" v-on:click="submitAuth">Login</a>
    </div>
  </div>

  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div id="icon-block" class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">location_on</i></h2>
            <h5 class="center">Are you travelling?</h5>

            <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Friendship is all that matters</h5>

            <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to use</h5>

            <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Create New account section -->
    <br><br>
    <div class="section" id="signup">
      <h2 class="header center orange-text">Sign Up</h1>
      <br><br>

      <div id="create-list-login-container" class="row create-list-button disabled">
        <div class="col s12 m6 l6">
          <div class="center">
            <p class="flow-text">Sign up with your Facebook</p>
            <div>
              <div class="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="true" data-auto-logout-link="false"></div>
            </div>
          </div>
        </div>
        <div class="col s12 m6 l6">
        <div class="center">
            <div>
              <input class="new-account-hidden" type="hidden" name="new-account-hidden">
              <div class="center">
                  <p class="flow-text">Create an account</p>
              </div>
              <div class="row">
                  <div class="col s12 input-field">
                      <input id="new-your-name" name="new-your-name" type="text" v-model="signup.name">
                      <label for="new-your-name">Your name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="new-your-email" name="new-your-email" type="email" v-model="signup.email">
                      <label for="new-your-email">E-mail address</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="new-your-password" name="new-your-password" type="password" v-model="signup.password">
                      <label for="new-your-password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="password-confirmation" name="password-confirmation" type="password" v-model="signup.repassword">
                      <label for="password-confirmation">Re-Password</label>
                  </div>
                </div>
                <div class="row center">
                  <button class="btn blue" id="create-account-and-list" v-on:click="submitSignUp">Create Account</button>
                  <p id="create-account-and-list-message" class="materialize-red-text lighten-2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row center">
          <a class="modal-trigger" href="#terms-modal">Terms and conditions</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Conditions modal for signup-->
  <div id="terms-modal" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 class="header center orange-text"> Terms and conditions</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis non velit maximus, non iaculis dui ultrices. Donec eu lobortis ante, ut semper est. Pellentesque mattis, erat non facilisis bibendum, sem sem efficitur leo, eu dignissim ante erat sed tortor. Mauris cursus faucibus massa. Proin vitae dictum metus, sit amet posuere diam. Donec scelerisque, erat ac malesuada facilisis, velit nulla laoreet mi, vel vulputate est augue in metus. Nulla interdum quam sed iaculis venenatis. Nullam quis nibh at mi consectetur tempor ac sed dui. Maecenas id justo ut nibh mollis dictum eu vel odio. Sed sit amet sapien sed ante commodo auctor. In in venenatis felis, a faucibus massa. In vitae libero ipsum. Etiam id varius lorem. Aenean luctus diam sapien, nec placerat purus sodales eget. Ut scelerisque maximus elit non facilisis.</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Ok</a>
    </div>
  </div>

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div id="about-footer" class="col l6 s12">
          <h5 class="white-text">Friends in Town&trade;</h5>
          <p class="grey-text text-lighten-4">We are a team of undergraduate students working on this project, BLA BLA BLA...</p>
        </div>

        <div id="social" class="col l6 s12">
          <h5 class="white-text">Connect with us at:</h5>
          <a class="white-text" href="#!"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a class="white-text" href="#!"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a class="white-text" href="#!"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a class="white-text" href="#!"><i class="fa fa-medium" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container center">
        &copy; 2016 Copyright - All rights reserved to 
        <a class="orange-text text-lighten-3" href="http://materializecss.com">Friends in Town&trade;</a>
      </div>
    </div>
  </footer>
</template>

<script>
  import {router} from '../../main'

  export default {
    data () {
      return {
        signin: {
          "email":"",
          "password":""
        },
        signup: {
          "name":"",
          "email":"",
          "password":"",
          "repassword":""
        }
      }
    }, 

    /**
      * Method called to log in a user in the app.
      * Event trigger: Click in Login button.
      */
    methods: {
      submitAuth : function(event) {
        this.$http.get('http://64.137.233.224:3000/loginemail/' 
          + this.signin.email + '/' 
          + this.signin.password + '/webapp').then((response) => {
            // Success callback
            alert('User logged in!');
            console.log(response);
          }, (response) => {
          // Error callback
          alert('Ops, something wrong is not right!');
        });
      },

      /**
       * Method called to create a new user in the app.
       * Event trigger: Click in the "CREATE ACCOUNT" button.
       */
      submitSignUp : function(event) {
        //@TODO: Add method to see if password == repassword and hash
        // the password
        this.$http.post('http://64.137.233.224:3000/createaccountemail/'
          + this.signup.email + '/'
          + this.signup.password + '/'
          +this.signup.name).then((response) => {
            // Success callback
            alert('Success creating new account');
          }, (response) => {
            alert('Ops, something wrong is not right!');
          });
      }
    }
  }
</script>]