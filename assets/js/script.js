$(document).ready(function() {
	initSideNav()
	initSlider()
	initParallax()

	$('#idsomos').click(function() {
		alert("funciona")
	})
})

function initSideNav() {
	$(".button-collapse").sideNav();
}

function initSlider() {
	$('.slider').slider({full_width: true, indicators: false});
}

function initParallax() {
	$('.parallax').parallax();
}