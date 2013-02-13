$(document).ready(function(){
	
	/* Dropdown header menu */
	$('#header_navi').mouseover(function() {
        $('#drop_down_box').stop(true, true).slideDown(350);
		$('#navi_btn').addClass('navi_btn_active');
    });
	$('#header_navi').mouseleave(function() {
		$('#drop_down_box').stop(true, true).slideUp(100);
		$('#navi_btn').removeClass('navi_btn_active');
	});
	

	/* Underlining Restaurants Names When Hover On Food Image */
	$('.food_image').mouseover(function() {
		$(this).parent().parent().find('.info_box .row_name_price a h2').css('text-decoration','underline');
	});
	$('.food_image').mouseout(function() {
		$(this).parent().parent().find('.info_box .row_name_price a h2').css('text-decoration','none');
	});
	

	
});