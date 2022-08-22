const login = document.querySelector('.header__login__button');
const pop = document.querySelector('.popup');
const overlay = document.querySelector('.popup__overlay');
const cros = document.querySelector('.popup__btn-close')

login.addEventListener('click', openMenu);
overlay.addEventListener('click', openMenu);
cros.addEventListener('click', openMenu)

function openMenu() {
    pop.classList.toggle('popup--active');
    overlay.classList.toggle("popup__overlay--active");
}

const humburger = document.querySelector('.header_humburger');
const mobileMenu = document.querySelector('.header__mobile');
// const overlay = document.querySelector('.popup__overlay');
// const mcros = document.querySelector('.popup__btn-close')

humburger.addEventListener('click', openMenum);
// overlay.addEventListener('click', openMenum);
// mcros.addEventListener('click', openMenu)

function openMenum() {
    mobileMenu.classList.toggle('header__mobile--active');
    // overlay.classList.toggle("popup__overlay--active");
}