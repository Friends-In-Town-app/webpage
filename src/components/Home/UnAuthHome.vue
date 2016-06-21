<template>
  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a class="modal-trigger" href="#signin-modal">Sign in</a></li>
        <li><a href="#signup">Sign up</a></li>
        <li><a class="modal-trigger" href="#">About us</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a class="modal-trigger" href="#">Sign in</a></li>
        <li><a href="#signup">Sign up</a></li>
        <li><a class="modal-trigger" href="#">About us</a></li>
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

  <!-- Modal Structure -->
  <div id="signin-modal" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Sign up</a>
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
    <br><br>
    
    <!-- Create New account section -->
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
                      <input id="new-your-name" name="new-your-name" type="text">
                      <label for="new-your-name">Your name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="new-your-email" name="new-your-email" type="email">
                      <label for="new-your-email">E-mail address</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="new-your-password" name="new-your-password" type="password">
                      <label for="new-your-password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field">
                      <input id="password-confirmation" name="password-confirmation" type="password">
                      <label for="password-confirmation">Re-Password</label>
                  </div>
                </div>
                <div class="row center">
                  <button class="btn" id="create-account-and-list">Create Account</button>
                  <p id="create-account-and-list-message" class="materialize-red-text lighten-2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row center">
          <a href="/terms">Terms and conditions</a>
        </div>
      </div>
    </div>
  </div>

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
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