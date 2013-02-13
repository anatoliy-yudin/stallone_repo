function top_4() {
	screenWidth = $(window).width();
	itemWidth = parseInt(screenWidth/4);
	$('.top_4_item').each(function() {
        $(this).css('width',itemWidth);
		$(this).find('.dimed_lay ul').css('width',itemWidth-50);
    });
	$(window).resize(function() {
        screenWidth = $(window).width();
		itemWidth = parseInt(screenWidth/4);
		$('.top_4_item').each(function() {
			$(this).css('width',itemWidth);
			$(this).find('.dimed_lay ul').css('width',itemWidth-50);
		});
    });
};



$(document).ready(function(){
	
	top_4();
	
	$('.top_4_item').mouseover(function() {
        $(this).find('.dimed_lay').show();
    });
	
	$('.top_4_item').mouseout(function() {
        $(this).find('.dimed_lay').hide();
    });
	
});