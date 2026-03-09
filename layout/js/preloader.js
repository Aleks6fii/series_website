// Preloader is shown before page is loaded, then removed after 500ms ---
const preloader = document.querySelector('.preloader');
preloader.classList.add('active');

setTimeout(() => {
    preloader.classList.remove('active')
}, 500);
