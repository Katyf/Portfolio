"use strict";$(document).ready(function(){$("#web").on("click",function(){$("#web").addClass("active"),$("#design").removeClass("active"),$(".design .project").each(function(){$(this).hide()}),$(".web .project").each(function(a){$(this).delay(400*a).fadeIn(1e3)})}),$("#design").on("click",function(){$("#design").addClass("active"),$("#web").removeClass("active"),$(".web .project").each(function(){$(this).hide()}),$(".design .project").each(function(a){$(this).delay(300*a).fadeIn(500)})}),$(".web .project").each(function(a){$(this).delay(300*a).fadeIn(500)}),$("#contact-form").hide(),$(".show-form").on("click",function(){$("#contact-form").slideDown()}),$("#send-email").on("click",function(){$("#contact-form").hide()}),$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top},800,"swing",function(){window.location.hash=b})})});var Portfolio=function(){var a,b=function(){a="https://localhost:3000",$("#contact-form").on("submit",c)},c=function(b){return b.preventDefault(),$.ajax({url:a+"/email",type:"POST",data:{email:{sender:$("#sender").val(),message:$("#message").val()}}}).done(function(){console.log("done")}).fail(function(){console.log("error")}),!1};return{init:b}}();$(document).ready(function(){Portfolio.init()});