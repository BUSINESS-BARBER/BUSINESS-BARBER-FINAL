const links = document.querySelector('.nav-links');
const tripleBarMenu = document.querySelector('.triple-bar-menu');
const closeMenu = document.querySelector('.close-menu');

tripleBarMenu.addEventListener('click', function() {
    links.style.display = 'flex';
    links.style.top = '-10px';
    links.style.backgroundImage = "url('css/background.png')";
    closeMenu.style.display = 'unset';
    closeMenu.style.display = 'absolute';
    closeMenu.style.top = '10px';
});

closeMenu.addEventListener('click', function() {
    links.style.top = '-110%';
    closeMenu.style.display = 'none';
});
