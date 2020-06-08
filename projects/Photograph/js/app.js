document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', sectionHello);
    window.addEventListener('scroll', sectionText);


    // ! section Animation
    function sectionHello() {
        let hello = document.querySelector('.hello');
        let helloPosition = hello.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (helloPosition < screenPosition) {
            hello.classList.add('helloTransition');
        }
    }

    function sectionText() {
        let sectionText = document.querySelector('.sectionText');
        let sectionTextPosition = sectionText.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (sectionTextPosition < screenPosition) {
            sectionText.classList.add('sectionTextTransition');
        }
    }

    //! mousemove
    let album1 = document.querySelector('.img1');
    let album2 = document.querySelector('.img2');
    let album3 = document.querySelector('.img3');


    album1.addEventListener('mousemove', (e) => {
        if (e.offsetX < 74.5) {
            album1.classList.add('img1');
            album1.classList.remove('img1-transition2');
            album1.classList.remove('img1-transition3');
            album1.classList.remove('img1-transition4');
        } else if (e.offsetX < 149.5) {
            album1.classList.add('img1-transition2');
            album1.classList.remove('img1');
            album1.classList.remove('img1-transition3');
            album1.classList.remove('img1-transition4');
        } else if (e.offsetX < 224) {
            album1.classList.add('img1-transition3');
            album1.classList.remove('img1');
            album1.classList.remove('img1-transition2');
            album1.classList.remove('img1-transition4');
        } else {
            album1.classList.add('img1-transition4');
            album1.classList.remove('img1');
            album1.classList.remove('img1-transition2');
            album1.classList.remove('img1-transition3')
        }
    });

    album2.addEventListener('mousemove', (e) => {
        if (e.offsetX < 74.5) {
            album2.classList.add('img2');
            album2.classList.remove('img2-transition2');
            album2.classList.remove('img2-transition3');
            album2.classList.remove('img2-transition4');
        } else if (e.offsetX < 149.5) {
            album2.classList.add('img2-transition2');
            album2.classList.remove('img2');
            album2.classList.remove('img2-transition3');
            album2.classList.remove('img2-transition4');
        } else if (e.offsetX < 224) {
            album2.classList.add('img2-transition3');
            album2.classList.remove('img2');
            album2.classList.remove('img2-transition2');
            album2.classList.remove('img2-transition4');
        } else {
            album2.classList.add('img2-transition4');
            album2.classList.remove('img2');
            album2.classList.remove('img2-transition2');
            album2.classList.remove('img2-transition3')
        }
    });

    album3.addEventListener('mousemove', (e) => {
        if (e.offsetX < 74.5) {
            album3.classList.add('img3');
            album3.classList.remove('img3-transition2');
            album3.classList.remove('img3-transition3');
            album3.classList.remove('img3-transition4');
        } else if (e.offsetX < 149.5) {
            album3.classList.add('img3-transition2');
            album3.classList.remove('img3');
            album3.classList.remove('img3-transition3');
            album3.classList.remove('img3-transition4');
        } else if (e.offsetX < 224) {
            album3.classList.add('img3-transition3');
            album3.classList.remove('img3');
            album3.classList.remove('img3-transition2');
            album3.classList.remove('img3-transition4');
        } else {
            album3.classList.add('img3-transition4');
            album3.classList.remove('img3');
            album3.classList.remove('img3-transition2');
            album3.classList.remove('img3-transition3')
        }
    });


    // !nav bar

    let btnNav = document.querySelector('.trigram');
    let clck = true;
    btnNav.addEventListener('click', e => {
        let ul = document.querySelector('.navUl');
        if (clck === true) {
            ul.classList.add('navUlTransition');
            clck = false;
        } else {
            ul.classList.remove('navUlTransition');
            clck = true;
        }
    })
































})