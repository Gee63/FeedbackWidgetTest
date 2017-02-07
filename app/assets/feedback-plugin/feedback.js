/**
 * Created by guyweller on 17/02/07.
 */

$(document).ready(function(){

  /*feedback widget JS --Start*/

  var modal = $('.modal'),
    fabButton = $('.fixed-action-btn'),
    feedbackContainer = $('.feedback-container'),
    feedbackRequest = $('.feedback-request'),
    feedbackThankyou = $('.feedback-thankyou'),
    agreeButton = $('.agreeButton'),
    submitButton = $('.submitButton'),
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

        dataLayer.push({
          'event':'feedback_form_show'
        });

      },
      complete: function () {
        console.log('Closed');
        /*add 1 to the count of modal being closed... we dont want constant animation incase users get annoyed*/
        modalClosedCount = modalClosedCount + 1;

        if (modalClosedCount <= 1) {

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
    onOpen: function (el) {
      console.log('Open:' + el);
    }, // Callback for Collapsible open
    onClose: function (el) {
      console.log('Closed: ' + el);
    } // Callback for Collapsible close
  });

  /*agree to give feedback*/
  agreeButton.on('click', function () {
    feedbackContainer.removeClass('hide');
    feedbackRequest.addClass('hide');
    agreeButton.addClass('hide');
    submitButton.removeClass('hide');

    /*track agree button click*/
    dataLayer.push({
      'event':'feedback_form_agree'
    });

  });

  /*question selection values*/
  var attendedSwitchValue = false;


  $('#attendedSwitch').prop('checked', false);
  $('#attendedSwitch .lever').on('click', function () {
    attendedSwitchValue = !attendedSwitchValue;
    $('#attendedSwitch').prop('checked', attendedSwitchValue);
    /*console.log('attended before: ' + $('#attendedSwitch').prop('checked'));*/

    /*initiate textbox*/
    if(attendedSwitchValue){
      /*console.log('remove hide');*/
      $('#attendedTextArea').removeClass('hide');
    }
    else{
      /*console.log('add hide');*/
      $('#attendedTextArea').addClass('hide');
    }

  });


  /*initialize select dropdown*/
  $('select').material_select();

  /*track not now button*/
  $('.notNowButton').on('click', function(){
    dataLayer.push({
      'event':'feedback_form_not_now'
    });
  });

  /*after submit show thank you message*/
  function Thankyou(){
    feedbackContainer.addClass('hide');
    feedbackThankyou.removeClass('hide');
    $('.modal-footer .closeButton').removeClass('hide');
    submitButton.addClass('hide');
    $('.notNowButton').addClass('hide');
    $('.fixed-action-btn').addClass('hide');

  }
  /*track users answers on submit*/
  $('.feedBackSubmit').on('click', function(){

    var question1Text = $('.collapsible-body .question1').text(),
      question1Val = $('#artistSelectionRate').val(),
      question2Text = $('.collapsible-body .question2').text(),
      question2Val = $('#venueSelectionRate').val(),
      question3Text = $('.collapsible-body .question3').text(),
      question3Val = attendedSwitchValue.toString(),
      question3TextBox = $('#textarea1').val(),
      question4Text = $('.collapsible-body .question4').text(),
      question4Val = $('#valueSelect').val();

    dataLayer.push({
      'dl-action': question1Text,
      'dl-label': question1Val,
      'event': 'feedback_form_submit'
    });

    dataLayer.push({
      'dl-action': question2Text,
      'dl-label': question2Val,
      'event': 'feedback_form_submit'
    });

    dataLayer.push({
      'dl-action': question3Text,
      'dl-label': question3Val,
      'dl-event-comments': question3TextBox,
      'event': 'feedback_form_submit'
    });

    dataLayer.push({
      'dl-action': question4Text,
      'dl-label': question4Val,
      'event': 'feedback_form_submit'
    });

    new Thankyou();

  });

  /*feedback widget JS --End*/

});

