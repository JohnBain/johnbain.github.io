$(document).ready(function() {
	  $('.bigdog').hide();
	  $('.bigkitty').hide();
	  $('.bigfood').hide();
	  $('.bigmandela').hide();

	  $('#littledog').hover(
	  	function() {
	  	$('.bigdog').fadeIn(700).css("width", "100%")
	  }, function() {
	  	$('.bigdog').fadeOut(500);
	  });

	  $('#littlekitty').hover(
	  	function() {
	  	$('.bigkitty').fadeIn(700).css("width", "100%")
	  }, function() {
	  	$('.bigkitty').fadeOut(500);
	  });

	  $('#littlefood').hover(
	  	function() {
	  	$('.bigfood').fadeIn(700).css("width", "100%")
	  }, function() {
	  	$('.bigfood').fadeOut(500);
	  });

	  $('#littlemandela').hover(
	  	function() {
	  	$('.bigmandela').fadeIn(700).css("width", "100%")
	  }, function() {
	  	$('.bigmandela').fadeOut(500);
	  });


});
