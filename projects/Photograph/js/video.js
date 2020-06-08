document.addEventListener('DOMContentLoaded', () => {

    let ul = document.querySelector('.videoSearch ul');
    let p = document.querySelector('.par p')
    let counter = true;


    p.addEventListener('click', e => {
        if (counter === true) {
            ul.classList.add('ulTrans');
            counter = false;
            console.log(ul)
        } else {
            ul.classList.remove('ulTrans');
            counter = true;
            console.log(ul)
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