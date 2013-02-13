function top_slider_init() {
	itemWidth = 740;
	elemQuantity = $('#top_slider_ul li').size();
	listWidth = itemWidth * elemQuantity;
	shiftCurrent = 0;
	moveSlideStep = 7000;

	$('#top_slider_ul').css('width',listWidth);
	
	$('#top_slider_ul li').mouseover(function() {
    });
	
	$('#top_slider_ul li').mouseout(function() {
    });
	
	$('#control_prev').click(function() {
		$('.slider_controls a').each(function() {
            $(this).removeClass('active');
        });
		$('#control_prev').addClass('active');
		var timeToMoveSlider = elemQuantity * moveSlideStep;
		var currentMarginLeft = parseInt($('#top_slider_ul').css('margin-left'));
		$('#top_slider_ul').stop(true,false).animate({marginLeft: 0},(-currentMarginLeft)/listWidth*timeToMoveSlider,'linear',function(){
			sliderMoveLeft();
		});
		return false;
    });
	
	$('#control_next').click(function() {
		$('.slider_controls a').each(function() {
            $(this).removeClass('active');
        });
		$('#control_next').addClass('active');
		var timeToMoveSlider = elemQuantity * moveSlideStep;
		var currentMarginLeft = parseInt($('#top_slider_ul').css('margin-left'));
		$('#top_slider_ul').stop(true,false).animate({marginLeft: -(listWidth-($(window).width()))},(listWidth+currentMarginLeft-$(window).width())/listWidth*timeToMoveSlider,'linear',function(){
			sliderMoveRight();
		});
		return false;
	});
	
	$('#control_pause').click(function() {
		$('.slider_controls a').each(function() {
            $(this).removeClass('active');
        });
		$('#control_pause').addClass('active');
		$('#top_slider_ul').stop(true,false);
		return false;
	});
	
	function sliderMoveLeft() {
		$('.slider_controls a').each(function() {
            $(this).removeClass('active');
        });
		$('#control_next').addClass('active');
		var timeToMoveSlider = elemQuantity * moveSlideStep;
		$('#top_slider_ul').animate({marginLeft: -(listWidth-($(window).width()))},timeToMoveSlider,'linear',function(){
			sliderMoveRight();
		});
	};
	
	function sliderMoveRight() {
		$('.slider_controls a').each(function() {
            $(this).removeClass('active');
        });
		$('#control_prev').addClass('active');
		var timeToMoveSlider = elemQuantity * moveSlideStep;
		$('#top_slider_ul').animate({marginLeft: 0},timeToMoveSlider,'linear',function(){
			sliderMoveLeft();
		});
	};
	
	sliderMoveLeft();

};

	
	




/* Tabs Toggle */
	function tabsToggle() {
		var relValue;
		var newHeight;
		$('.pp_tab').click(function(e) {
            if ($(this).parent('li').hasClass('active_tab')) return false;
			else {
				relValue = $(this).attr('rel');
				$('#premium_profile_tabs li.active_tab').removeClass('active_tab');
				$(this).parent('li').addClass('active_tab');
				if (relValue == 'pp_tab_overview') {
					leftSide();
					newHeight = $('#pp_tab_overview').height();
					$('#tabs_frame_slide').animate({height:newHeight},200);
					$('#tabs_frame').animate({height:newHeight},200);
					$('#tabs_frame_slide').animate({marginLeft:'0'},200);
				}
				else {
					leftSide();
					newHeight = $('#pp_tab_menu').height();
					$('#tabs_frame_slide').animate({height:newHeight},200);
					$('#tabs_frame').animate({height:newHeight},200);
					$('#tabs_frame_slide').animate({marginLeft:'-570'},200);
				};
				return false;
			};
        });	
	};
	
	
/* Left Side height define */
	function leftSide() {
		var leftSideHeight = $('#premium_profile .content_inner').height();
		$('#left_side').height(leftSideHeight);
	}
	
	
/* GoogleMaps initializing function */
  var lat = 41.8978279;
  var lng = 12.4673777;
	function gmap_init() {
       var latlng = new google.maps.LatLng(lat, lng);
       var myOptions = {
               zoom: 15,
               center: latlng,
               mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map = new google.maps.Map(document.getElementById("pp_map"), myOptions);
	   var image = 'images/elements/pin.png';
	   var marker = new google.maps.Marker({
                       position: latlng,
                       map: map,
                       title:"Hello World!",
					   icon: image
       });
	};


	
	

/* EMAIL IT popup */
	function emailIt() {
		$('#email_it').click(function() {
			$('#email_popup_wrapper').fadeIn(1200);
			var hCoord = ($(window).width()-$('#email_popup').innerWidth())/2;
			var vCoord =  ($(window).height()-$('#email_popup').innerHeight())/2;
			$('#email_popup').css({'left':hCoord,'top':vCoord}).fadeIn(600);
			var stampHeight = $('#email_content_part_inner_bottom_left').height();
			$('#email_content_part_inner_bottom_right').height(stampHeight);
			return false;
		});
		$('#email_popup_wrapper #popup_email_it_close').click(function() {
			$('#email_popup').fadeOut(600);
			$('#email_popup_wrapper').fadeOut(1200);
			return false;
		});
	};
	

/* EMAIL IT validation script */
	function validation() {
		var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
		var email = $('#inp_email');
		email.blur(function(){
			if(email.val() != ''){
				if(email.val().search(pattern) == 0){
					email.removeClass('validation_wrong').addClass('validation_ok');
				}else{
					email.addClass('validation_wrong');
				}
			}else{
				email.addClass('validation_wrong');
			}
		});
	};	
	
	
/* EMAIL CONFIRMATION popup */
	function emailConfirm() {
		$('#confirmation_trigger').click(function() {
			$('#email_confirm_popup_wrapper').fadeIn(1200);
			var hCoord = ($(window).width()-$('#email_confirm_popup').innerWidth())/2;
			var vCoord =  ($(window).height()-$('#email_confirm_popup').innerHeight())/2;
			$('#email_confirm_popup').css({'left':hCoord,'top':vCoord}).fadeIn(600);
			var stampHeight = $('#email_content_part_inner_bottom_left').height();
			$('#email_content_part_inner_bottom_right').height(stampHeight);
			return false;
		});
		$('#email_confirm_popup_wrapper #popup_email_it_close').click(function() {
			$('#email_confirm_popup').fadeOut(600);
			$('#email_confirm_popup_wrapper').fadeOut(1200);
			return false;
		});
	};


$(document).ready(function(){

	gmap_init();
	top_slider_init();
	tabsToggle();
	leftSide();
	emailIt();
	validation();
	emailConfirm();
	
});