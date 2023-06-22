$(document).ready(function () {
  var slider_wrapper = new Swiper(".slider-wrapper-c", {
    wrapperClass: "slider-list-c",
    slideClass: "slider-item-c",
    navigation: {
      nextEl: '.next-slide-c',
      prevEl: '.prev-slide-c'
    },
    pagination: {
      type: 'bullets',
      el: '.pagination',
      clickable: true,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: true, 
    },
    speed: 1000,
    slidesPerView: 'auto',
    loop: true,
    on: {
      init: function () {
        $('.slider-wrapper-c').on('mouseover', function () {
          slider_wrapper.autoplay.stop();
        });

        $('.slider-wrapper-c').on('mouseout', function () {
          slider_wrapper.autoplay.start();
        });
      },
    },
  });
});
