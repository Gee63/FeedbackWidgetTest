(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FireShell

    console.log('ready');

    $(window).load(function () {
      // Animate loader off screen
      $('.preload-container').fadeOut('slow');
      $('body').removeClass('noscroll');
    });

    $('.button-collapse').sideNav();

    $('.scrollspy').scrollSpy();


    $('.slider').slider({full_width: true});

    $('.parallax').parallax();


    /*feedback widget JS --Start*/

    var modal = $('.modal'),
      fabButton = $('.fixed-action-btn'),
      scrolledToBottom = false,
      bounceInterval,
      scrolledToBottomCount = 0,
      modalClosedCount = 0;


    /*modal settings*/
    modal.modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          console.log('Ready');
          console.log(modal, trigger);

          /*clear animation if interval is set*/
          clearInterval(bounceInterval);

        },
        complete: function () {
          console.log('Closed');
          /*add 1 to the count of modal being closed... we dont want constant animation incase users get annoyed*/
          modalClosedCount = modalClosedCount + 1;

          if(modalClosedCount <= 1){

            /*add and remove the bounce animation to the floating action button*/
            bounceInterval = setInterval(function () {
              if (fabButton.hasClass('bounce')) {
                fabButton.removeClass('bounce');
              }
              else {
                fabButton.addClass('bounce');
              }
            }, 15000);

          }

        } // Callback for Modal close
      }
    );

    /*check if user has scrolled to bottom*/
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        console.log('bottom!');


        scrolledToBottom = true;
        scrolledToBottomCount = scrolledToBottomCount + 1;

        /*we only want do force the popup once hence === 1*/
        if (scrolledToBottom && scrolledToBottomCount === 1) {

          /*set bounce animation to trigger every 15 seconds*/
          setTimeout(function () {

            $('.fixed-action-btn').removeClass('hide');
            modal.modal('open');

          }, 3000);

        }

      }
    });

    /*feedback accordion setup*/
    $('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) {
        console.log('Open:' + el);
      }, // Callback for Collapsible open
      onClose: function(el) {
        console.log('Closed: ' + el);
      } // Callback for Collapsible close
    });


    /*feedback widget JS --End*/

  });

})(jQuery, window, document);
