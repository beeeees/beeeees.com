(function($, window, undefined){
  var MainScripts = {
    elements: {},
    selectors: {
      body: 'body',
      effect: '.effect',
    },

    _bindEvents: function() {
      var self = this;

      $(window).on('scroll', function(){ //on scroll
        self.animation();
       });
    },


    _getElements: function(){
      for( var key in this.selectors ) {
          this.elements[key] = $( this.selectors[key] );
      }
      this.elements.body = $('body');
      this.elements.window = $(window);
    },

    animation: function(){
      //Animation classes are triggered at certain scroll points
      var self = this;
      if (self.elements.effect.length) {
        var scrollTop = self.elements.window.scrollTop();
        var windowHeight = self.elements.window.height();
        var effectOffset = self.elements.effect.offset().top;
        var difference = effectOffset - windowHeight;
        if( scrollTop > difference ) {
          self.elements.effect.addClass('visible');
        }
      }

      $('.home article').addClass('visible');

    },

    initialize: function(){
      this._getElements();
      this._bindEvents();
      this.animation();
    }
  }; // MainScripts

  // Send to global namespace
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });


})(jQuery, window, null);
