const elements = document.querySelectorAll('.set-bg');
console.log(elements);

// object elements, method length - has length of the array
for(let i = 0; i < elements.length; i++) {
    // const element = elements[i];
    // const bg = element.getAttribute('data-setbg');
    // console.log(bg);
    // element.style.backgroundImage = `url(${bg})`;

    console.dir(elements[i]);
    const src = elements[i].dataset.setbg  // gets data-setbg attribute of element
}