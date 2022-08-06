$(function () {
  $(".desighn__slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow:
      '<img src="/img/ArrowLeft.svg" alt="" class="arrow arrow-left" />',
    nextArrow:
      '<img src="/img/ArrowRight.svg" alt="" class="arrow arrow-right" />',
  });
});
