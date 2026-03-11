const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton');

    // объект event содержит всю информацию о произошедшем событии
    // таргет, координаты и тп.
    // метод preventDeafult 
    // (можно найти, пройдя по цепочке прототипов в выводе консоли в браузере)
    // позволяет отменить дефолтное поведение элементов на странице

    topBtn.addEventListener('click', (event) => {
        event.preventDefault;

        // обращаемся к глобальному объекту window - метод window.scrollTo
        // но он может работать криво, поэтому лучше воспользоваться сторонней библиотекой
        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    });
}