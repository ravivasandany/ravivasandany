const menuToggle = document.querySelector('.menu-mobile input');
const nav = document.querySelector ('nav ul');

menuToggle.addEventListener('click', function () {
 nav.classList.toggle('slide');
});