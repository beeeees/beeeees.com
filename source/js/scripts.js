(function($, window, undefined){
  var MainScripts = {
    elements: {},
    selectors: {
      body: 'body',

    },

    _bindVendors: function(){
    var self = this;

    },

    _bindEvents: function() {
      var self = this;
      var sections;
      var windowScrollTop = $(window).scrollTop();

      $(window).on('resize', function(){  // on window resize

       });

      $(window).on('scroll', function(y){ //on scroll

       });

      $('.role').addClass('visible');

    },

    _getElements: function(){
      for( var key in this.selectors ) {
          this.elements[key] = $( this.selectors[key] );
      }
      this.elements.body = $('body');
      this.elements.window = $(window);
    },


    initialize: function(){
      this._getElements();
      this._bindVendors();
      this._bindEvents();

    }
  }; // MainScripts

  // Send to global namespace
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });


})(jQuery, window, null);
