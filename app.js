const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 0);
});

const menu = document.querySelector('.menu');
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
    }
}); 
const navLinks = document.querySelector('.nav-links');
function showNavLinks() {
    navLinks.classList.toggle('active');
    menu.classList.toggle('active');
    menu.classList.remove('open');
    menuOpen = false;
}