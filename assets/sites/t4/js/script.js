
$(document).ready(function(){
			
	//removes bottom border on music downloads table		
			
	$('tr:last-child').addClass('last');	
	
	$('ul#t_nav li:last-child').addClass('last');	
	
	// Music genre slider thing on logged in welcome page 
	
	
		$('.jazz-tab').click(function (e) {			
			$('#classical, #latin, #rb, #pop, #hiphop, #marching').hide();
    		$('#jazz').fadeToggle('slow');
			e.preventDefault();
   		});

		$('.classical-tab').click(function (e) {
			$('#jazz, #latin, #rb, #pop, #hiphop, #marching').hide();
    		$('#classical').fadeToggle('slow');
			e.preventDefault();
   		});
		
		$('.latin-tab').click(function (e) {
			$('#jazz, #classical, #rb, #pop, #hiphop, #marching').hide();
    		$('#latin').fadeToggle('slow');
			e.preventDefault();
   		});
	
		$('.rb-tab').click(function (e) {
			$('#jazz, #latin, classical, #pop, #hiphop, #marching').hide();
    		$('#rb').fadeToggle('slow');
			e.preventDefault();
   		});
	
		$('.pop-tab').click(function (e) {
			$('#jazz, #latin, #classical, #rb, #hiphop, #marching').hide();
    		$('#pop').fadeToggle('slow');
			e.preventDefault();
   		});
		
		$('.hiphop-tab').click(function (e) {
			$('#jazz, #latin, #classical, #rb, #pop, #marching').hide();
    		$('#hiphop').fadeToggle('slow');
			e.preventDefault();
   		});
	
		$('.marching-tab').click(function (e) {
			$('#jazz, #latin, #classical, #rb, #pop, #hiphop').hide();
    		$('#marching').fadeToggle('slow');
			e.preventDefault();
   		});
			
		
		
		//portfolio notice 

	     $(window).load(function(){
        $('#myModal2').modal('show');
    	});
		
		
		
		
});	


