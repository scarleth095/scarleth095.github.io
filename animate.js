$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});

$(document).ready(function(){

	$('#wordpress').click(function(){
		$('#portfolio').css({
		'height': '1000px'

		});





	});






};)