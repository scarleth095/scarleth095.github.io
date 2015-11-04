$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	console.log(wScroll)

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'



	});

	
	
	$('.center-text').css({
		'transform': 'translate(0px,'+ (wScroll-527) /4 + '%)'
		});
	


	




//523
});