
<!DOCTYPE html>
<html lang="en" ng-app="wedding">
    <head>
    <!-- Meta, title, CSS, favicon, etc. -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Clean and beautyful wedding HTML template">
    <meta name="keywords" content="wedding">
    <meta name="author" content="www.figothemes.com">
    <title>Material Wedding - Responsive HTML Template</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="screen" />
    <!-- Lightcase -->
    <link rel="stylesheet" href="css/lightcase.css" type="text/css" media="screen" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/font-awesome/font-awesome.css">
    <!-- Owl Carousel -->
    <link rel="stylesheet" href="css/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="css/owl-carousel/owl.theme.css">
    <!-- Styles CSS -->
    <link rel="stylesheet" href="css/styles-01.css" type="text/css" media="screen" />

    <!-- HTML5 shiv IE8 support -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->

    <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.ico">

    <!-- Custom Google Font : Roboto -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' rel='stylesheet' type='text/css'>
    <!-- Custom Google Font : Great Vibes -->
    <link href='https://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
    </head>

    <body onload="play()" ng-controller="WeddingController">

        <!-- Page Preloader -->
		<div id="preloader"></div>

        <!-- Image Header -->
        <div id="header" class="image-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="title">
                            <img src="images/logo.png" alt="" />
                            <h1>{{wedding_name}}</h1>
                            <p>Request the honour of your presence at their marriage</p>
                            <span class="date">July / 7th / 2017</span>
                        </div>
                    </div>
                </div>
				<div class="row">
                    <div class="col-md-12">
                        <!-- Countdown -->
                        <div class="countdown mt-30 mb-40" data-countdown="2017/07/07"></div>
                    </div>
                </div>
            </div>
        </div>

        <header>
            <!-- Main Navigation -->
            <nav id="main-nav">
                <label for="show-menu" class="show-menu wobble"><i class="fa fa-bars fa-lg"></i></label>
                <input type="checkbox" id="show-menu" role="button">
                <ul id="menu" class="onepage">
                  <li><a href="#love-story">Our Story</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#people">People</a></li>
                  <li><a href="#event-map">Location</a></li>
                  <li><a href="#accommodation">Accommodation</a></li>
                  <li><a href="#gifts">Gifts</a></li>
                  <li><a href="#rsvp">RSVP</a></li>
                </ul>
            </nav>
        </header>
        <div class="keep"></div>

        <!-- Love Story Section -->
        <section id="love-story">
            <div class="container">

                <div class="row">
                    <h1>Our Love Story</h1>
                    <div class="hr"></div>
                    <div class="col-md-6">
                        <p>
                            Integer tincidunt feugiat ligula, et fringilla sem gravida nec. Mauris finibus, nulla vitae semper aliquam, quam purus eleifend quam, ac bibendum nunc enim eget nisi. Vestibulum erat libero, pretium a sem quis, facilisis cursus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>

                    <div class="col-md-6">
                        <p>
                            Mauris erat metus, pellentesque a commodo sit amet, tincidunt ac ligula. Phasellus ac libero vel erat imperdiet vestibulum sit amet vitae enim.  Sed dignissim mauris quis venenatis gravida. Sed egestas, elit eu placerat pulvinar, augue magna viverra velit, id maximus enim sapien semper neque.
                        </p>
                    </div>
                </div>

                <div class="row row-centered mt-40">
                    <div class="col-lg-4 col-md-6 col-sm-6 text-center col-lg-offset-1">
                        <div class="bride">
                            <img src="images/bride-image.jpg" alt="Bride" />
                            <h2>Deborah Parker</h2>
                            <p>
                                Integer sed felis massa. Mauris pretium nibh sed placerat gravida. Duis malesuada eu odio tristique facilisis. Pellentesque blandit diam quis libero vehicula maximus.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2 visible-lg wed-logo">
						<i class="fa fa-heart" style="color:#ad1457; font-size:40px	"></i>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 text-center">
                        <div class="groom">
                            <img src="images/groom-image.jpg" alt="Bride" />
                            <h2>Richard Benson</h2>
                            <p>
                                 Mauris pretium nibh sed placerat gravida. Duis malesuada eu odio tristique facilisis. Pellentesque blandit diam quis libero vehicula maximus. Nulla quis justo leo. In non accumsan nisi.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- How it all began Section -->
        <section id="how-began">
            <div class="container">
                <div class="row">
                    <h1>How it all began?</h1>
                    <div class="hr"></div>
                    <div class="col-md-12">
                        <ul class="timeline">

                            <li>
                                <div class="tl-circ">
                                    <i class="fa fa-dot-circle-o"></i>
                                </div>
                                <div class="timeline-panel">
                                    <div class="tl-heading">
                                        <h4>We met for the first time</h4>
                                        <span>August 10th 2015</span>
                                    </div>
                                    <div class="tl-body">
                                        <p>Integer sed felis massa. Mauris pretium nibh sed placerat gravida. Duis malesuada eu odio tristique facilisis. Pellentesque blandit diam quis libero vehicula maximus. </p>
                                    </div>
                                </div>
                            </li>

                            <li class="timeline-inverted">
                                <div class="tl-circ">
                                    <i class="fa fa-dot-circle-o"></i>
                                </div>
                                <div class="timeline-panel">
                                    <div class="tl-heading">
                                        <h4>Our first date</h4>
                                        <span>August 23th 2015</span>
                                    </div>
                                    <div class="tl-body">
                                        <p>Curabitur rutrum quis dolor vitae ultricies. Aenean condimentum massa quis justo commodo auctor. Fusce feugiat lacinia massa, eu dapibus nisl porttitor eu. Nullam vel nunc ut mauris fringilla ullamcorper.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="tl-circ">
                                    <i class="fa fa-dot-circle-o"></i>
                                </div>
                                <div class="timeline-panel">
                                    <div class="tl-heading">
                                        <h4>We live together</h4>
                                        <span>October 30th 2015</span>
                                    </div>
                                    <div class="tl-body">
                                        <p>Integer sed felis massa. Mauris pretium nibh sed placerat gravida. Duis malesuada eu odio tristique facilisis. Pellentesque blandit diam quis libero vehicula maximus.</p>
                                    </div>
                                </div>
                            </li>

                            <li class="timeline-inverted">
                                <div class="tl-circ">
                                    <i class="fa fa-dot-circle-o"></i>
                                </div>
                                <div class="timeline-panel">
                                    <div class="tl-heading">
                                        <h4>He proposed...and she said yes :)</h4>
                                        <span>November 10th 2015</span>
                                    </div>
                                    <div class="tl-body">
                                        <p>Curabitur rutrum quis dolor vitae ultricies. Aenean condimentum massa quis justo commodo auctor. Fusce feugiat lacinia massa, eu dapibus nisl porttitor eu. Nullam vel nunc ut mauris fringilla ullamcorper.</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery -->
        <section id="gallery">
            <div class="container">
                <div class="row">
                    <h1>Gallery</h1>
                    <div class="hr"></div>

                    <div id="owl-gallery" class="owl-carousel owl-theme mt-50">
						<div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-1.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-1_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-2.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-2_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-3.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-3_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-4.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-4_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-5.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-5_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-6.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-6_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-7.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-7_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-8.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-8_thumb.jpg" alt="">
                                </a>
							</div>
						</div>
                        <div class="item">
							<div class="image">
                                <a href="images/gallery/gallery-9.jpg" data-rel="lightcase:mw-gallery">
                                    <img src="images/gallery/gallery-9_thumb.jpg" alt="">
                                </a>
							</div>
						</div>

                    </div>
                </div>

            </div>
        </section>

        <!-- Text with background image -->
        <section>

            <div class="love-quote">
                <h1>Marriage is a journey that lasts until the end of eternity.</h1>
                <span>Here’s to wishing that the both of you have a memorable and joyful ride.</span>
            </div>

        </section>

        <!-- People Involved Section -->
        <section id="people">
            <div class="container">
                <div class="row">
                    <h1>People Involved</h1>
                    <div class="hr"></div>
                    <div id="owl-people" class="owl-carousel owl-theme mt-30">
                        <!-- Bridemaid -->
						<div class="item">
                            <img src="images/bridemaid.jpg" alt="Bridemaid">
							<div class="description">
							    <h2>Lisa Hornet</h2>
                                <span>Bridemaid</span>
							</div>
						</div>
                        <!-- Best Man -->
                        <div class="item">
                            <img src="images/best-man.jpg" alt="Best Man">
                            <div class="description">
							    <h2>Dan Hornet</h2>
                                <span>Best man</span>
							</div>
						</div>
                        <!-- Bride's Mother -->
						<div class="item">
                            <img src="images/brides-mother.jpg" alt="Bride's Mother">
							<div class="description">
							    <h2>Anna Parker</h2>
                                <span>Bride's mother</span>
							</div>
						</div>
                        <!-- Groom's Mother -->
                        <div class="item">
                            <img src="images/grooms-mother.jpg" alt="Groom's Mother">
                            <div class="description">
							    <h2>Sarah Benson</h2>
                                <span>Groom's mother</span>
							</div>
						</div>
                        <!-- Bride's father -->
						<div class="item">
                            <img src="images/brides-father.jpg" alt="Bride's father">
                            <div class="description">
							    <h2>Philip Parker</h2>
                                <span>Bride's father</span>
							</div>
						</div>
                        <!-- Groom's Father -->
                        <div class="item">
                            <img src="images/grooms-father.jpg" alt="Groom's Father">
                            <div class="description">
							    <h2>Anthony Benson</h2>
                                <span>Groom's father</span>
							</div>
						</div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Love quote Section -->
        <section>

            <div id="parallax-quote" class="love-quote big">
                <h1>To love someone deeply gives you strength.<br/>Being loved by someone deeply gives you courage.</h1>
            </div>

        </section>

        <!-- The Wedding Section -->
        <section id="wedding">
            <div class="container">
                <div class="row">
                    <h1>The Wedding</h1>
                    <div class="hr"></div>
                    <div class="col-md-8 col-centered text-center">
                        <h3>Request the honour of your presence at their marriage</h3>
                        <p class="text-center">
                            Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor. Ut in volutpat enim. Sed pharetra eget neque eu ornare. Suspendisse a metus sodales, convallis ante non, lobortis quam. Donec congue sapien odio, eu aliquam erat interdum nec.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Event Map Section -->
        <section id="event-map">
            <div class="map-header">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <span class="time">16:00</span>
                        </div>
                        <div class="col-sm-6">
                            <h2>Cathedral Church</h2>
                            <span class="date">August 25th 2016</span>
                        </div>
                        <a href="https://google.com/maps/" class="round-button lila" target="_blank">
                            <i class="fa fa-map-marker"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div id="map"></div>
        </section>

        <!-- Events Section -->
        <section id="events">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="event-item">
                            <h2>Ceremony</h2>
                            <span>16:30 - 17:15</span>
                            <p>
                                Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.
                            </p>
                            <a href="#" class="round-button white">
                                <i class="fa fa-plus-circle"></i>
                            </a>
                            <img src="images/ceremony-image.jpg" alt="Ceremony" />
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="event-item">
                            <h2>Restaurant</h2>
                            <span>17:30 - 23:00</span>
                            <p>
                                Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.
                            </p>
                            <a href="#" class="round-button white">
                                <i class="fa fa-plus-circle"></i>
                            </a>
                            <img src="images/restaurant-image.jpg" alt="Restaurant" />
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="event-item">
                            <h2>Party</h2>
                            <span>23:30 - 06:00</span>
                            <p>
                                Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.
                            </p>
                            <a href="#" class="round-button white">
                                <i class="fa fa-plus-circle"></i>
                            </a>
                            <img src="images/party-image.jpg" alt="Party" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Accommodation Section -->
        <section id="accommodation">
            <div class="container">
                <div class="row">
                    <h1>Accommodation</h1>
                    <div class="hr"></div>
                    <div class="col-md-8 col-centered">
                        <p class="text-center">
                            Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor. Ut in volutpat enim. Sed pharetra eget neque eu ornare. Suspendisse a metus sodales, convallis ante non, lobortis quam. Donec congue sapien odio, eu aliquam erat interdum nec.
                        </p>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="hotel-item">
                            <img src="images/hotel-1.jpg" alt="Hotel Leonardo" />
                            <div class="description">
                                <h2>Hotel Leonardo</h2>
                                <span class="rating">
                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                </span>
                                <p>
                                    Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.
                                </p>
                            </div>
                            <a href="#">Location <i class="fa fa-globe"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="hotel-item">
                            <img src="images/hotel-2.jpg" alt="Hotel Leonardo" />
                            <div class="description">
                                <h2>Hotel Aqua</h2>
                                <span class="rating">
                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                </span>
                                <p>
                                    Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.
                                </p>
                            </div>
                            <a href="#">Location <i class="fa fa-globe"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="hotel-item">
                            <img src="images/hotel-3.jpg" alt="Hotel Leonardo" />
                            <div class="description">
                                <h2>Hotel Vanguard</h2>
                                <span class="rating">
                                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                </span>
                                <p>
                                    Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.
                                </p>
                            </div>
                            <a href="#">Location <i class="fa fa-globe"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gifts -->
        <section id="gifts">
            <div class="container">
                <div class="row">
                    <h1>Gifts</h1>
                    <div class="hr"></div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="gift-item">
                            <img src="images/gift-logo-1.png" alt="" />
                            <a href="#">Shop</a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="gift-item">
                            <img src="images/gift-logo-2.png" alt="" />
                            <a href="#">Shop</a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="gift-item">
                            <img src="images/gift-logo-3.png" alt="" />
                            <a href="#">Shop</a>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="gift-item">
                            <img src="images/gift-logo-4.png" alt="" />
                            <a href="#">Shop</a>
                        </div>
                    </div>
                </div>
                <!-- Vouchers -->
                <div class="row">
                    <div class="col-md-8 col-centered text-center mt-50">
                        <h3>Buy us a voucher or make a donation</h3>
                        <p class="text-center">
                            Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor. Ut in volutpat enim. Sed pharetra eget neque eu ornare. Suspendisse a metus sodales, convallis ante non, lobortis quam congue sapien odio.
                        </p>
                    </div>
                </div>
                <div class="row mt-20">
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">50€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">100€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">200€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">300€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">400€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                    <div class="col-lg-2 col-sm-4 col-xs-6">
                        <a href="#" class="voucher-item">500€ <i class="fa fa-shopping-bag"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <!-- RSVP -->
        <section id="rsvp">
            <div class="container">
                <div class="row">
                    <h1>Are you attending our wedding?</h1>
                    <div class="hr"></div>
                    <form id="contact" class="mt-20 mb-50" action="send-mail.php" method="post">

                        <div class="form-group attending">
                            <input class="radio-input" type="radio" id="show-form" name="attending" checked/>
                            <label class="radio-label" for="show-form">Yes, I am attending</label>

                            <input class="radio-input" type="radio" id="hide-form" name="attending" />
                            <label class="radio-label" for="hide-form">Sorry, I can’t attend</label>
                        </div>

                        <div class="form-fields clearfix">

                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" id="nameinput" name="name" value="">
                                    <span class="bar"></span>
                                    <label class="text-label">Name *</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" id="emailinput" name="email" value="">
                                    <span class="bar"></span>
                                    <label class="text-label">E-mail *</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text"  id="phoneinput" name="phone" value="">
                                    <span class="bar"></span>
                                    <label class="text-label">Phone *</label>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text"  id="custominput" name="custom" value="">
                                    <span class="bar"></span>
                                    <label class="text-label">Custom options (vegetarian etc.)</label>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <input type="text"  id="noteinput" name="note" value="">
                                    <span class="bar"></span>
                                    <label class="text-label">Leave us a note</label>
                                </div>
                            </div>

                        </div>
                        <!-- Notifications -->
                        <div class="col-md-8 col-centered">
                            <div id="bad-msg" class="alert alert-danger" style="display:none;">
                                Please, fill all the <strong>required</strong> * fields!
                            </div>
                            <div id="success" class="alert alert-success" style="display:none;">
                                Your message has been sent!
                            </div>
                            <div id="bad-server" class="alert alert-danger" style="display:none;">
                                Server Error! Please, try again later.
                            </div>
                        </div>
                        <!-- Submit Button -->
                        <input type="submit" id="submitinput" name="submit" class="submit button lila" value="Submit"/>

                    </form>
                </div>
            </div>
        </section>

        <!-- Footer Section -->
        <footer>
          <p>
              © 2017 | Deborah & Richard Wedding | By <a href="http://figothemes.com" target="_blank">FigoThemes</a>
          </p>
          <div id="soundtrack" style="display:none"></div>
        </footer>
		<script type="text/javascript">
			function play()
			{
				var a = Math.random()*2;
				a=Math.floor(a);

				if(a==1)
				{
					document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='music/wed.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
				}
				if(a==0)
				{
					document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='music/take_my_heart.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
				}
			}
		</script>
        <!-- Scroll to top -->
        <div id="top-scroll"><i class="fa fa-chevron-up"></i></div>

        <!-- JavaScript Files -->
        <!-- jQuery -->
    	<script src="js/jquery-1.11.3.min.js"></script>
        <!-- angularjs -->
      <script src="js/angular.min.js"></script>
      <script src="js/angular-route.min.js"></script>
      <script src="app/App.js"></script>
        <!-- Device.js -->
    	<script src="js/device.min.js"></script>
        <!-- Bootstrap -->
    	<script src="js/bootstrap.min.js"></script>
        <!-- Owl Carousel -->
    	<script src="js/owl.carousel.js"></script>
        <!-- Lightcase -->
    	<script src="js/lightcase.js"></script>
        <!-- Countdown -->
    	<script src="js/countdown.js"></script>
        <!-- Parallax -->
    	<script src="js/jquery.parallax.js"></script>
        <!-- Google Maps -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
        <!-- PHP Form -->
        <script src="js/jquery.form.min.js" type="text/javascript"></script>
        <!-- Custom JS Functions -->
    	<script src="js/scripts.js"></script>

    </body>
</html>
