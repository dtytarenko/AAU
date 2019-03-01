
   var Imtech = {};
   Imtech.Pager = function() {
       this.paragraphsPerPage = 3;
       this.currentPage = 1;
       this.pagingControlsContainer = '#pagingControls';
       this.pagingContainerPath = '#content';
       // число страниц
       this.numPages = function() {
           var numPages = 0;
           //          ('div.z')   
           if (this.paragraphs != null && this.paragraphsPerPage != null) {
           // метод ceil - возвращает наименьшее целое
               numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
           }
   
           return numPages;
       };

   // page - текущая (открытая - номер) страница, то есть в ф-ю передаем номер текущий страницы, контент котор впоследствии выводим
       this.showPage = function(page) {
           this.currentPage = page;
           var html = '';
   // slice - Данный метод не изменяет исходный массив, а просто возвращает его часть.
   // то есть выводит тот контент, котор соответствует текущей странице
           this.paragraphs.slice((page-1) * this.paragraphsPerPage,
               ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
               html += '<li class="events-mainlist__item">' + $(this).html() + '</li>';
           });
   // вставляем контент
           $(this.pagingContainerPath).html(html);
   //                          #pagingControls,  текущая страница(по умолч. 1), общее число страниц     
           renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
       }

   // блок с навигацией
       var renderControls = function(container, currentPage, numPages) {
   // разметка с навигацией
           var pagingControls = '<ul>';
           for (var i = 1; i <= numPages; i++) {
               if (i != currentPage) {
                   pagingControls += '<li><a href="#" onclick="pager.showPage(' + i + '); return false;">' + i + '</a></li>';
               } else {
                   pagingControls += '<li class="active">' + i + '</li>';
               }
           }
   
           pagingControls += '</ul>';
   
           $(container).html(pagingControls);
       }
 
   }   

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