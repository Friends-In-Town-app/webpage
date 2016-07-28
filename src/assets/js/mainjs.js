// Javascript Constants
var FBKEY = '291979681134911';
var GOOGLEKEY = 'AIzaSyABcYOCvykYyyPHmQf4-J-XGMHfCPkGX2I';
var GOOGLEAPIVERSION = '3.24';

// Jquery Loads
(function($){
  $(function(){

    // Modal settings of unauthhome
	$(document).ready(function(){
    	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    	$('.modal-trigger').leanModal();
    	// Dropdown
    	$(".dropdown-button").dropdown();

    	// Side-Nav
    	$('.button-collapse').sideNav({
    		menuWidth: 300, // Default is 240
    		edge: 'right', // Choose the horizontal origin
    		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    	});

	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.fbAsyncInit = function() {
	FB.init({
		appId      : FBKEY,
		xfbml      : true,
		version    : 'v2.6'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));