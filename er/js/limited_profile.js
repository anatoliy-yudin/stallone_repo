	  var lat = 41.8978279;
  	var lng = 12.4673777;
	function gmap_init() {
       var latlng = new google.maps.LatLng(lat, lng);
       var myOptions = {
               zoom: 15,
               center: latlng,
               mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map = new google.maps.Map(document.getElementById("lp_map_canvas"), myOptions);
	   var image = 'images/elements/pin.png';
	   var marker = new google.maps.Marker({
                       position: latlng,
                       map: map,
                       title:"Hello World!",
					   icon: image
       });
	};

$(document).ready(function(){

});