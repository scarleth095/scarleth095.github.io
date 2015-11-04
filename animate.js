$(window).scroll(function(){


	var wScroll= $(this).scrollTop();

	$('.move-up').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'



	});




//523
});