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

            } else {
                ul.classList.remove('navUlTransition');
                btnNavCounter = true;
            }
        });
    }

    // !navbar hide

    let navUl = document.querySelector('.navUl');
    let navAbout = document.querySelector('.navAbout');
    let navProject = document.querySelector('.navProject');
    let navDownload = document.querySelector('.navDownload');
    let ul = document.querySelector('.navUl');

    navUl.addEventListener('click', e => {
        if (e.target.className == 'navAbout' || e.target.className == 'navProject' || e.target.className == 'navDownload') {
            ul.classList.remove('navUlTransition');
        }
    })

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