$(document).ready(function() {

	var drops = $('.dropdown-toggle'); //Used to reference possible
									   // dropdown menus, will 
									   // add more if needed.
									   // Ref: DROP01
	var clicktru = false; /* This is used for the dropdown menu.
							Ref: P1 */
	var linkedtru = $()




	$(drops).children().not('caret').hide();
	

	$(drops).click(function(event){
		event.preventDefault(); //Ref:P1 Used in here, give 
		if(!clicktru){			//	it a reference on what's 
			console.log('aye');		//		on and off
			$(this).children().not('caret').fadeIn();
			clicktru = true;
		} 
		else {
			console.log('nay');
			$(this).children().fadeOut();
			clicktru = false;
		}
	});

	$('#titleMenu li').on('click',function(event) {
		event.preventDefault();
	
		
		var jumbos = $('.jumbotron .container');
		var clickedDiv = $(this).attr('value');
		var activeClick = true;

		$('.highactive').removeClass('highactive');
		console.log(clickedDiv);
		$(clickedDiv).addClass('highactive');
		
		if(clickedDiv!='#home'){
			$('#jumboHome').hide();
		}




//	So what I want to do is change the content of th
// 	thing that says "Konditori" to whatever it is going to be.
// 	Such as, 
		

		
	});
});