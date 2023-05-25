const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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


var dataAtual = new Date();

// Obtém o ano atual
var anoAtual = dataAtual.getFullYear();

var elementDate = document.querySelector('.year-date');
elementDate.innerText = anoAtual;

