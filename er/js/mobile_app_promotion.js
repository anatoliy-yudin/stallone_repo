$(window).load(function() {
	$('#get_the_app_trigger').toggle(function() {
		$('#app_promotion_slide_down').slideDown(750, function() {
			$('#hand_iphone').delay(200).animate({right: -100}, 750, 'linear');
		});
	}, function() {
		$('#hand_iphone').animate({right: -2674}, 500, 'linear', function() {
			$('#app_promotion_slide_down').slideUp(750);
		});
	});
	/*$('#hand_iphone').delay(1000).animate({right: 400}, 1000, 'linear');*/
});