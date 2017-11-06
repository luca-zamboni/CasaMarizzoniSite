var lightbrown = "#eecaa2";
var darkbrown = "#5d3713";
var grigio = '#322d28';

$(document).ready(function() {


	$(".parallax-slider").parallaxSlider({

		speedSlide: 3000,
		speedParallax: 0.5,
		description: true

	});

	initPromotionCircle();
	initNavBar();

});

function initPromotionCircle() {

	$(".promotion-cicle").mouseover(function() {
		TweenMax.to($(".promotion-cicle"), 1, {
			boxShadow: "inset 0px 0px 0px 100px " + lightbrown,
			cursor: "pointer",
			color: grigio,
			ease: Bounce.easeOut
		});
		TweenMax.to($(".promotion-cicle"), 0.5, {
			border: "3px solid " + darkbrown
		});
	});

	$(".promotion-cicle").mouseout(function() {
		TweenMax.to($(".promotion-cicle"), 1, {
			boxShadow: "inset 0px 0px 0px 0px  " + darkbrown,
			color: grigio,
			ease: Bounce.easeOut
		});
		TweenMax.to($(".promotion-cicle"), 0.5, {
			border: "3px solid #fff",
		});
	});
}

///// Initialize the navBar
function initNavBar() {

	var winHeight = $(window).height();

	var navbar = $(".navbar-default");

	var elem = $(".navbar-default .navbar-nav>li>a");
	var div = elem.find("div");
	var initialOffset = navbar.offset().top;

	$(window).scroll(function() {
		console.log("asd");
		if ($(window).width() > 992) {
			var scrolled = $(window).scrollTop();
			if (scrolled > initialOffset) {
				navbar.css("position", "fixed");
				navbar.css("top", "0");
				navbar.css("bottom", "auto");
			} else {
				navbar.css("position", "absolute");
				navbar.css("top", "auto");
				navbar.css("bottom", "0");
			}

		}
	});
}
