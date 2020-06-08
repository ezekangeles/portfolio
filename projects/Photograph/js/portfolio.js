document.addEventListener('DOMContentLoaded', () => {
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
    });
})