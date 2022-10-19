$(document).ready(function(){

    // BURGER MENU
    const burgerIcon = $('.header-burger');
    const headerMenu = $('.menu');
    const menuItem = $('.menu-item');

    burgerIcon.click(() => {
        headerMenu.toggleClass('active');
        burgerIcon.toggleClass('active');
        $('body').toggleClass('open');
    });
    menuItem.click(() => {
        headerMenu.removeClass('active');
        burgerIcon.removeClass('active');
        $('body').removeClass('open');
    })
    // END BURGER MENU

    // WOW JS
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    // SLICK SLIDER
    let $status = $('.slide-counter');
    let $slickElement = $('.reviews-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if(!slick.$dots){
            return;
        }

        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + (slick.$dots[0].children.length));

    });

    $slickElement.slick({
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        slidesToShow: 3,
        easing: 'linear',
        speed: 100,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    // END SLIDER

    // SCROLL TO TOP
    const scrollToTopBtn = $('#scroll-to-top');
    $(window).scroll (function () {
        if ($(this).scrollTop () > 500) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    });
    scrollToTopBtn.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // END SCROLL TO TOP

    // SCROLL
    $(".main-info-btn").click(() => {
        $('html, body').animate({
            scrollTop: $('#promo').offset().top
        }, 1000);
    })

    // MENU SCROLL
    $("#menu").on("click","a", function (event) {
        event.preventDefault();

        let id  = $(this).attr('href'),
        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });

    // END SCROLL

    // FILTER FOR CARDS
    const $filterButtons = $(".cards-action-btn");
    const $cardsItems = $(".cards-item");
    const $cardsItemsMore = $(".cards-item-more");

    // ALL
    $("#filter-all").click(() => {
        $filterButtons.removeClass("active");
        $('#show-more-cards').add().attr("disabled", false);
        $("#filter-all").addClass("active");
        if($("#filter-all").hasClass("active")){
            $cardsItems.css('display' , 'block');
            $cardsItemsMore.css('display' , 'none');
        }
    })
    // POPULAR
    $("#filter-popular").click(() => {
        $filterButtons.removeClass("active");
        $("#filter-popular").addClass("active");
        if($("#filter-popular").hasClass("active")){
            $cardsItems.css('display' , 'none');
            $(".cards-item.popular").css('display' , 'block');
            $('#show-more-cards').add().attr("disabled", true);
        }
    })

    // SPICY
    $("#filter-spicy").click(() => {
        $filterButtons.removeClass("active");
        $("#filter-spicy").addClass("active");
        if($("#filter-spicy").hasClass("active")){
            $cardsItems.css('display' , 'none');
            $(".cards-item.spicy").css('display' , 'block');
            $('#show-more-cards').add().attr("disabled", true);
        }
    })

    // VEGAN
    $("#filter-vegan").click(() => {
        $filterButtons.removeClass("active");
        $("#filter-vegan").addClass("active");
        if($("#filter-vegan").hasClass("active")){
            $cardsItems.css('display' , 'none');
            $(".cards-item.vegan").css('display' , 'block');
            $('#show-more-cards').add().attr("disabled", true);
        }
    })
    // END FILTER FOR CARDS

    // SHOW MORE BTN
    // FOR CARDS
    $('#show-more-cards').click(() => {
        $('#show-more-cards').toggleClass("active");
        if($('#show-more-cards').hasClass("active")){
            $(".cards-item-more").css("display", "block");
            $(".cards-btn-text-show").hide();
            $(".cards-btn-text-hide").show();

        }else{
            $(".cards-item-more").css("display", "none");
            $(".cards-btn-text-show").show();
            $(".cards-btn-text-hide").hide();
        }
    })
    // FOR GALLERY
    $('#show-more-photo').click(() => {
        $('#show-more-photo').toggleClass("active");
        if($('#show-more-photo').hasClass("active")){
            $(".gallery-item-more").css("display", "block");
            $(".gallery-btn-text-show").hide();
            $(".gallery-btn-text-hide").show();
        }else{
            $(".gallery-item-more").css("display", "none");
            $(".gallery-btn-text-show").show();
            $(".gallery-btn-text-hide").hide();
        }
    })
    // END SHOW MORE BTN

    // MAGNIFIC POPUP
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
    // END MAGNIFIC POPUP

    // POPUP
    $("#order-call").click(() => {
        $(".popup").css("display", "flex");
        $('body').addClass('open');

    })

    $("#close-popup").click(() => {
        $(".popup").css("display", "none");
        $('body').removeClass('open');
        $(".order-info-form").show();
        $(".order-info-success").css('display', 'none');
        clientName.val("");
        clientPhone.val("");

    })
    const clientName = $('#client-name-input');
    const clientPhone = $('#client-phone-input');
    const loader = $('.loader');

    $('#order-btn').click(() => {
        let hasError = false;

        $('.err-input').hide();
        $('.order-info-input').css('border-color', 'black');


        if(!clientName.val()){
            clientName.next().show();
            clientName.css('border-color', 'red');
            hasError = true;
        }
        if(!clientPhone.val()){
            clientPhone.next().show();
            clientPhone.css('border-color', 'red');
            hasError = true;
        }

        if(!hasError){
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "https://www.boredapi.com/api/activity",
                data: {name: clientName.val(), phone: clientPhone.val()}
            })
                .done(function ( msg ){
                    loader.hide();
                    if(msg.success){
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");

                    }else{
                        $(".order-info-form").hide();
                        $(".order-info-success").css('display', 'flex');
                    }

                })
        }
    });
    // END POPUP

});