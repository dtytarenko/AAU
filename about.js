$(function()
{
    new Regrole();
    new Subscribe();
    new Search();

    $( ".menu-burger-wrap" ).click(function() {
        $( ".main-menu").slideToggle( "slow");
        $( ".main-menu").css('display', 'flex');
        $(this).toggleClass("active");
        $('.main-menu').toggleClass("active");
    });
    var menu = $('ul.menu');
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        menu.slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        }
    });
    $('> li.menu-item', menu).click(function()
    {
        var obj = $(this);
        obj
            .toggleClass('active')
            .find("> .submenu").toggleClass('active');
    });
    $('li.item__with-second-menu', menu).click(function(e)
    {
        e.stopPropagation();
        var obj = $(this);
        obj
            .toggleClass('active')
            .children('.second-submenu').toggleClass('active');
    });
    $('li.item__with-second-menu > a', menu).click(function(e)
    {
        if (window.innerWidth <= 1280) {
            e.preventDefault();
        }
    });

    $('.general-partners__js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
            }
        }
    ]
    });
    var partnersSlider = $('.partners-committee__js'),
        slides = partnersSlider.data('slides');
    partnersSlider.slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: slides || 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
            }
        }
    ]
    });
    var mediaSlider = $('.media-partners__js'),
        mediaSlides = partnersSlider.data('slides');
    mediaSlider.slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: mediaSlides || 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
            }
        }
    ]
    });
    $('a[data-sharer]').click(function(e) {
        e.preventDefault();
    })
});

Regrole = function()
{
    var $this = this,
    loadForm = function(e)
    {
        e.preventDefault();
        if (!$this.modal.html())
        {
            $.post('/cpanel/regroleform', function(resp)
            {
                if (resp.error) {
                    return showModal(resp.error);
                }
                $this.modal.html(resp.html);
                $this.form = $this.modal.find('form');
                $this.form.submit(submit);
                $('.popup-close', $this.modal).click(function () {
                    hideModal($this.modal);
                });
                showModal($this.modal);
            }, 'json');
        }
        else {
            showModal($this.modal);
        }
    },
    submit = function(e)
    {
        e.preventDefault();
        $this.form.find('button[type=submit]').prop('disabled', true);
        $this.form.fadeTo('fast', 0.6, function() {
            $.post($this.form.attr('action'), $this.form.serialize(), response, 'json');
        })
    },
    response = function(resp)
    {
        $this.form.find('button[type=submit]').prop('disabled', false);
        $this.form.fadeTo('fast', 1);
        $this.form.find('.error').removeClass('error');
        if (resp.fields)
        {
            for (var i = 0; i < resp.fields.length; ++i)
            {
                var f = $this.form.find('[name="' + resp.fields[i].field + '"]');
                f.parent().removeClass('success').addClass('error');
            }
            $this.form.find('[name="' + resp.fields[0].field + '"]').focus();
        }
        else if (resp.error) {
            showModal(resp.error);
        }
        else {
            location.href = resp.loc;
        }
    },
    init = function()
    {
        $this.loadForm = $('.js-regroleformload');
        $this.modal = $('#regrolemodal');
        $this.loadForm.click(loadForm);
    };
    init();
};
Subscribe = function()
{
    var $this = this,
    submit = function(e)
    {
        e.preventDefault();
        $this.form.find('[type=submit]').prop('disabled', true);
        $this.form.fadeTo('fast', 0.6, function() {
            $.post($this.form.attr('action'), $this.form.serialize(), response, 'json');
        })
    },
    response = function(resp)
    {
        $this.form.find('[type=submit]').prop('disabled', false);
        $this.form.fadeTo('fast', 1);
        $this.form.find('.error').removeClass('error');
        if (resp.fields)
        {
            for (var i = 0; i < resp.fields.length; ++i)
            {
                var f = $this.form.find('[name="' + resp.fields[i].field + '"]');
                f.parent().removeClass('success').addClass('error');
            }
            $this.form.find('[name="' + resp.fields[0].field + '"]').focus();
        }
        else if (resp.error)
        {
            if (resp.sitekey)
            {
                showModal(resp.error, {
                    sitekey:  resp.sitekey,
                    callback: function (result) {
                        hideModal(modal);
                        $this.form.find('input[name="g-recaptcha-response"]').val(result);
                        $this.form.submit();
                    }
                });
            }
            else {
                showModal(resp.error);
            }
        }
        else
        {
            $this.form[0].reset();
            $this.inp.removeClass('has-value');
            showModal(resp.message);
        }
    },
    setLabelPosition = function(e)
    {
        if ($this.inp.val()) {
            $this.inp.addClass('has-value');
        }
        else {
            $this.inp.removeClass('has-value');
        }
    },
    init = function()
    {
        $this.form = $(document.subscribeform);
        $this.form.submit(submit);
        $this.inp = $('input.input-search', $this.form);
        $this.inp.keyup(setLabelPosition);
        $('#subscribesubmit').click(submit);
    };
    init();
};

Search = function()
{
    var $this = this,
        t = 0,
    submit = function(e)
    {
        e.preventDefault();
        var search = $.trim($this.inp.val());
        if (search.length < 3) {
            return;
        }
        location.href = $this.loc + '/' + search;
    },
    setLabelPosition = function(e)
    {
        if ($this.inp.val()) {
            $this.inp.addClass('has-value');
        }
        else {
            $this.inp.removeClass('has-value');
        }
    },
    init = function()
    {
        $this.form = $(document.searchform);
        $this.inp = $('input.input-search', $this.form);
        $this.loc = $this.form.attr('action');
        $('.submit-search__wrap', $this.form).click(submit);
        $this.form.submit(submit);
        $this.inp.keyup(setLabelPosition);
    };
    init();
}