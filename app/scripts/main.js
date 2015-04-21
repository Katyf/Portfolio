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
    var about = 1000;
    var projects = 1600;
    var contact = 2200;

  if(yPos > scrollPos) {
     $('footer').fadeIn();
  } else {
    $('footer').hide();
  }

  if(yPos > home){
    $('#home-btn').addClass('colored');
    $('#a-home-btn').addClass('white');
  } else {
    $('#home-btn').removeClass('colored');
    $('#a-home-btn').removeClass('white');
  }
  if(yPos > about){
    $('#about-btn').addClass('colored');
    $('#a-about-btn').addClass('white');
    $('#home-btn').removeClass('colored');
    $('#a-home-btn').removeClass('white');
  } else {
    $('#about-btn').removeClass('colored');
    $('#a-about-btn').removeClass('white');
  }
  if(yPos > projects){
    $('#about-btn').removeClass('colored');
    $('#a-about-btn').removeClass('white');
    $('#projects-btn').addClass('colored');
    $('#a-projects-btn').addClass('white');
  } else {
    $('#projects-btn').removeClass('colored');
    $('#a-projects-btn').removeClass('white');
  }
  if(yPos > contact){
    $('#projects-btn').removeClass('colored');
    $('#a-projects-btn').removeClass('white');
    $('#contact-btn').addClass('colored');
    $('#a-contact-btn').addClass('white');
  } else {
    $('#a-contact-btn').removeClass('white');
    $('#contact-btn').removeClass('colored');
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
