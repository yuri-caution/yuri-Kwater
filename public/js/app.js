$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    // resize, reload
    // var resizeTimer;
    // $(window).bind('resize', function( ) {
    //     window.clearTimeout( resizeTimer );
    //     resizeTimer = window.setTimeout( resizeFunction, 500 );
    // });
    // function resizeFunction(){
    //     location.reload()
    // }

    // all
    $(".fullpage").fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        menu: ".nav",
        anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
        navigation: false,
        onLeave: function (anchorLink, index) {
            if (index == 3 || index == 6){
                $('.nav li a').css('background-color', "#ffffff")
                $('.nav li a').find('span').css('color', "#ffffff")
            }else{
                $('.nav li a').css('background-color', "#333333")
                $('.nav li a').find('span').css('color', "#333333")
            }
        },
        responsiveWidth: 1021
    });

    // intro
    $('.nav_bar').on('init reInit', function (event, slick) {
        //페이징이니셜
        $("#nav_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + 3);
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        //슬라이드 변경 시 페이징 변경
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#nav_paging").find(".page").text(i);
    })


    $('.nav_bar').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        infinite:false,
        responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 1020, 
            settings: {
                rows: 2,
                slidesPerRow: 3,
                slidesToShow: 1,
                slidesToScroll: 1,
          } 
        }
        ]
    })


    $('.prevArrow, .nextArrow').hover(function(){
        $(this).find('img').attr('src', $(this).find('img').attr('src').replace(".svg", "_fff.svg"))
    }, function(){
        $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_fff.svg', '.svg'))
    })


    // k-water
    var $slide = $('.slider ul');

    $slide.on('init reInit', function (event, slick) {//페이징이니셜
        $("#slider_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + ($('.slider ul > li').length));
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ //슬라이드 변경 시 페이징 변경
        //페이징 변경
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#slider_paging").find(".page").text(i);
    });

    $slide.slick({
        autoplay: true,
        dots: true,
        prevArrow : $('.arrow_left'), 
        nextArrow : $('.arrow_right'),
        });

    $('.play').click(function(){
        $(this).hide()
        $('.stop').show()
        $slideN.slick('slickPlay');
    });
    
    $('.stop').click(function(){
        console.log('클릭')
        $(this).hide()
        $('.play').show()
        $slideN.slick('slickPause');
    });


    // news
    var $slideN = $('.news_slide');

    $slideN.on('init reInit', function (event, slick) {//페이징이니셜
        $("#slide_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + (($('.news_slide li').length -1) / 2));
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ //슬라이드 변경 시 페이징 변경
        //페이징 변경
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#slide_paging").find(".page").text(i);
    });

    $('.news_slide').slick({
        autoplay: true,
        prevArrow : $('.arr_left'), 
        nextArrow : $('.arr_right'),
    })
    
    $('.start').click(function(){
        $(this).hide()
        $('.pause').show()
        $('.news_slide').slick('slickPlay');
    });
    
    $('.pause').click(function(){
        $(this).css('display', 'none')
        $('.start').show()
        $('.news_slide').slick('slickPause');
    });




})