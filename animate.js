$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});
	


$(document).ready(function(){
	var on=true;
	
		$('#wordpress').click(function(){
			if(on){

			$('#portfolio').css({
				'height': '1000px'
				});

			on=false;
			}


			else{
				console.log('its false')

				$('#portfolio').css({
					'height': '600px'
					});
				on=true;
			}
			

		});
		


	



});






