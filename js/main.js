$(document).ready(function () {
    // Hide info pop-up if it hasn't target
    $('.marker-wrapper').on('mouseout', function () {
        $('div.marker__pop-up.marker__pop-up--active').removeClass('marker__pop-up--active');
        setTimeout(function () {
            $('div.marker__pop-up.marker__pop-up--main').removeClass('marker__pop-up--main');
        },100);
    });

    // Show info pop-up
    $('.marker__container').on('mouseover', function () {
        let main = $(this).find('div.marker__pop-up');
        $(main).addClass('marker__pop-up--main');
        setTimeout(function () {
            $(main).addClass('marker__pop-up--active');
        },100);
    });

    $('.map-btn').on('click', function () {
        $('.map-btn').removeClass('active');
        $(this).addClass('active');

        // For sale
        if ($('.map-btn.active').hasClass('map-btn--darkblue')) {
            $('.field').removeClass('field--active');
            $('.field.field--sale').addClass('field--active');
        }
        // For sold
        else if ($('.map-btn.active').hasClass('map-btn--orange')) {
            $('.field').removeClass('field--active');
            $('.field.field--sold').addClass('field--active');
        }
        // For share
        else {
            $('.field').removeClass('field--active');
            $('.field.field--share').addClass('field--active');
        }
    });

    // Remove button style if it hasn't target
    $(document).mouseup(function (e) {
        let button = $('.map-btn');
        if (!button.is(e.target) && button.has(e.target).length === 0) {
            $(button).removeClass('active');
            $('.field').removeClass('field--active');
        }
    });

    // Show field's info
    $('.field').on('mouseover', function (e) {
        let main = $(this).find('.info-wrapper');
        $(main).addClass('info-wrapper--main');
        setTimeout(function () {
            $(main).addClass('info-wrapper--active');
        },100);
    });

    // Hide field's info if it hasn't target
    $('section.field').on('mouseout', function (e) {
        $('.info-wrapper').removeClass('info-wrapper--active', 'info-wrapper--main');
        let main = $(this).find('.info-wrapper');
        $(main).removeClass('info-wrapper--active');
        setTimeout(function () {
            $(main).removeClass('info-wrapper--main');
        },100);
    });

});

