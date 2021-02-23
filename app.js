const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-buttons');
window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 0);
});

function showNavLinks() {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}
