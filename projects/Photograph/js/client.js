document.addEventListener('DOMContentLoaded', () => {

    let client1 = document.querySelector('.client1');
    let client2 = document.querySelector('.client2');
    let client3 = document.querySelector('.client3');

    client1.addEventListener('mousemove', e => {

        if (e.offsetX < 90) {
            client1.classList.add('client1');
            client1.classList.remove('client1Transition2');
            client1.classList.remove('client1Transition3');
            client1.classList.remove('client1Transition4');
        } else if (e.offsetX < 180) {
            client1.classList.add('client1Transition2');
            client1.classList.remove('client1Transition3');
            client1.classList.remove('client1Transition4');
            client1.classList.remove('client1');
        } else if (e.offsetX < 270) {
            client1.classList.add('client1Transition3');
            client1.classList.remove('client1Transition2');
            client1.classList.remove('client1Transition4');
            client1.classList.remove('client1');
        } else {
            client1.classList.add('client1Transition4');
            client1.classList.remove('client1Transition2');
            client1.classList.remove('client1Transition3');
            client1.classList.remove('client1');
        }
    })


    client2.addEventListener('mousemove', e => {

        if (e.offsetX < 90) {
            client2.classList.add('client2');
            client2.classList.remove('client2Transition2');
            client2.classList.remove('client2Transition3');
            client2.classList.remove('client2Transition4');
        } else if (e.offsetX < 180) {
            client2.classList.add('client2Transition2');
            client2.classList.remove('client2Transition3');
            client2.classList.remove('client2Transition4');
            client2.classList.remove('client2');
        } else if (e.offsetX < 270) {
            client2.classList.add('client2Transition3');
            client2.classList.remove('client2Transition2');
            client2.classList.remove('client2Transition4');
            client2.classList.remove('client2');
        } else {
            client2.classList.add('client2Transition4');
            client2.classList.remove('client2Transition2');
            client2.classList.remove('client2Transition3');
            client2.classList.remove('client2');
        }
    })

    client3.addEventListener('mousemove', e => {

        if (e.offsetX < 90) {
            client3.classList.add('client3');
            client3.classList.remove('client3Transition2');
            client3.classList.remove('client3Transition3');
            client3.classList.remove('client3Transition4');
        } else if (e.offsetX < 180) {
            client3.classList.add('client3Transition2');
            client3.classList.remove('client3Transition3');
            client3.classList.remove('client3Transition4');
            client3.classList.remove('client3');
        } else if (e.offsetX < 270) {
            client3.classList.add('client3Transition3');
            client3.classList.remove('client3Transition2');
            client3.classList.remove('client3Transition4');
            client3.classList.remove('client3');
        } else {
            client3.classList.add('client3Transition4');
            client3.classList.remove('client3Transition2');
            client3.classList.remove('client3Transition3');
            client3.classList.remove('client3');
        }
    })

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






});