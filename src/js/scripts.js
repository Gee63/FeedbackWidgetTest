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

    /*feedback widget JS --Start*/

    $('.modal').modal();

    /*feedback widget JS --End*/

  });

})(jQuery, window, document);
