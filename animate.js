$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});
	


$(document).ready(function(){

	$('#mlh-stuff').hide();
	$('wordpress-stuff').hide();
	$('folder-stuff').hide();



	var on=true;
	
		$('#wordpress').click(function(){
			if(on){

			$('#portfolio').css({
				'height': '1000px'
				});
			$('wordpress-stuff').show();
			$('#mlh-stuff').hide();
			$('folder-stuff').hide();


			on=false;
			}


			else{
				console.log('its false')

				$('#portfolio').css({
					'height': '600px'
					});
				$('#mlh-stuff').hide();
				$('wordpress-stuff').hide();
				$('folder-stuff').hide();
				on=true;
			}
			

		});

		$('#mlh').click(function(){
			if(on){

			$('#portfolio').css({
				'height': '1000px'
				});

		
			$('#mlh-stuff').show();
			$('wordpress-stuff').hide();
			$('folder-stuff').hide();
			

			on=false;


			}


			else{
				console.log('its false')

				$('#portfolio').css({
					'height': '600px'
					});
				$('#mlh-stuff').hide();
				$('wordpress-stuff').hide();
				$('folder-stuff').hide();
				on=true;
			}
			

		});


		$('#folder').click(function(){
			if(on){

			$('#portfolio').css({
				'height': '1000px'
				});
			$('#mlh-stuff').hide();
			$('wordpress-stuff').hide();
			$('folder-stuff').show();

			on=false;
			}


			else{
				console.log('its false')

				$('#portfolio').css({
					'height': '600px'
					});
				$('#mlh-stuff').hide();
				$('wordpress-stuff').hide();
				$('folder-stuff').hide();
				on=true;
			}
			

		});



		


	



});






