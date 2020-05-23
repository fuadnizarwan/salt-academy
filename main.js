let burgerOpen = false;

$(window).scroll(function() {
    if (window.pageYOffset > 60) {
        $('header').addClass('header-scrolled');
        $('header').removeClass('header-unscrolled');
    } else {
        $('header').removeClass('header-scrolled');
        $('header').addClass('header-unscrolled');
    }
});

function openBurger() {
    burgerOpen = !burgerOpen
    if (burgerOpen) {
        $('#burger').addClass('open');
        $('#headeractive').addClass('header-burger-active');
        $('body').addClass('overflow-hidden');
    } else {
        $('#burger').removeClass('open');
        $('#headeractive').removeClass('header-burger-active');
        $('body').removeClass('overflow-hidden');
    }
}

function scrollToasd(id) {
    burgerOpen = false;
    $('#burger').removeClass('open');
    $('#headeractive').removeClass('header-burger-active');
    $('body').removeClass('overflow-hidden');
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 60
    }, 'slow');
}