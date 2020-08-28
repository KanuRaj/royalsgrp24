
// Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#goToTop').fadeIn('slow');
    } else {
        $('#goToTop').fadeOut('slow');
    }
});
$('#goToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 0, 'easeInOutExpo');
    return false;
});
// transform: translate3d(0px, -1px, 0px)
$(document).on("mouseover", ".sr-card", function () {
    $(this).addClass('shadow')
    $(this).css({
        '-webkit-transform': 'translate3d(0px, -5px, 0px)',
        '-moz-transform': 'translate3d(0px, -5px, 0px)',
        '-ms-transform': 'translate3d(0px, -5px, 0px)',
        '-o-transform': 'translate3d(0px, -5px, 0px)',
        'transform': 'translate3d(0px, -5px, 0px)'
    });
});
$(document).on("mouseout", ".sr-card", function () {
    $(this).removeClass('shadow')
    $(this).css({
        '-webkit-transform': 'translate3d(0px, 0px, 0px)',
        '-moz-transform': 'translate3d(0px, 0px, 0px)',
        '-ms-transform': 'translate3d(0px, 0px, 0px)',
        '-o-transform': 'translate3d(0px, 0px, 0px)',
        'transform': 'translate3d(0px, 0px, 0px)'
    });
});

function setProductDetailsHeight(params) {
    var winwid = window.innerWidth;
    if (winwid >= 992) {
        var productImgHeight = $(".product-img").height() + "px";
        $('.product-details').css({ 'max-height': productImgHeight });
    } else {
        $('.product-details').css({ 'max-height': 'initial !important' });
    }
}
setProductDetailsHeight();
$(window).on("resize", () => {
    setProductDetailsHeight();
});

$(document).on("click", ".addToFav", function (e) {
    // $(this).children('i').removeClass("far");
    $(this).children('i').toggleClass("fas");
});
