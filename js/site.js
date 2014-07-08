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
});