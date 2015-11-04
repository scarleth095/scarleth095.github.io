$(window).scroll(function(){


	var wScroll= $(this).scrollTop();

	$('div.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'



	});




//523
});