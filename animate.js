$(window).scroll(function(){


	var wScroll= $(this).scrollTop();

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'



	});

	$('.center-text').css({
		'transform': 'translate(0px,'+ wScroll /4 + '%)'



	});




//523
});