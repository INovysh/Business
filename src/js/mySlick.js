$(document).ready(function () {
  $(".expert__slick").slick({
    speed: 1200,
    prevArrow:
      '<button style="background: transparent" type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow:
      '<button style="background: transparent" type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
