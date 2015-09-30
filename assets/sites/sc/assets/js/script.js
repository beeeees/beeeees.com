
$(document).ready(function(){
		
			
	//client voyages hover state		


	if ( $('body').hasClass('home') ) {
				
		$('.hover').hide();	
				
		$('#client_voyages li').hover(		
			function() {$(this).find(".hover").fadeIn('slow');	},
			function() {$(this).find(".hover").fadeOut('slow');	}		
		);	
		
	
		//instagram
	
	
		 $('#slideshow').embedagram({
	            instagram_id: 14376561, 
	            thumb_width: 306,
	            success: function (){ $('#slideshow').jcarousel() }, 
	            limit: 1
	        });		
	      
		
		//testimonial carousel
	      
		$('.carousel').carousel({
	    interval: 7000
	    });

		//portfolio notice 

	     $(window).load(function(){
        $('#myModal2').modal('show');
    	});
     
      
	}; // end home 
    

//inside pages
    
	// parallax 
		// Cache the Window object
			$window = $(window);
			
			// Cache the Y offset and the speed of each sprite
			$('[data-type]').each(function() {
			  $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
			  $(this).data('speed', $(this).attr('data-speed'));
			});
			
			// For each element that has a data-type attribute
			$('header[data-type="background"]').each(function(){
			
			// Store some variables based on where we are
			var $self = $(this),
				offsetCoords = $self.offset(),
				topOffset = offsetCoords.top;
			
			$(window).scroll(function(){
			
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
			( (topOffset + $self.height()) > $window.scrollTop() ) ) {
			
			  // Scroll the background at var speed
			  // the yPos is a negative value because we're scrolling it UP!
			  var yPos = -($window.scrollTop() / $self.data('speed'));
			
			  // If this element has a Y offset then add it on
			  if ($self.data('offsetY')) {
				yPos += $self.data('offsetY');
			  }
			
			  // Put together our final background position
			  var coords = '50% '+ yPos + 'px';
			
			  // Move the background
			  $self.css({ backgroundPosition: coords });
			
			  }; // in view
			
		}); // window scroll
			
		});	// each data-type
   	
	
		//blog entries hover state
		
		$('.blog_hover').hide();			
				
		$('#blog_entries li').hover(		
			function() {$(this).find(".blog_hover").show();	},
			function() {$(this).find(".blog_hover").hide();	}		
		);	
		
		
 		
	//contact drop down 	
	
		$('#contact_dropdown').hide();
		
		$('.help_btn').click(function(e){
			$('#contact_dropdown').slideToggle(400);
			e.preventDefault();
		});
	
	
	// Stick the #nav to the top of the window
	
	    var nav = $('#navWrap');
	    var navHomeY = nav.offset().top + 308;
	    var isFixed = false;
	    var $w = $(window);
	    $w.scroll(function() {
	        var scrollTop = $w.scrollTop();
	        var shouldBeFixed = scrollTop > navHomeY;
	        if (shouldBeFixed && !isFixed) {
	            nav.css({
	                position: 'fixed',
	                top: 0,
	                left: 0,
	                width: nav.width()
	            });
	            nav.addClass('fullnav');
	
	            
	            isFixed = true;
	        }
	        else if (!shouldBeFixed && isFixed)
	        {
	            nav.css({   
	            });
	            
	            isFixed = false;
	        }
	    });




});	


 
