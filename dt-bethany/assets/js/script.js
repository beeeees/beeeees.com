//scroll css animation 
$(window).scroll(function() {
		$('#icons').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});	

//video and logo toggle
$(document).ready(function(){

	$('#video_click').click(function(e){
		e.preventDefault();
		$('.logo').toggle();
		$('#video_content').toggle();
	});
	
	$('input#mce-EMAIL').focus(function() {
        $(this).val('');
      });
	
});	

