
$(function(){
   'use strict';
////////////////////////////// select list
 $('.nav2 .select').click(function()
    {
     $('.select-list').fadeToggle(100);
   });
$('.nav2 .select,.select-list').hover(function()
  {
$('.select-list').fadeToggle(100);

});
/////////////////////////////scroll------------------
$(window).on('scroll',function(){
if($(this).scrollTop()>=500){
$('.nav2').addClass('on-scroll');
$('.on-scroll').slideDown();
  $('.nav1').addClass('hidden');
   $('.select-list').css('top','60px');
}
else{
  $('.nav2').removeClass('on-scroll');
$('.nav1').removeClass('hidden');
}
});
////////////////////////header

$(window).resize(function(){
  $('.header').height($(this).height());
});
$('.header').height($(window).height());

(function bg_anim(){
$('.hesder-slider .active ').each(function(){

if(! $(this).is(':last-child')) {
$(this).delay(2000).fadeOut(300,function(){
$(this).removeClass('active').next().addClass('active').fadeIn(300);
  bg_anim();
});
}
else{
  $(this).delay(1000).fadeOut(600,function(){
    $(this).removeClass('active').prev().addClass('active').fadeIn(600);
    bg_anim();
  });
}
});}());

///////////////animaton/////////////////////////


$(window).on('scroll',function(){
if($(this).scrollTop() >=330){
         $('.hidden').fadeIn(1000);
  }});


/////////////////product hover////////////////////////

$('.Our-Products .pro-row>div').hover(function(){
$(this).children('.overlay ,.price').fadeToggle();
});
/////////////////////////////////////////////////////timer///////////////

   $('.Best-Price .timer .days').append('<span>109</span>'+'DAYS');
     $('.Best-Price .timer .hours').append('<span>24</span>'+'HOURS');
      $('.Best-Price .timer .minutes').append('<span>60</span>'+'MINUTES');
          $('.Best-Price .timer .seconds').append('<span>60</span>'+'seconds');
var timer=setInterval(function(){

  var d=parseInt($('.Best-Price .timer .days span').html());
  var h=parseInt($('.Best-Price .timer .hours span').html());
  var m=parseInt($('.Best-Price .timer .minutes span').html());
var s=parseInt($('.Best-Price .timer .seconds span').html());
if(s!=0) {
  s=$('.Best-Price .timer .seconds span').html(s-1);

    }
    else {
      s=60
      $('.Best-Price .timer .seconds span').html(s);

        if(m!=0)   { $('.Best-Price .timer .minutes span').html(m-1);}
         else{
           m=60;
           $('.Best-Price .timer .minutes span').html(m);


      if(h!=0)  { $('.Best-Price .timer .hours span').html(h-1); }

          else {
            h=24;
            $('.Best-Price .timer .hours span').html(h);

         if(d!=0) {  $('.Best-Price .timer .days span').html(d-1) }
         else {
           clearInterval(timer);

           $('.Best-Price .timer ').html('finished');
         }  }   }  } },1000);

         $('.bxslider').bxSlider();


$('.icon').click(function(){
$('body,html').animate({
scrollTop:0
},1000);
});


















});
