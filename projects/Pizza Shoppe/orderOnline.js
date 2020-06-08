document.addEventListener('DOMContentLoaded', () => {
    // !functions
    orderOnlineMenu();
    cartAddItem();
    menuClicked();




    // !order online menu 
    function orderOnlineMenu() {

        let menuLeft = document.querySelector('.MenuLeft');
        let menuArrow = true;

        menuLeft.addEventListener('click', e => {
            let menuHeight = document.querySelector('.menuHeight');

            let circleArrow = document.querySelector('.circleArrow');


            if (menuArrow === true) {
                menuHeight.classList.add('menuHeightTransition');
                circleArrow.classList.add('circleArrowAnimation');
                menuArrow = false;
            } else {
                menuHeight.classList.remove('menuHeightTransition');
                circleArrow.classList.remove('circleArrowAnimation');
                menuArrow = true;
            }
        });


        let menuAntipasti = document.querySelector('.menuAntipasti');
        let menuPizza = document.querySelector('.menuPizza');

        menuAntipasti.addEventListener('click', e => {
            let mainMenuContainerAntipasti = document.querySelector('.mainMenuContainerAntipasti');
            let mainMenuContainerPizza = document.querySelector('.mainMenuContainerPizza');

            mainMenuContainerAntipasti.style.display = 'block';
            mainMenuContainerPizza.style.display = 'none';
        })

        menuPizza.addEventListener('click', e => {
            let mainMenuContainerAntipasti = document.querySelector('.mainMenuContainerAntipasti');
            let mainMenuContainerPizza = document.querySelector('.mainMenuContainerPizza');

            mainMenuContainerAntipasti.style.display = 'none';
            mainMenuContainerPizza.style.display = 'block';
        });
    }



    // !Hide Cart
    function cartShow() {

        let menuToCartContainer = document.querySelector('.menuToCartContainer');
        let btnClose = document.querySelector('.btnClose');

        btnClose.addEventListener('click', e => {
            menuToCartContainer.classList.remove('menuToCartContainerTransitionShow');
        })
    }


    // !quantity Count
    function cartAddItem() {
        let minusItem = document.querySelector('.minusItem');
        let addItem = document.querySelector('.addItem');
        let quantityOfItem = document.querySelector('.QuantityOfItem');
        itemQuantity = 1;

        minusItem.addEventListener('click', () => {
            if (itemQuantity > 2) {
                minusItem.style.display = 'block';
                console.log(itemQuantity)
            } else {
                minusItem.style.display = 'none';
                console.log(itemQuantity)
            }
            itemQuantity--;
            quantityOfItem.textContent = itemQuantity;
        })

        addItem.addEventListener('click', () => {
            if (itemQuantity > -1) {
                minusItem.style.display = 'block';
                console.log(itemQuantity)
            } else {
                minusItem.style.display = 'none';
                console.log(itemQuantity)
            }
            itemQuantity++;
            quantityOfItem.textContent = itemQuantity;
        })
    }

    // !quantity clear

    function quantityClear() {

    }

    // !menu Clicked

    function menuClicked() {

        let antipasti1 = document.getElementById('antipasti1');
        let menuTitle = document.querySelector('#menuTitle');
        let menuPrice = document.querySelector('#menuPrice');
        let menuToCartContainer = document.querySelector('.menuToCartContainer');
        antipasti1.addEventListener('click', e => {

            menuToCartContainer.classList.add('menuToCartContainerTransitionShow');
            menuTitle.textContent = 'HOUSE OF ANITPASTI';
            menuPrice.textContent = '9'

            cartShow();

        });

        let antipasti2 = document.getElementById('antipasti2');
        antipasti2.addEventListener('click', e => {

            menuToCartContainer.classList.add('menuToCartContainerTransitionShow');
            menuTitle.textContent = 'FRESH ARUGALA';
            menuPrice.textContent = '8'

            cartShow();

        });

        let antipasti3 = document.getElementById('antipasti3');
        antipasti3.addEventListener('click', e => {

            menuToCartContainer.classList.add('menuToCartContainerTransitionShow');
            menuTitle.textContent = 'CAPRESE';
            menuPrice.textContent = '7'

            cartShow();

        });

        let antipasti4 = document.getElementById('antipasti4');
        antipasti4.addEventListener('click', e => {

            menuToCartContainer.classList.add('menuToCartContainerTransitionShow');
            menuTitle.textContent = 'PANZANELLA';
            menuPrice.textContent = '13'

            cartShow();

        });

        let antipasti5 = document.getElementById('antipasti5');
        antipasti5.addEventListener('click', e => {

            menuToCartContainer.classList.add('menuToCartContainerTransitionShow');
            menuTitle.textContent = 'SHAWARMA';
            menuPrice.textContent = '10'

            cartShow();

        });

    }

    // !item Shows
    function addItemsToCart() {
        let addOrder = document.querySelector('#addOrder');
        let itemsAdded = document.querySelector('.itemsAdded');
        let orderList = document.querySelector('.orderList');
        addOrder.addEventListener('click', e => {

            let newLi = document.createElement('li');
            newLi.className = 'orderList';
            itemsAdded.appendChild(newLi);

            let newQuantityXOrder = document.createElement('div')
            newQuantityXOrder.className = 'quantityXOrder';
            newLi.appendChild(newQuantityXOrder);

            let newMyOrderQuantity = document.createElement('p')
            newMyOrderQuantity.className = 'myOrderQuantity';
            newQuantityXOrder.appendChild(newMyOrderQuantity);
            newQuantityXOrder.textContent = '3'

            let p = document.createElement('p')
            p.textContent = 'x';
            newQuantityXOrder.appendChild(p);

            let newMyOrderOrder = document.createElement('p')
            newMyOrderOrder.className = 'myOrderOrder';
            newQuantityXOrder.appendChild(newMyOrderOrder);
            newMyOrderOrder.textContent = 'wew';

            console.log(newQuantityXOrder)





        });
    }

    addItemsToCart();









































})