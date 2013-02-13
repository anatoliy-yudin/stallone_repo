$(document).ready(function(){
	
	
	/* Custom Checkboxes */
	$(".jqtransform").jqTransform();

	
	/* Price Slider on Search Result page */
	$(function(){
	$("#price_slider").slider({
		range: true,
		min: 5,
		max: 150,
		values: [45,105],
		step: 5,
		slide: function( event, ui ) {
			$( "#price_slider_result_1" ).html( ui.values[0] );
			$( "#price_slider_result_2" ).html( ui.values[1] );
		},
		//this updates the hidden form field so we can submit the data using a form
		change: function(event, ui) {
			$('#hidden_min').attr('price_value_1', ui.values[0]);
			$('#hidden_max').attr('price_value_2', ui.values[1]);
			}
		});
	});
	
	
	/* Search Page Tabs Toggle */
	$('#toggle_link_left').click( function() {
			$(this).addClass('toggle_link_active');
			$('#toggle_link_right').removeClass('toggle_link_active');
			$('#search_page_tab_2').hide();
			$('#search_page_tab_1').show();
		}
	);
	
	$('#toggle_link_right').click( function() {
			$(this).addClass('toggle_link_active');
			$('#toggle_link_left').removeClass('toggle_link_active');
			$('#search_page_tab_1').hide();
			$('#search_page_tab_2').show();
			map_init();
		}
	);
	
	
	/* NO RESULT DEMONSTRATION! */
	$('#show_no_result_tab').click(function() {
        	$('#search_page_tab_1').hide();
			$('#search_page_tab_2').hide();
			$('#no_results_tab').show();
    });
	
	function map_init() {

        	// Creating a LatLng object containing the coordinate for the center of the map  
          var latlng = new google.maps.LatLng(41.906894,12.497809);  
          // Creating an object literal containing the properties we want to pass to the map  
          var options = {  
          	zoom: 18,
          	center: new google.maps.LatLng(41.906894,12.497809),
			disableDefaultUI: true,
         	mapTypeId: google.maps.MapTypeId.ROADMAP
          };    

          // Calling the constructor, thereby initializing the map  
          var map = new google.maps.Map(document.getElementById('sp_map_canvas'), options);  

          // Creating a marker
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.906894,12.497809), 
            map: map,
			icon: 'images/elements/pin.png',
            title: 'My workplace'
          });

          // Creating an InfowWindow          
          var infoBubble = new InfoBubble({
							content: '<div class="phoneytext"><h2>Via Dei Banchi Vecchi, 12900186, Roma</h2><h3 class="map_info_email">Email:&nbsp;<a href="#">info@ristoranteilpagliacio.com</a></h3><h3 class="map_info_phone">Phone:&nbsp;<span>+380672340235</span></h3><a href="http://www.ristoranteilpagliacio.com" target="_blank">www.ristoranteilpagliacio.com</a></div>',
							shadowStyle: 1,
							padding: 0,
							backgroundColor: "rgb(27, 29, 33)",
							borderRadius: 5,
							arrowSize: 10,
							borderWidth: 1,
							borderColor: "#2c2c2c",
							disableAutoPan: true,
							hideCloseButton: true,
							arrowPosition: 50,
							backgroundClassName: "phoney",
							arrowStyle: 0
						});

          google.maps.event.addListener(marker, "click", function() {
							if (infoBubble.isOpen())
								infoBubble.close();
							else
								infoBubble.open(map, marker);
						});
		  
	};

	/* Pagination toggle script */
	$('.pagination a').click(function(e) {
        thisItem = $(this).attr('rel');
		if (thisItem == 'left' || thisItem == 'right') {
			if (thisItem == 'left') {
				prevToggle = $('.pagination a.active').attr('rel');
				if (prevToggle != 1) {
					$('.pagination a[class=active]').removeClass('active');
					$('.pagination a[rel='+(--prevToggle)+']').addClass('active');
					return false;
				}
				else return false;
			}
			else {
				nextToggle = $('.pagination a.active').attr('rel');
				if (nextToggle != 5) {
					$('.pagination a[class=active]').removeClass('active');
					$('.pagination a[rel='+(++nextToggle)+']').addClass('active');
					return false;
				}
				else return false;
			}
		}
		else {
			$('.pagination a[rel='+thisItem+']').addClass('active');
			$('.pagination a[rel!='+thisItem+']').removeClass('active');
			return false;
		};
			
    });
	

});