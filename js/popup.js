const humburger = document.querySelector('.header__login__button');
const mobileMenu = document.querySelector('.popup');
const overlay = document.querySelector('.popup__overlay');
const cros = document.querySelector('.popup__btn-close')

humburger.addEventListener('click', openMenu);
overlay.addEventListener('click', openMenu);
cros.addEventListener('click', openMenu)

function openMenu() {
    mobileMenu.classList.toggle('popup--active');
    overlay.classList.toggle("popup__overlay--active");
}