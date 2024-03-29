"use strict";
$(window).load(function () {
    $("#preloader").delay(600).fadeOut(500);
}),
    $(document).ready(function () {
        function e() {
            var e = { zoom: 15, mapTypeId: "roadmap", center: new google.maps.LatLng(-8.2093901, 114.3706426), scrollwheel: !1, zoomControl: !0 },
                t = document.getElementById("map"),
                a = new google.maps.Map(t, e),
                i = new google.maps.Marker({ position: new google.maps.LatLng(-8.20939, 114.372831), map: a, title: "Ijab Kabul" }),
                n = new google.maps.Marker({ position: new google.maps.LatLng(-8.205463, 114.355855), map: a, title: "Walimah" });
            google.maps.event.addListener(i, "click", function (e) {
                window.open("https://www.google.co.id/maps/place/Masjid+Agung+Baiturrahman/@-8.2093901,114.3706426,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd145250a20c0d3:0x80c707c40ff8996a!8m2!3d-8.2093901!4d114.3728313", "_blank");
            }),
                google.maps.event.addListener(n, "click", function (e) {
                    window.open("https://www.google.co.id/maps/place/Hotel+Tanjung+Asri/@-8.205463,114.353666,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xdd33067a79ed7ec0!8m2!3d-8.2054628!4d114.3558546", "_blank");
                });
        }
        if (
            ((function (e) {
                e("a[href*=#]:not([href=#])").on("click", function (e) {
                    e.preventDefault();
                });
            })(jQuery),
            $(".show-menu").on("click", function (e) {
                $(".onepage").length > 0 && e.preventDefault(), $("#menu").toggleClass("show");
            }),
            $("#menu li a").on("click", function (e) {
                $(".onepage").length > 0 && e.preventDefault(), $("#menu").toggleClass("show");
            }),
            $("header").scrollTop() < $("#header").height() &&
                $(".show-menu").on("click", function () {
                    $("html, body").animate({ scrollTop: $("header").offset().top }, 500);
                }),
            $("#owl-fullwidth").length > 0 && $("#owl-fullwidth").owlCarousel({ autoPlay: 9e3, navigation: !0, navigationText: ["", ""], slideSpeed: 900, singleItem: !0, pagination: !1 }),
            !device.tablet() && !device.mobile() && $("#parallax-quote").lenght > 0 && $("#parallax-quote").parallax("50%", 0.2),
            $('a[data-rel="lightcase:mw-gallery"]').lightcase({ transition: "elastic", showSequenceInfo: !1 }),
            $('a[data-rel="lightcase:mw-groomsmen"]').lightcase({ transition: "elastic", showSequenceInfo: !1 }),
            $('a[data-rel="lightcase:mw-bridesmaid"]').lightcase({ transition: "elastic", showSequenceInfo: !1 }),
            $(function () {
                $(window).scroll(function () {
                    if (($(this).scrollTop() > 80 ? $("#top-scroll").fadeIn() : $("#top-scroll").fadeOut(), $(".image-header").length > 0)) e = $(".image-header").height();
                    else if ($(".video-header").length > 0) e = $(".video-header").height();
                    else if ($(".slider-header").length > 0) var e = $(".slider-header").height();
                    $(this).scrollTop() > e ? ($("header").addClass("sticky"), $(".keep").addClass("height")) : ($("header").removeClass("sticky"), $(".keep").removeClass("height"));
                }),
                    $("#top-scroll").on("click", function () {
                        $("body,html").animate({ scrollTop: 0 }, 1200);
                    });
            }),
            $(function () {
                $("a[href*=#]:not([href=#])").on("click", function () {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                        var e = $(this.hash);
                        if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({ scrollTop: e.offset().top - 100 }, 900), !1;
                    }
                });
            }),
            $(".countdown").length > 0 &&
                $("[data-countdown]").each(function () {
                    var e = $(this),
                        t = $(this).data("countdown");
                    e.countdown(t, function (t) {
                        e.html(t.strftime("<div><p>%w</p><span>Weeks</span></div><div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div><div><p>%S</p><span>Seconds</span></div>"));
                    });
                }),
            $("#contact input").on("focus", function () {
                $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact input").on("blur", function () {
                "" == $(this).val() ? $(this).siblings(".text-label").removeClass("active") : $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact #photo-guest").on("focus", function () {
                $(this).siblings(".text-label-file").addClass("active");
            }),
            $("#contact #photo-guest").on("blur", function () {
                "" == $(this).val() ? $(this).siblings(".text-label-file").removeClass("active") : $(this).siblings(".text-label-file").addClass("active");
            }),
            $("#contact textarea").on("focus", function () {
                $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact textarea").on("blur", function () {
                "" == $(this).val() ? $(this).siblings(".text-label").removeClass("active") : $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact select").on("focus", function () {
                $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact select").on("blur", function () {
                "" == $(this).val() ? $(this).siblings(".text-label").removeClass("active") : $(this).siblings(".text-label").addClass("active");
            }),
            $("#contact").length > 0 &&
                $("#contact").ajaxForm(function (e) {
                    1 == e ? ($("#success").fadeIn("slow"), $("#bad-msg").fadeOut("slow"), $("#bad-server").fadeOut("slow"), $("#contact").resetForm()) : 2 == e ? $("#bad-server").fadeIn("slow") : 3 == e && $("#bad-msg").fadeIn("slow");
                }),
            google.maps.event.addDomListener(window, "load", e),
            !device.tablet() && !device.mobile() && $(".video-header").length > 0 && ($(".player").mb_YTPlayer(), $(".player").YTPApplyFilters({})),
            setTimeout(function () {
                $('[data-toggle="tooltip"]').tooltip();
            }, 1e3),
            $(window).on("beforeunload", function () {
                window.location.reload();
            }),
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        ) {
            var t = {
                heartHeight: 40,
                heartWidth: 44,
                hearts: [],
                heartImage: "images/heart.png",
                maxHearts: 8,
                minScale: 0.4,
                draw: function () {
                    this.setCanvasSize(), this.ctx.clearRect(0, 0, this.w, this.h);
                    for (var e = 0; e < this.hearts.length; e++) {
                        var t = this.hearts[e];
                        (t.image = new Image()), (t.image.style.height = t.height), (t.image.src = this.heartImage), (this.ctx.globalAlpha = t.opacity), this.ctx.drawImage(t.image, t.x, t.y, t.width, t.height);
                    }
                    this.move();
                },
                move: function () {
                    for (var e = 0; e < this.hearts.length; e++) {
                        var t = this.hearts[e];
                        (t.y += t.ys), t.y > this.h && ((t.x = Math.random() * this.w), (t.y = -1 * this.heartHeight));
                    }
                },
                setCanvasSize: function () {
                    (this.canvas.width = window.innerWidth), (this.canvas.height = window.innerHeight), (this.w = this.canvas.width), (this.h = this.canvas.height);
                },
                initialize: function () {
                    if (((this.canvas = $("#canvas")[0]), this.canvas.getContext)) {
                        this.setCanvasSize(), (this.ctx = this.canvas.getContext("2d"));
                        for (var e = 0; e < this.maxHearts; e++) {
                            var t = Math.random() * (1 - this.minScale) + this.minScale;
                            this.hearts.push({ x: Math.random() * this.w, y: Math.random() * this.h, ys: Math.random() + 1, height: t * this.heartHeight, width: t * this.heartWidth, opacity: t });
                        }
                        setInterval($.proxy(this.draw, this), 30);
                    }
                },
            };
            $(document).ready(function () {
                // t.initialize(),
                    (document.getElementById("soundtrack").innerHTML = "<audio id='background_audio1' loop autoplay><source src='music/Beautiful_in_White.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>");
            });
        }
    });
