$(document).ready(function(){
    $(function() {
        jcf.replaceAll();

    });

    $('.phone_mask').mask('+7 (900) 000 00 00');

    $('.menu_btn').on('click', function(){
        $('.menu_list').toggleClass('active');
        $('.menu_btn').toggleClass('active');
    });

    $('.passenger, .close').on('click', function(){
        $('.about_calculator').toggleClass('active');
        $('.passenger').toggleClass('active');
    });


    $('.open_content_4').on('click', function(){
        $('.active_content').css('display', 'none');
        $('.about_content').addClass('active');
    });
    $('.close_content_4').on('click', function(){
        $('.active_content').css('display', 'block');
        $('.about_content').removeClass('active');
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('#test').change(function() {
        value = $(this).find('option:selected').val();

        $('div[id^="test_hide"]').hide();
        $('#test_hide'+value).show();
    });


    function setProgress2(index) {
        var calc = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;

        $progressBar2
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel2.text(calc + '% completed');
    }
    var $slider2 = $('.special_slider');
    var $progressBar2 = $('.progress_special');
    var $progressBarLabel2 = $( '.slider__label2' );
    $slider2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress2(nextSlide);
    });
    $slider2.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    setProgress2(0);
    $(".special_slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp1").text(currentSlide + 1);
    });



    function setProgress(index) {
        var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel.text(calc + '% completed');
    }
    var $slider = $('.slider_popular');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);
    });
    $slider.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        dots:true,
        dotsClass:'my_dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
    });
    setProgress(0);
    $(".slider_popular").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
    });




    function setProgress3(index) {
        var calc = ((index + 1) / ($slider3.slick('getSlick').slideCount)) * 100;

        $progressBar3
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel3.text(calc + '% completed');
    }
    var $slider3 = $('.slider_news');
    var $progressBar3 = $('.progress_news');
    var $progressBarLabel3 = $( '.slider__label3' );
    $slider3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress3(nextSlide);
    });
    $slider3.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]


    });
    setProgress3(0);
    $(".slider_news").on('afterChange', function(event, slick, currentSlide){
        $("#cp3").text(currentSlide + 1);
    });



    function setProgress4(index) {
        var calc = ((index + 1) / ($slider4.slick('getSlick').slideCount)) * 100;

        $progressBar4
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel4.text(calc + '% completed');
    }
    var $slider4 = $('.result_slider');
    var $progressBar4 = $('.progress_result');
    var $progressBarLabel4 = $( '.slider__label4' );
    $slider4.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress4(nextSlide);
    });
    $slider4.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]


    });
    setProgress4(0);
    $(".result_slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp4").text(currentSlide + 1);
    });



    function setProgress5(index) {
        var calc = ((index + 1) / ($slider5.slick('getSlick').slideCount)) * 100;

        $progressBar5
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel5.text(calc + '% completed');
    }
    var $slider5 = $('.order_slider');
    var $progressBar5 = $('.progress_special');
    var $progressBarLabel5 = $( '.slider__label5' );
    $slider5.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress5(nextSlide);
    });
    $slider5.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]


    });
    setProgress5(0);
    $(".order_slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp5").text(currentSlide + 1);
    });



    function setProgress6(index) {
        var calc = ((index + 1) / ($slider6.slick('getSlick').slideCount)) * 100;

        $progressBar6
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel6.text(calc + '% completed');
    }
    var $slider6 = $('.passenger_slider');
    var $progressBar6 = $('.progress_special');
    var $progressBarLabel6 = $( '.sliderspecial__label6' );
    $slider6.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setProgress6(nextSlide);
    });
    $slider6.slick({
        infinite: false,
        speed: 350,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }},
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]


    });
    setProgress6(0);
    $(".passenger_slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp6").text(currentSlide + 1);
    });


    $('.open-order').on("click", function () {
        $('.overlay-order').addClass('active fadeInDown');
        $('.overlay-order').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-order .close,.close-popup').on("click", function () {
        $('.overlay-order').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-order').removeClass('active');
        }, 500);
    });
    $('.overlay-order .closeBtn').on("click", function () {
        $('.overlay-order').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });



    $( "#polzunok" ).slider({
        animate: "slow",
        range: "min",
        min: 0,
        step:1,
        max: 30,
        value:8,
        slide: function( event, ui ) {
            $('#result-polzunok').text("" + ui.value.toLocaleString('ru'));
        }
    });
    $('#result-polzunok').val($('#polzunok').slider("value"));
    $("#options").mousewheel(function(event,delta) {
        event.preventDefault();
        var value = $("#polzunok").slider("value");

        if(delta > 0 && value < 30) {
            value += 1;
        }
        if(delta < 0 && value > 1) {
            value -= 1;
        }

        $("#polzunok").slider("value",value);
        $("#result-polzunok").text(value.toLocaleString('ru'));
    });


});

$( function() {
    $( ".datepicker" ).datepicker({
        numberOfMonths: 1,
        showOtherMonths:true,
        firstDay: 1,
        dateFormat : "dd / mm / yy" ,
        lang:'ru',
        defaultDate: new Date,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dayNames : ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],


    });
} );

$( function() {
    $( ".datepicker2" ).datepicker({
        numberOfMonths: 1,
        showOtherMonths:true,
        firstDay: 1,
        dateFormat : "dd / mm / yy" ,
        lang:'ru',
        defaultDate: new Date,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

    });
} );

$( function() {
    $( ".datepicker3" ).datepicker({
        numberOfMonths: 2,
        showOtherMonths:true,
        firstDay: 1,
        dateFormat : "dd / mm / yy" ,
        lang:'ru',
        defaultDate: new Date,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dayNames : ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],


    });
} );
$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("increase")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
        --e.target.parentElement.querySelector("input").value;
    }
});


$( document ).ready(function() {
    $('#s-h-pass').click(function(){
        var type = $('#password').attr('type') == "text" ? "password" : 'text',
            c = $(this).html() == "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>" ? "<span class=\"glyphicon glyphicon-eye-open\" title=\"Показать пароль\"></span>" : "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>";
        $(this).html(c);
        $('#password').prop('type', type);
    });
});

$('.man').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')

});


$('.radio1').click(function(){
    $('.about').addClass('active');
});
$('.radio2').click(function(){
    $('.about').removeClass('active');
});
