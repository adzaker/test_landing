import setSwiper from "../libs/setSwiper";

const initSwipers = () => {
  setSwiper('.swiper-container', {
    loop: true,
      slidesPerView: window.innerWidth > 1024 ? 3 : window.innerWidth > 736 ? 2 : 1,
      pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })
};

export default initSwipers;