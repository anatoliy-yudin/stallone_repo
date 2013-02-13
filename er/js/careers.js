		var latRome = 41.904002;
		var lngRome = 12.493649;
		var latMilan = 45.456533;
		var lngMilan = 9.199212;
		var latLondon = 51.510826;
		var lngLondon = -0.141986;
		
		function rome_map() {
		   var latlng = new google.maps.LatLng(latRome, lngRome);
		   var myOptions = {
			   zoom: 17,
			   center: latlng,
			   mapTypeId: google.maps.MapTypeId.ROADMAP
		   };
		   var map = new google.maps.Map(document.getElementById("map_canvas_rome"), myOptions);
		   var image = 'images/elements/pin.png';
		   var marker = new google.maps.Marker({
							   position: latlng,
							   map: map,
							   title:"Hello World!",
							   icon: image
		   });
		};
		
		function milan_map() {
		   var latlng = new google.maps.LatLng(latMilan, lngMilan);
		   var myOptions = {
			   zoom: 17,
			   center: latlng,
			   mapTypeId: google.maps.MapTypeId.ROADMAP
		   };
		   var map = new google.maps.Map(document.getElementById("map_canvas_milan"), myOptions);
		   var image = 'images/elements/pin.png';
		   var marker = new google.maps.Marker({
							   position: latlng,
							   map: map,
							   title:"Hello World!",
							   icon: image
		   });
		};
		
		function london_map() {
		   var latlng = new google.maps.LatLng(latLondon, lngLondon);
		   var myOptions = {
			   zoom: 17,
			   center: latlng,
			   mapTypeId: google.maps.MapTypeId.ROADMAP
		   };
		   var map = new google.maps.Map(document.getElementById("map_canvas_london"), myOptions);
		   var image = 'images/elements/pin.png';
		   var marker = new google.maps.Marker({
							   position: latlng,
							   map: map,
							   title:"Hello World!",
							   icon: image
		   });
		};

	function maps_popup() {
		$('#office_rome_map').click(function() {
			$('#office_rome_map_wrapper').fadeIn(1200);
			var hCoord = ($(window).width()-$('#office_rome_map_popup').innerWidth())/2;
			var vCoord =  ($(window).height()-$('#office_rome_map_popup').innerHeight())/2;
			$('#office_rome_map_popup').css({'left':hCoord,'top':vCoord}).fadeIn(600,function(){
				rome_map();
			});
			return false;
		});
		$('#office_rome_map_close').click(function() {
			$('#office_rome_map_popup').fadeOut(600);
			$('#office_rome_map_wrapper').fadeOut(1200);
			return false;
		});
		
		$('#office_milan_map').click(function() {
			$('#office_milan_map_wrapper').fadeIn(1200);
			var hCoord = ($(window).width()-$('#office_milan_map_popup').innerWidth())/2;
			var vCoord =  ($(window).height()-$('#office_milan_map_popup').innerHeight())/2;
			$('#office_milan_map_popup').css({'left':hCoord,'top':vCoord}).fadeIn(600,function(){
				milan_map();
			});
			return false;
		});
		$('#office_milan_map_close').click(function() {
			$('#office_milan_map_popup').fadeOut(600);
			$('#office_milan_map_wrapper').fadeOut(1200);
			return false;
		});
		
		$('#office_london_map').click(function() {
			$('#office_london_map_wrapper').fadeIn(1200);
			var hCoord = ($(window).width()-$('#office_london_map_popup').innerWidth())/2;
			var vCoord =  ($(window).height()-$('#office_london_map_popup').innerHeight())/2;
			$('#office_london_map_popup').css({'left':hCoord,'top':vCoord}).fadeIn(600,function(){
				london_map();
			});
			return false;
		});
		$('#office_london_map_close').click(function() {
			$('#office_london_map_popup').fadeOut(600);
			$('#office_london_map_wrapper').fadeOut(1200);
			return false;
		});
	};

$(window).load(function(){
	$('#map_canvas_rome, #map_canvas_milan, #map_canvas_london').css('width',($(window).width())*0.6).css('height',($(window).height())*0.6);
	commonHeight = $('#careers_page .right_bar').height();
	$('#careers_page .left_bar').css('height',commonHeight);
	maps_popup();
});



