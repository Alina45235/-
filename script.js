    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menuContent');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });