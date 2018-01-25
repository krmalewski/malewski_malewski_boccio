$(document).ready(function() {

	console.log("loading")

	// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.nav').offset().top;

 	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('.nav').addClass('sticky');
	        $('.nav-offset').addClass('nav-top-65');
	        $('.nav-offset').removeClass('nav-top-0');


	    } else {
	        $('.nav').removeClass('sticky'); 
	        $('.nav-offset').removeClass('nav-top-65'); 
	        $('.nav-offset').addClass('nav-top-0'); 


	    }
	};

		stickyNav();
		// and run it again every time you scroll
		$(window).scroll(function() {
			stickyNav();
		});

		$(".navbar-nav").find("a").click(function(e) {
		    e.preventDefault();
		    var section = $(this).attr("href");
		    $("html, body").animate({
		        scrollTop: $(section).offset().top
		    });
		});

	});