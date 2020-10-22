new ModalVideo($(".js-modal-btn"));

const navLinks = $(".nav__wrapper__list__item__link");

navLinks.on('click', function(event) {
    $('body, html').animate({
        scrollTop: $(`.${$(event.target).data('scroll')}`).offset().top - 100
    }, 1000);
});

$('.header__inner-wrapper__arrow-link').on('click', function(event) {
    $('body, html').animate({
        scrollTop: $('.team').offset().top - 100
    }, 1000);
})  

$(window).on('scroll', function() {
    for(let i = 0; i < navLinks.length; i++) {
        navLinks.removeClass('active__link');
    }
    if($(window).scrollTop() + 300 < $('.team').offset().top) {
        $('.flink').addClass('active__link');
    } else if($(window).scrollTop() + 300 < $('.contact').offset().top) {
        $('.slink').addClass('active__link');
    } else {
        $('.tlink').addClass('active__link');
    }
})