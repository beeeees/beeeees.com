(function($, window, undefined){
  var MainScripts = {
    elements: {},
    selectors: {
      body: 'body',
      effect: '.role',
    },

    _bindEvents: function() {
      var self = this;

      $(window).on('scroll', function(){ //on scroll
        self.animation();
       });
    },

    _APICalls: function(){

      SC.initialize({
        client_id: '5fac9a802c6eb0c4933f373e2c716220'
      });

      // var UserID = 10996624;

        SC.get('/playlists/5913006').then(function(playlist) {
          var title = playlist.tracks[0].title;
          var artist = playlist.tracks[0].title;
          var url = playlist.tracks[0].permalink_url;
          $("#soundcloud").append(
            "<p><a href='"+ url +"'>"+title+"</a></p>")
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

    },

    initialize: function(){
      this._getElements();
      this._bindEvents();
      this.animation();
      this._APICalls();

    }
  }; // MainScripts

  // Send to global namespace
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });


})(jQuery, window, null);
