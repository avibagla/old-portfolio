// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
	$('.projects').mouseover(function(){
		$(this).children('img').css('-webkit-filter', 'none');
	});
	$('.projects').mouseout(function(){
		$(this).children('img').css('-webkit-filter', 'blur(15px)');
	});
});