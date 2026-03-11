// передаем класс нашего блока (.swiper) из html
// и после класса - объект с настройками свайпера
const slider = () => {
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',   // передаем класс нашего элемента пагинации (из html)
        },
        navigation: {       // аналогично, передаем классы наших элементов-кнопок
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'coverflow', // 'fade'
        speed: 1000,
    });
}
slider();