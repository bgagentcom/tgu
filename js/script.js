//Mobile menu
$('.header__btn').click(function() {
  $('.menu').slideDown();
})

$('.menu__close').click(function() {
  $('.menu').slideUp();
})

//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 400) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});