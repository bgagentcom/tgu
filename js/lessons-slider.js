function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".lessons__slider");
  
  if (checkWidth > 1239) {
    if (typeof owlPost.data('owl.carousel') != 'undefined') {
      owlPost.data('owl.carousel').destroy();
    }
    owlPost.removeClass('owl-carousel');
  } else if (checkWidth < 1240) {
    owlPost.addClass('owl-carousel');
    owlPost.owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      navText:["",""],
      autoWidth: true,
    });
  }
}

postsCarousel();
$(window).resize(postsCarousel);	