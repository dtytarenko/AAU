// calendar js
var monthNames = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
var calendarDate = new Date()
var monthNum = calendarDate.getMonth();
var prevMonth = monthNames[monthNum - 1];
var nextMonth = monthNames[monthNum + 1];

   $(document).ready(function() {
    $('#calendar').fullCalendar({
        firstDay: 1, /* первый день  недели */ 
        defaultView: 'month',
        header: {
            left: 'prev,next',
            center: 'title',
        },
        viewRender: function (view, element) {
            var monthNames = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
            var currentMonth = $("#calendar").fullCalendar('getDate').month();
            var customMonth = monthNames[currentMonth];
            $('.fc-prev-button, .fc-next-button').click(function(){
                prevMonth = monthNames[customMonth - 1];
                nextMonth = monthNames[currentMonth + 1];
            });
        },
        monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
        monthNamesShort: ['Січ.','Лют.','Бер.','Квіт.','Трав.','Черв.','Лип.','Серп.','Вер.','Жовт.','Лис.','Груд.'],
        dayNames: ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],
        dayNamesShort: ["НД","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
        buttonText: {
            prev: prevMonth,
            next: nextMonth
        },
    });
    
    $('.fc-prev-button, .fc-next-button').click(function(){
        var currentMonth = $("#calendar").fullCalendar('getDate').month();
        var customMonth = monthNames[currentMonth];
        prevMonth = monthNames[customMonth - 1];
        nextMonth = monthNames[currentMonth + 1];
    });
});

// tabs

$(document).ready(function() {
    $('.calendar-content__descr-list--item').click(function() {
        $(this).find('.calendar-content__descr-list--item__descr').slideToggle( "slow");
        $(this).find('.calendar-content__descr-list--item__descr').css('display', 'flex');
        $(this).toggleClass('active');
    });
});

// tabs

// slider

$(document).ready(function () {
    $('.partners-event__js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
    ]
    });
});


$(document).ready(function () {
    $('.event__speaker-personlist').slick({
        dots: true,
        dotsClass: "main-dots",
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        ]
    });
});