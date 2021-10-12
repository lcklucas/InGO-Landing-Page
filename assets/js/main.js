// MENU TOGGLE SHOW / HIDE
const navToggle = document.getElementById('nav__toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('close-menu-icon');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}