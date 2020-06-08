document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    let imgs = document.querySelectorAll('.sliders');


    // !function called

    slider();

    function clear() {
        Array.from(imgs).forEach(img => {
            img.style.opacity = '0';
        })
    }


    function slider() {
        setInterval(() => {
            clear();
            if (counter === imgs.length) {
                counter = 0;
            }
            imgs[counter].style.opacity = '1';
            counter++;
        }, 3000);
    }


    // !nav bar

    let navBar = document.querySelector('.trigram');
    let clck = true;
    let ul = document.querySelector('.navigation')
    navBar.addEventListener('click', e => {
        if (clck === true) {
            ul.classList.add('navigationTransition');
            clck = false;
        } else {
            ul.classList.remove('navigationTransition');
            clck = true;
        }
    });



})