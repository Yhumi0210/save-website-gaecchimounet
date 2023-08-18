function openMenuMobile() {
    document.querySelector('.header-nav').classList.add('open');
    document.querySelector('.overlay-menu-mobile').classList.add('open');
}

function closeMenuMobile() {
    document.querySelector('.header-nav').classList.remove('open');
    document.querySelector('.overlay-menu-mobile').classList.remove('open');
}