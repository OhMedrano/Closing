$(document).ready(function() {

	var drops = $('.dropdown-toggle'); //Used to reference possible
									   // dropdown menus, will 
									   // add more if needed.
									   // Ref: DROP01
	var clicktru = false; /* This is used for the dropdown menu.
							Ref: P1 */


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
});