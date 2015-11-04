$(window).scroll(function(){


	var wScroll= $(this).scrollTop();
	

	$('.moving-header').css({
		'transform': 'translate(0px,'+ wScroll /2 + '%)'

		});


});
	

$(document).ready(function(){
	var on=true;

	if(on){
		$('#wordpress').click(function(){
			$('#portfolio').css({
			'height': '1000px'
				});
			on=false;
			}
		}


	else{
		$('#wordpress').click(function(){
			$('#portfolio').css({
				'height': '600px'
				});
			on=true;

			}
		}



	});






});