// Javascript
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


aside = document.querySelector('.aside-nav')
menuIcon = document.querySelector('.menuIcon')
closeIcon = document.querySelector('.closeIcon')

menuIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});

closeIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});