$(document).ready(function() {
  var deck = new $.scrolldeck({
    buttons: '.nav-button',
    slides: '.slide',
    duration: 600,
    easing: 'easeInOutExpo',
	offset: 0
  });
});