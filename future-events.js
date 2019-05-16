$(document).ready(function()
{
   var fc = new ForumsCalendar();
});

var ForumsCalendar = function()
{
    var $this = this,
        initCalendar = function(dates)
        {
            var calendar = $this.calendarCont.fullCalendar({
                defaultDate: $this.currentDate,
                firstDay: 1, /* первый день  недели */
                header: {
                    left: 'prev,next',
                    center: 'title',
                },
                selectable: true,
                dayClick: function(date, jsEvent, view)
                {
                    // from main to calendar
                    // if ($this.loadOnlyDates)
                    {
                        if (!$("[data-date='" + date.format() + "']", $this.calendarCont).hasClass('hasEvent')) {
                            return;
                        }
                        $.post($this.pageurl + '/gotodate', {date: date.format()}, function(resp)
                        {
                            if (resp.loc) {
                                location.href = resp.loc;
                            }
                        }, 'json');
                    }
                },
                viewRender: function (view, element) {
                    var customMonth = $this.monthNames[$this.calendarCont.fullCalendar('getDate').month()];
                },
                monthNames: $this.monthNames,
                monthNamesShort: ['Січ.','Лют.','Бер.','Квіт.','Трав.','Черв.','Лип.','Серп.','Вер.','Жовт.','Лис.','Груд.'],
                dayNames: ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],
                dayNamesShort: ["НД","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
                buttonText: {
                    prev: $this.monthNames[$this.monthNum - 1] || $this.monthNames[11],
                    next: $this.monthNames[$this.monthNum + 1] || $this.monthNames[0]
                }
            });
            if ($this.forumsCont.length)
            {
                $('.calendar-content__descr-list--item', $this.forumsCont).each(function() {
                    $("[data-date='" + $(this).data('date') + "']", $this.calendarCont).addClass("hasEvent");
                });
            }
            else if (dates)
            {
                for (var i in dates) {
                    $("[data-date='" + dates[i] + "']", $this.calendarCont).addClass("hasEvent");
                }
            }
            $('.fc-prev-button, .fc-next-button', $this.calendarCont).click(gotoDate);
        },
        gotoDate = function()
        {
            var m = $this.calendarCont.fullCalendar('getDate').month() + 1,
                y = $this.calendarCont.fullCalendar('getDate').year();
            if (m < 10) {
                m = '0' + m;
            }
            var url = $this.pageurl + '/' + m + '.' + y;
            if ($this.calendarPage) {
                window.History.pushState(null, document.title, url);
            }
            else {
                loadCalForums(url);
            }
        },
        loadCalForums = function(url)
        {
            $.post(url, {loadOnlyDates: $this.loadOnlyDates}, function (resp)
            {
                if (resp.error) {
                    return showModal(resp.error);
                }
                if ($this.forumsCont.length) {
                    $this.forumsCont.html(resp.list);
                }
                $this.calendarCont.fullCalendar('destroy');
                $this.currentDate = resp.currentDate;
                $this.monthNum = parseInt(resp.monthNum);
                initCalendar($this.forumsCont.length ? '' : (resp.list ? resp.list.split(',') : ''));  // main page
            }, 'json');
        },
        init = function()
        {
            $this.calendarPage = $('.calendar-page').length;
            $this.forumsCont = $('#forumscont');
            var calendarData = $('#calendardata'),
                calDates = calendarData.data('caldates');
            $this.pageurl = calendarData.data('pageurl');
            $this.currentDate = calendarData.data('currentdate');
            $this.monthNum = parseInt(calendarData.data('monthnum'));
            $this.loadOnlyDates = calendarData.data('loadonlydates');
            $this.monthNames = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
            $this.calendarCont  = $('#calendar');
            initCalendar(calDates ? calDates.split(',') : false);
            if ($this.forumsCont.length)
            {
                $this.forumsCont.on('click', '.calendar-content__descr-list--item', function()
                {
                    var obj = $(this);
                    obj.find('.calendar-content__descr-list--item__descr').slideToggle( "slow");
                    obj.find('.calendar-content__descr-list--item__descr').css('display', 'flex');
                    obj.toggleClass('active');
                });
            }
            if ($this.calendarPage)
            {
                $(window).bind('statechange', function() {
                    loadCalForums(window.History.getState().url)
                });
            }
        };
    init();
};

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
        lazyLoad: 'ondemand',
        autoplay: true,
        infinite: false,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
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
                infinite: false,
                dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
                }
            },
            ]
    });
});