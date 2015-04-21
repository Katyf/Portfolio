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
  $('#send-email').on('click', function(){
    $('#contact-form').hide();
  });

 $('footer').hide();
 $(window).scroll(function() {
    var yPos = window.pageYOffset;
    var scrollPos = 400;
    var home = 400;
    var about = 800;
    var projects = 1200;
    var contact = 1600;

  if(yPos > scrollPos) {
     $('footer').fadeIn();
  } else {
    $('footer').hide();
  }

  if(about > yPos > home){
    $('#home-btn').addClass('colored');
    $('#a-home-btn').addClass('white');
  } else {
    $('#home-btn').removeClass('colored');
    $('#a-home-btn').removeClass('white');
  }
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
