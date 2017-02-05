(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FireShell



      console.log('ready');

      $(window).load(function() {
        // Animate loader off screen
        $('.preload-container').fadeOut('slow');
        $('body').removeClass('noscroll');
      });

      $('.button-collapse').sideNav();

      $('.scrollspy').scrollSpy();


      $('.slider').slider({full_width: true});

      $('.parallax').parallax();


  });

})(jQuery, window, document);
