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
    button.style.marginTop = '100px';
});

closeMenu.addEventListener('click', function() {
    links.style.top = '-130%';
    closeMenu.style.display = 'none';
    button.style.display = 'none';
    button.style.marginTop = '30px';
});









window.addEventListener('resize', function() {
    const buttons = document.getElementsByClassName('buttons');

    function deactivateNavButtons() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'none';
        }
    }

    function activateNavButtons() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'unset';
            buttons[i].style.marginTop = '30px';
        }
    }
    
    const mediaQuery600 = window.matchMedia("(max-width: 600px)");
    const mediaQuery875 = window.matchMedia("(max-width: 875px)");
    const mediaQuery2000 = window.matchMedia("(max-width: 2000px)");

    if (mediaQuery600.matches) {
        deactivateNavButtons();
    } else if (mediaQuery875.matches) {
        activateNavButtons();
    } else if (mediaQuery2000.matches) {
        activateNavButtons();
    }
});