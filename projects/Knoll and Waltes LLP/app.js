document.addEventListener('DOMContentLoaded', () => {
    let bol = true;


    document.querySelector('.navIcon').addEventListener('click', (e) => {

        let ul = document.querySelector('nav ul');
        console.log(ul);
        if (bol === true) {
            ul.classList.add('trans');
            // ul.style.transform = 'translateX(0%)';
            bol = false;
            console.log('wew')
        } else {
            ul.classList.remove('trans');
            // ul.style.transform = 'translateX(100%)';
            bol = true;
            console.log('www')
        }
    })
})