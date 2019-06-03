var CSRFtoken, modal, moverlay,
showModal = function(title, body)
{
    if (typeof title == 'object')
    {
        moverlay.slideDown('fast');
        title.slideDown('fast');
        return;
    }
    modal.find('h4').html(title);
    var mbody = modal.find('p'),
        gcCont = mbody.find('> .gc');
    if (body)
    {
        if (typeof body == 'string') {
            mbody.html(body);
        }
        else if (typeof body == 'object')
        {
            if (gcCont[0]) {
                grecaptcha.reset();
            }
            else
            {
                mbody.html('<div class="mt-20 gc"></div>');
                gcCont = mbody.find('> .gc');
                grecaptcha.render(gcCont[0], {
                    sitekey: body.sitekey,
                    callback: body.callback
                });
            }
        }
        mbody.show();
    }
    else {
        mbody.hide();
    }
    moverlay.slideDown('fast');
    modal.slideDown('fast')
},
hideModal = function(el)
{
    el.slideUp('fast', function () {
        if ($('.js-modal:visible').length == 0) {
            moverlay.slideUp('fast');
        }
    });
},
showError = function(responseText)
{
    var errCont = $('#sb_error_message');
    if (errCont.length)
    {
        errCont.append('<br><br>');
        errCont.append($(responseText).find('>div'));
    }
    else
    {
        var errCont = $(responseText);
        if (errCont.attr('id') == 'sb_error_message') {
            $('body').append(responseText);
        }
        else {
            showModal('Возникла ошибка');
        }
    }
};

$(function()
{
    CSRFtoken = $('head > meta[name="csrf_token"]').attr('content');
    modal = $('#modal');
    moverlay = $('#moverlay');
    $('.popup-close').click(function () {
        hideModal($(this).parent());
    });
    moverlay.click(function () {
        hideModal($('.js-modal'));
    });
    $.ajaxSetup(
    {
        beforeSend: function(xhr)
        {
            if (CSRFtoken) {
                xhr.setRequestHeader('X-CSRF-Token', CSRFtoken);
            }
            document.body.style.cursor = 'progress';
        },
        complete: function(xhr, textStatus)
        {
            if (typeof xhr.responseJSON == 'object' && xhr.responseJSON.debugInfo) {
                showError(xhr.responseJSON.debugInfo);
            }
            document.body.style.cursor = 'auto';
            if (xhr.responseJSON.reload) {
                location.href = location.href.split('#')[0]
            }

        },
        error: function(resp) {
            showError(resp.responseText);
        }
    });
    $.mask.definitions['~'] = "[+-]";
});

$('.dev-close').click(function() {
    $(".develop").slideToggle('fast');
});