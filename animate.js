$(window).scroll(function(){


	var wScroll= $(this).scrollTop();

	$('.inside').css({
		'transform': 'translate(0px,'+ wScroll /3 + '%)'



	});




//523
});