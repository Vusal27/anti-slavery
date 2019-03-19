// Бургер
var burLink = document.querySelector('.burger-link');

var mbMenu = document.querySelector('.mb-menu');

burLink.addEventListener('click', toggleClass);

var mbMenuLink = document.querySelectorAll (".mb-menu__item");

for (var link of mbMenuLink){
	link.addEventListener('click', toggleClass);
}

function toggleClass() {
    burLink.classList.toggle("burger-link--active");
    mbMenu.classList.toggle("mb-menu--active");
}