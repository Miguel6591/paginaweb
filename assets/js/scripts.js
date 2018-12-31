/*
Author       : Theme_Ocean.
Template Name: Sobnom - Personal Portfolio / CV / Resume Template.
Version      : 1.0
*/

(function($) {
	'use strict';
	
		jQuery(document).on('ready', function(){

			/* START MENU TAB JS */
			jQuery('.tab-buttons li a').on('click', function(){
				var handler = jQuery(this);
				var rel = handler.data('rel');
				var parent = handler.parent();

				if(parent.hasClass('selected')){
				}else{
					
					jQuery('.tab-buttons li').removeClass('selected');
					parent.addClass('selected');

					jQuery('.tab-container > div').hide();
					jQuery('.tab-container #'+rel).show();
				}

				return false;

			});	
			/* END MENU TAB JS */
				
			/* START COUNTER JS*/
			$('#counter_feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.timer').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 2000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
			/* END COUNTER JS */
		
			/* START PORTFOLIO JS */
			jQuery('.grid').mixitup({
			targetSelector: '.mix',
			});
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				}
			});
			/* END PORTFOLIO JS */
			
			/*START PROGRESS BAR JS*/
			$('.progress-bar > span').each(function(){
				var $this = $(this);
				var width = $(this).data('percent');
				$this.css({
					'transition' : 'width 2s'
				});
				
				setTimeout(function() {
					$this.appear(function() {
							$this.css('width', width + '%');
					});
				}, 500);
			});
			/*END PROGRESS BAR JS*/	

			/*START GOOGLE MAP*/
			function initialize() {
			  var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(40.7127837, -74.00594130000002)
			  };
			  var map = new google.maps.Map(document.getElementById('map'),
				  mapOptions);
			  var marker = new google.maps.Marker({
				position: map.getCenter(),
				icon: 'assets/img/map_pin.png',
				map: map
			  });
			}
			google.maps.event.addDomListener(window, 'load', initialize);	
			/*END GOOGLE MAP*/	
	   
		});

	    /*START WOW ANIMATION JS*/
	    	new WOW().init();	
	    /*END WOW ANIMATION JS*/
		
})(jQuery);

