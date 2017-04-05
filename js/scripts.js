// ---------------------------------
//  Theme Name: Material Wedding
//  Version: 1.0
//  Author: FigoThemes
//  Web: figothemes.com
// ---------------------------------

// Script Guide

// 00. Page Preloader
// 01. Prevent empty links scroll to top default functionality
// 02. Main navigation
// 03. Fullwidth slider
// 04. Gallery slider
// 05. People Involved slider
// 06. Parallax effects
// 07. Lightcase - images zoom library
// 08. Scroll To Top & Sticky header functionality
// 09. Smooth Scroll to Section
// 10. Countdown
// 11. Material Inputs Fields
// 12. RSVP Form
// 13. Google Maps with markers
// 14. YouTUBE Video Header

// ---------------------------------

'use strict';

// 00. Preloader
$(window).load(function() {
    $('#preloader').delay(600).fadeOut(500);
});

$(document).ready(function() {

	// 01. Prevent empty links scroll to top default functionality
    /* <![CDATA[ */
    ( function( $ ) {
        $( 'a[href*=#]:not([href=#])' ).on('click', function(e) {
            e.preventDefault();
        });
    })( jQuery );
    /* ]]> */

    // 02. Main navigation
    $('.show-menu').on('click', function(e) {
        if ( $('.onepage').length > 0 ) {
            e.preventDefault();
        }
        $('#menu').toggleClass("show");
    });
    $('#menu li a').on('click', function(e) {
        if ( $('.onepage').length > 0 ) {
            e.preventDefault();
        }
        $('#menu').toggleClass("show");
    });
    if ($("header").scrollTop() < $('#header').height()) {
        $(".show-menu").on( 'click', function() {
            $('html, body').animate({
                scrollTop: $("header").offset().top
            }, 500);
        });
    }

    // 03. Fullwidth Image Slider
    if ( $('#owl-fullwidth').length > 0 ) {
        $('#owl-fullwidth').owlCarousel({
            autoPlay: 9000,
            navigation : true,
            navigationText: ['', ''],
            slideSpeed : 900,
            singleItem : true,
            pagination : false
    	});
    }

	// 04. Gallery slider
	if ( $('#owl-gallery').length > 0 ) {
		$("#owl-gallery").owlCarousel({
	        navigation : false,
	        itemsCustom : [
	            [320, 1],
	            [480, 1],
	            [768, 2],
	            [992, 3],
	            [1200, 3]
	        ],
	        pagination : true
	    });
	}

    // 05. People Involved slider
	if ( $('#owl-people').length > 0 ) {
		$("#owl-people").owlCarousel({
	        autoPlay: 4000,
	        stopOnHover : true,
	        navigation : false,
	        itemsCustom : [
	            [320, 1],
	            [480, 1],
	            [768, 2],
	            [992, 3],
	            [1200, 3]
	        ],
	        pagination : true
	    });
	}
// setTimeout(function(){
//       if ( $('#owl-guest').length > 0 ) {
//         $("#owl-guest").owlCarousel({
//             autoPlay: 4000,
//             stopOnHover : true,
//             navigation : false,
//             itemsCustom : [
//                 [320, 1],
//                 [480, 1],
//                 [768, 2],
//                 [992, 4],
//                 [1200, 4]
//             ],
//             pagination : true
//         });
//     }
// }, 2000);


    // 06. Parallax effects
    if( !device.tablet() && !device.mobile() && $('#parallax-quote').lenght > 0 ) {
        $('#parallax-quote').parallax("50%", 0.2);
    }

    // 07. Lightcase
    $('a[data-rel="lightcase:mw-gallery"]').lightcase({
    	transition: 'elastic',
    	showSequenceInfo: false
    });
    $('a[data-rel="lightcase:mw-groomsmen"]').lightcase({
        transition: 'elastic',
        showSequenceInfo: false
    });
    $('a[data-rel="lightcase:mw-bridesmaid"]').lightcase({
        transition: 'elastic',
        showSequenceInfo: false
    });

	// 08. Scroll To Top
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() > 80) {
                $('#top-scroll').fadeIn();
            } else {
                $('#top-scroll').fadeOut();
            }
            // Sticky header navigation
            if($('.image-header').length > 0) {
                var headerHeight = $('.image-header').height();
            } else if ($('.video-header').length > 0) {
                var headerHeight = $('.video-header').height();
            } else if ($('.slider-header').length > 0) {
                var headerHeight = $('.slider-header').height();
            }
            if($(this).scrollTop() > headerHeight) {
                $('header').addClass('sticky');
                $('.keep').addClass('height');
            } else {
                $('header').removeClass('sticky');
                $('.keep').removeClass('height');
            }
        });

        $('#top-scroll').on('click', function() {
            $('body,html').animate({scrollTop:0}, 1200);
        });

    });

	// 09. Smooth Scroll to Section
    $(function() {
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 100
                    }, 900);
                    return false;
                }
            }
        });
    });

	// 10. Countdown
	if ( $('.countdown').length > 0 ) {
	    $('[data-countdown]').each(function() {
	        var $this = $(this), finalDate = $(this).data('countdown');
	        $this.countdown(finalDate, function(event) {
	            $this.html(event.strftime(
	              '<div><p>%w</p><span>Weeks</span></div><div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div><div><p>%S</p><span>Seconds</span></div>'
	            ));
	        });
	    });
	}

    $('#contact input').on('focus', function() {
        $(this).siblings('.text-label').addClass('active');
    });
    $('#contact input').on('blur', function() {
        if( $(this).val() == '' ) {
              $(this).siblings('.text-label').removeClass('active');
        } else {
              $(this).siblings('.text-label').addClass('active');
        }
    });

    $('#contact textarea').on('focus', function() {
        $(this).siblings('.text-label').addClass('active');
    });
    $('#contact textarea').on('blur', function() {
        if( $(this).val() == '' ) {
              $(this).siblings('.text-label').removeClass('active');
        } else {
              $(this).siblings('.text-label').addClass('active');
        }
    });

    $('#contact select').on('focus', function() {
        $(this).siblings('.text-label').addClass('active');
    });
    $('#contact select').on('blur', function() {
        if( $(this).val() == '' ) {
              $(this).siblings('.text-label').removeClass('active');
        } else {
              $(this).siblings('.text-label').addClass('active');
        }
    });

    // 12. RSVP Form
    if ( $('#contact').length > 0 ) {
        $('#contact').ajaxForm(function(data) {
            if (data == 1) {
                $('#success').fadeIn("slow");
                $('#bad-msg').fadeOut("slow");
                $('#bad-server').fadeOut("slow");
                $('#contact').resetForm();
            } else if (data == 2) {
                $('#bad-server').fadeIn("slow");
            } else if (data == 3) {
                $('#bad-msg').fadeIn("slow");
            }
        });
        // $('#show-form').on('click', function() {
        //     $('.form-fields').fadeIn();
        //     $('#submitinput').fadeIn();
        // });
        // $('#hide-form').on('click', function() {
        //     $('.form-fields').fadeOut();
        //     $('#submitinput').fadeOut();
        // });
    }

    // 13. Google Maps with markers
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        // Basic options for a simple Google Map
        var image1 = {
          url: 'images/ijab.png', // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        }

        var image2 = {
            url: 'images/walimah.png', // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(-8.2093901,114.3706426), // New York
            scrollwheel: false,
            zoomControl: false,
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [ { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#e9e9e9" }, { "lightness": 17 } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 20 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" }, { "lightness": 17 } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#ffffff" }, { "lightness": 16 } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" }, { "lightness": 21 } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#dedede" }, { "lightness": 21 } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 } ] }, { "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#f2f2f2" }, { "lightness": 19 } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#fefefe" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 } ] }]
        };
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        // Let's also add a markers while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-8.2093901,114.3706426),
            map: map,
            title: 'Ijab Kabul',
            icon: image1
        });
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(-8.205463,114.353666),
            map: map,
            title: 'Walimah',
            icon: image2
        });
        var iw = new google.maps.InfoWindow({
            content: "<h4>Masjid Agung Baiturrahman</h4>"+
            "<img class=\"col-sm-6 pull-left\" src=\"images/masjid.jpg\" alt=\"Masjid\" style=\"width:50%;height:50%;\">"+
            "<div class=\"col-sm-6\"><i>Kepatihan, Banyuwangi Sub-District, Banyuwangi Regency, East Java 68411</i><br><br>"+
            "<a href='https://www.google.co.id/maps/place/Masjid+Agung+Baiturrahman/@-8.2093901,114.3706426,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd145250a20c0d3:0x80c707c40ff8996a!8m2!3d-8.2093901!4d114.3728313' target='_blank'>go to map</a></div>"
        });
        var iw2 = new google.maps.InfoWindow({
            content: "<h4>Hotel Tanjung Asri</h4>"+
            "<img class=\"col-sm-6 pull-left\" src=\"images/hotel.jpg\" alt=\"hotel\" style=\"width:50%;height:50%;\">"+
            "<div class=\"col-sm-6\"><i>Jalan Mawar No. 8-10, Penataban, Mojopanggung, Giri, Kabupaten Banyuwangi, Jawa Timur 68418</i><br>"+
            "<i>phone : (0333) 421786</i><br><br>"+
            "<a href=\"https://www.google.co.id/maps/place/Hotel+Tanjung+Asri/@-8.205463,114.353666,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xdd33067a79ed7ec0!8m2!3d-8.2054628!4d114.3558546\" target=\"_blank\">go to map</a></div>"
        });
        google.maps.event.addListener(marker, "click", function(e) {
            iw.open(map, this);
        });
        google.maps.event.addListener(marker2, "click", function(e) {
            iw2.open(map, this);
        });
        // var marker3 = new google.maps.Marker({
        //     position: new google.maps.LatLng(-8.2205869,114.3686616),
        //     map: map,
        //     title: 'Restaurant',
        //     icon: image3
        // });
    }

    // 14. YouTUBE Video Header
    if (!device.tablet() && !device.mobile() && ( $('.video-header').length > 0 )) {
        $(".player").mb_YTPlayer();
        $(".player").YTPApplyFilters({
           //grayscale: 10,
           //opacity: 10,
           //blur: 5
        });
    }

    var HeartsBackground = {
      heartHeight: 60,
      heartWidth: 64,
      hearts: [],
      heartImage: 'images/heart.png',
      maxHearts: 8,
      minScale: 0.4,
      draw: function() {
        this.setCanvasSize();
        this.ctx.clearRect(0, 0, this.w, this.h);
        for (var i = 0; i < this.hearts.length; i++) {
          var heart = this.hearts[i];
          heart.image = new Image();
          heart.image.style.height = heart.height;
          heart.image.src = this.heartImage;
          this.ctx.globalAlpha = heart.opacity;
          this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
        }
        this.move();
      },
      move: function() {
        for(var b = 0; b < this.hearts.length; b++) {
          var heart = this.hearts[b];
          heart.y += heart.ys;
          if(heart.y > this.h) {
            heart.x = Math.random() * this.w;
            heart.y = -1 * this.heartHeight;
          }
        }
      },
      setCanvasSize: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.w = this.canvas.width;
        this.h = this.canvas.height;
      },
      initialize: function() {
        this.canvas = $('#canvas')[0];

        if(!this.canvas.getContext)
          return;

        this.setCanvasSize();
        this.ctx = this.canvas.getContext('2d');

        for(var a = 0; a < this.maxHearts; a++) {
          var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
          this.hearts.push({
            x: Math.random() * this.w,
            y: Math.random() * this.h,
            ys: Math.random() + 1,
            height: scale * this.heartHeight,
            width: scale * this.heartWidth,
            opacity: scale
          });
        }

        setInterval($.proxy(this.draw, this), 30);
      }
    };

    $(document).ready(function(){
      HeartsBackground.initialize();
    });
});
