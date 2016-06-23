(function($){
  $(function(){

    $('.button-collapse').sideNav();

    // Modal settings of unauthhome
	$(document).ready(function(){
    	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    	$('.modal-trigger').leanModal();
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.fbAsyncInit = function() {
	FB.init({
		appId      : '291979681134911',
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