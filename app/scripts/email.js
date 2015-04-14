/*global $:false*/
'use strict';
var Portfolio = (function(){
  var apiHost;

  var init = function(){
    apiHost = 'https://localhost:3000';
    $('#contact-form').on('submit', sendContactForm);
  };

  var sendContactForm = function(event){
    event.preventDefault();
    $.ajax({
      url: apiHost + '/email',
      type: 'POST',
      data: {email: {
        sender: $('#sender').val(),
        message: $('#message').val()
      }},
    }).done(function(){
      console.log('done');
    }).fail(function(){
      console.log('error');
    });
    return false;
  };

  return {init: init};
})();

$(document).ready(function(){
  Portfolio.init();
});
