const links = document.querySelector('.nav-links');
const tripleBarMenu = document.querySelector('.triple-bar-menu');
const closeMenu = document.querySelector('.close-menu');
const button = document.querySelector('.buttons');

tripleBarMenu.addEventListener('click', function() {
    links.style.display = 'flex';
    links.style.top = '-10px';
    links.style.backgroundImage = "url('css/background.png')";
    closeMenu.style.display = 'unset';
    closeMenu.style.display = 'absolute';
    closeMenu.style.top = '30px';
    button.style.display = 'unset';
});

closeMenu.addEventListener('click', function() {
    links.style.top = '-130%';
    closeMenu.style.display = 'none';
    button.style.display = 'none';
});
