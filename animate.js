$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});
	

$(document).ready(function(){
	var on=true;

	if(on){
		console.log('its on')
		on=false;

		$('#wordpress').click(function(){
			

			$('#portfolio').css({
			'height': '1000px'
				});
			

			

			});
		}


	else{
		console.log('its false')
		on=true;
		$('#wordpress').click(function(){

			$('#portfolio').css({
				'height': '600px'
				});


			});
		}



});






