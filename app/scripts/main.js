'use strict';

$(document).ready(function(){


$('#web').on('click', function(){
  $('#web').addClass('active');
  $('#design').removeClass('active');
  $('.design .project').each(function() {
     $(this).hide();
   });
  $('.web .project').each(function(i) {
     $(this).delay(400*i).fadeIn(1000);
   });
});

$('#design').on('click', function(){
  $('#design').addClass('active');
  $('#web').removeClass('active');
  $('.web .project').each(function() {
     $(this).hide();
   });
  $('.design .project').each(function(i) {
     $(this).delay(300*i).fadeIn(500);
   });
});

$('.web .project').each(function(i) {
     $(this).delay(300*i).fadeIn(500);
   });


  $('#contact-form').hide();

  $('.show-form').on('click', function(){
    $('#contact-form').slideDown();
  });

  // scolling
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top,
      }, 800, 'swing', function() {
          window.location.hash = target;
      });
  });
});
