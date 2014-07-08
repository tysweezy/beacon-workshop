$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	nav: true,
  	slideSpeed: 300,
  	paginationSpeed: 400,
  	items: 1,
  	navRewind: false,
  	autoplayHoverPause: true,
  	autoplay: 7000,
  	navText: ['&#x2190;','&#8594;']
  });



 $('#jwt-quote').show();
  $('#best-quote').hide();
  $('#dish-quote').hide();
  $('#yougov-quote').hide();
  

 $('#jwt').click(function(){
   $('#jwt-quote').show();
  $('#best-quote').hide();
  $('#dish-quote').hide();
  $('#yougov-quote').hide();
  
 });
  
 $('#bestwestern').click(function(){
   $('#best-quote').fadeIn();
    $('#dish-quote').hide();
  	$('#yougov-quote').hide();
  	$('#jwt-quote').hide();


 });
  
 $('#dish').click(function(){
   $('#dish-quote').fadeIn();
  	$('#yougov-quote').hide();
  	$('#jwt-quote').hide();
  	$('#best-quote').hide();

 });

  $('#yougov').click(function(){
   $('#dish-quote').hide();
  	$('#yougov-quote').fadeIn();
  	$('#jwt-quote').hide();
  	$('#best-quote').hide();

 });
});