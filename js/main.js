$(document).ready(function () {
    $('.marker__container').on('mouseout', function () {
        $('div.marker__pop-up').removeClass('marker__pop-up--active')
    });

    $('.marker-wrapper').on('mouseover', function () {
        $(this).siblings('div.marker__pop-up').addClass('marker__pop-up--active');
    });

    $('.map-btn').on('click', function () {
        $('.map-btn').removeClass('active');
        $(this).addClass('active');
    });

    $(document).mouseup(function (e) {
        let button = $('.map-btn');
        if (!button.is(e.target) && button.has(e.target).length === 0) {
            $(button).removeClass('active');
        }
    });

    $('.field').on('mouseover', function (e) {
        e.preventDefault();
        $(this).find('.info-wrapper').addClass('info-wrapper--active');
    });

});

