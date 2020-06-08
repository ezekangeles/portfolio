document.addEventListener('DOMContentLoaded', () => {

    // !dropdown
    let partySize = document.querySelector('.partySize');
    let clck = true;
    let partySizeText = document.querySelector('.partySizeText');

    partySize.addEventListener('click', e => {
        let dropDown = document.querySelector('.dropdown')
        let caretup = document.querySelector('.caretup');
        let caretdown = document.querySelector('.caretdown');

        if (clck === true) {
            dropDown.style.display = 'block';
            caretup.style.display = 'block';
            caretdown.style.display = 'none';
            clck = false;
        } else {
            dropDown.style.display = 'none';
            caretdown.style.display = 'block';
            caretup.style.display = 'none';
            clck = true;
        }

        if (e.target.className === 'person1') {
            partySizeText.textContent = '1 Person';
        } else if (e.target.className === 'person2') {
            partySizeText.textContent = '2 People';
        } else if (e.target.className === 'person3') {
            partySizeText.textContent = '3 People';
        } else if (e.target.className === 'person4') {
            partySizeText.textContent = '4 People';
        } else if (e.target.className === 'person5') {
            partySizeText.textContent = '5 People';
        } else if (e.target.className === 'person6') {
            partySizeText.textContent = '6 People';
        }
    });

    // !main Pizza Pictures

    let pizzaHide = true;
    let arrowDown = document.querySelector('.arrowDown');
    let arrowUp = document.querySelector('.arrowUp');
    let pizzaHidden = document.querySelectorAll('.pizzaHidden');

    arrowDown.addEventListener('click', e => {

        if (pizzaHide === true) {
            Array.from(pizzaHidden).forEach(pizza => {
                arrowUp.style.display = 'block';
                pizza.style.display = 'block';
                arrowDown.style.display = 'none';
                pizzaHide = false;
            });
        }
    });
    arrowUp.addEventListener('click', e => {
        if (pizzaHide === false) {
            Array.from(pizzaHidden).forEach(pizza => {
                arrowUp.style.display = 'none';
                pizza.style.display = 'none';
                arrowDown.style.display = 'block';
                pizzaHide = true;
            });
        }
    });


























})