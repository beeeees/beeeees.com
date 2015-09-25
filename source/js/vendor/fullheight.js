(function($){

  $.fn.fullHeight = function(){

    var self = this;
    var windowHeight = window.innerHeight;

    var fullHeightFunction = function(){
      return self.css({
        'min-height': windowHeight
      });
    }

    $(window).on('resize', function(){
      windowHeight = window.innerHeight;
      fullHeightFunction();
    });

    fullHeightFunction();
    return self;

  }

})(jQuery);
