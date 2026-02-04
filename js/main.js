jQuery(document).ready(function($) {

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 10,
				autoplay: true,
		    margin: 20,
		    nav: true,
		    smartSpeed: 1000,
		    dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	stagePadding: 10,
	          items: 1
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 10,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 10,
	          items: 3
	        }
		    }
			});
		}
	};
	siteCarousel();
	
});