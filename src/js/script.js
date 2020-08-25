
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