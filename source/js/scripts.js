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

    soundcloudAPI: function(){

      SC.initialize({
        client_id: '5fac9a802c6eb0c4933f373e2c716220'
      });

      // var UserID = 10996624;

    //using experimental API call to grab reposts. if this stops working, next best thing is below
      SC.get('/e1/users/10996624/sounds').then(function(sound) {
        var title = sound[0].track.title;
        var artist = sound[0].track.title;
        var url = sound[0].track.permalink_url;
        $("#soundcloud p").append(
          "<a href='"+ url +"'>"+title+"</a></p>")
      });

      //grabs first song in a playlist

      // SC.get('/playlists/5913006').then(function(playlist) {
      //   var title = playlist.tracks[0].title;
      //   var artist = playlist.tracks[0].title;
      //   var url = playlist.tracks[0].permalink_url;
      //   $("#soundcloud p").append(
      //     "<a href='"+ url +"'>"+title+"</a></p>")
      // });

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
      this.soundcloudAPI();

    }
  }; // MainScripts

  // Send to global namespace
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });


})(jQuery, window, null);
