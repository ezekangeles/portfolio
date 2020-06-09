document.addEventListener('DOMContentLoaded', () => {

    // !function called

    navBarItem();
    aboutPortfolio();

    // !navbar

    function navBarItem() {


        let btnNav = document.querySelector('.menuBar');
        let btnNavCounter = true;
        btnNav.addEventListener('click', e => {

            let ul = document.querySelector('.navUl');
            if (btnNavCounter === true) {
                ul.classList.add('navUlTransition');
                btnNavCounter = false;
                console.log('eee')

            } else {
                ul.classList.remove('navUlTransition');
                btnNavCounter = true;
                console.log('www')
            }
        });
    }

    // !navBar Inside functions


    function aboutPortfolio() {
        let navAbout = document.querySelector('.navAbout');
        let navProject = document.querySelector('.navProject');
        let profileAboutMe = document.querySelector('.profileAboutMe');
        let portfolioProject = document.querySelector('.portfolioProject');

        navAbout.addEventListener('click', e => {
            profileAboutMe.style.display = 'block';
            portfolioProject.style.display = 'none';
        });

        navProject.addEventListener('click', e => {
            portfolioProject.style.display = 'block';
            profileAboutMe.style.display = 'none';
        });
    }
























})