// Javascript

aside = document.querySelector('.aside-nav')
menuIcon = document.querySelector('.menuIcon')
closeIcon = document.querySelector('.closeIcon')

menuIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});

closeIcon.addEventListener('click', () => {
    aside.classList.toggle('dis-inline');
});