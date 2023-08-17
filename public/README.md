### fullpage (플러그인)
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js"></script>

<div class="fullpage">
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
</div> 
```
```
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
});
```

### slick paging
```
<div id="slider_paging" class="slide_paging mail_paging">/</div>
```
```
var $slide = $('.slider ul');

$slide.on('init reInit', function (event, slick) {
    //페이징이니셜
    $("#slider_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + ($('.slider ul > li').length));
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
    //슬라이드 변경 시 페이징 변경
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
```

### Youtube 영상 임베드
```
<iframe class="yt_01" width="331" height="210" src="https://youtube.com/embed/0t9as7wG0J4?controls=1"></iframe>
```

### header gnb effect
#### css animation, jqeury
```
/* header */

.header_wrap {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.1);
    z-index: 999;
}

body.down::before {
    content: url('../images/blind_bg.png');
    position: fixed;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    animation: opacity 0.13s 0.23s forwards;
}

@keyframes opacity {
    0% {opacity: 0}
    100% {opacity: 1}
}

body.down::after {
    content: '';
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 272px;
    background-color: #ffffff;
    animation: slideDown 0.3s forwards;
}

body.up::after {
    content: '';
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 272px;
    background-color: #ffffff;
    animation: slideUp 0.7s forwards;
}

@keyframes slideDown {
    0% {height: 0;}
    100% {height: 272px;}
}

@keyframes slideUp {
    0% {height: 272px;}
    100% {height: 0;}
}

header {
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    /* position: relative; */
}
```
```
$('.gnb > li').hover(function(){
    $('.gnb ul').stop().slideDown()
}, function(){
    $('.gnb ul').stop().slideUp()
})

$('.gnb').hover(function(){
    $('body').addClass('down')
    $('body').removeClass('up')
}, function(){
    $('body').removeClass('down')
    $('body').addClass('up')
})
```

### inner stroke
#### box-shadow 사용
```
.box_input div input {
    width: 296px;
    height: 40px;
    border: none;
    box-shadow: 0 1px 0 1px #ddd inset; 
    padding-left: 10px;
}
```

### table
```
 <table class="tb">
    <tr>
        <th>구분</th>
        <th>대표전화</th>
        <th>홈페이지</th>
    </tr>
    <tr>
        <td>서울특별시 상수도사업본부</td>
        <td>02-120</td>
        <td><a href="#;">바로가기</a></td>
    </tr>
    <tr>
        <td>인천광역시 상수도사업본부</td>
        <td>032-120</td>
        <td><a href="#;">바로가기</a></td>
    </tr>
    <tr>
        <td>대전광역시 상수도사업본부</td>
        <td>042-121</td>
        <td><a href="#;">바로가기</a></td>
    </tr>
</table>
```
```
.tb {
    width: 980px;
    height: 280px;
    margin-bottom: 80px;
    text-align: center;
    table-layout: fixed;
    border-collapse: collapse;
}

th, td {
    border-bottom: 1px solid #ececec;
    border-left: 1px solid #ececec;
}

th:nth-of-type(1), td:nth-of-type(1) {
    border-left: none;
}

th {
    font-size: 12px;
    font-weight: 700;
    color: #555555;
    background-color: #f8f8f8;
    border-top: 2px solid #12A3CC;
    border-bottom: 2px solid #ececec;
}

td {
    font-size: 12px;
    color: #666666;
}

td a {
    color: #444444;
    text-decoration: underline;
}
```