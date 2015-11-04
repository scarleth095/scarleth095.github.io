$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});
	


$(document).ready(function(){
	//$(".hidden").hide();
	$('#mlh-stuff').hide();



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

		$('#mlh').click(function(){
			if(on){

			$('#portfolio').css({
				'height': '1000px'
				});

			//$(".hidden").show();
			$('#mlh-stuff').show();
			

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


		$('#folder').click(function(){
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






