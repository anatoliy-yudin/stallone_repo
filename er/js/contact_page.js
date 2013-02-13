$(window).load(function() {
	$('#address_details .row').click(function(e) {
		$('#address_details .row.marked').removeClass('marked');
        $(this).addClass('marked');
    });
});