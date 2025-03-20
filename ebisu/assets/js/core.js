document.addEventListener('DOMContentLoaded', () => {
/*//////////////////////////////////////////////////*/
/* MOBI MENU */
/*//////////////////////////////////////////////////*/
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('mobi-menu');
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('change');
      navLinks.classList.toggle('active');
    });
 
/*//////////////////////////////////////////////////*/
/* LANGUAGE MENU */
/*//////////////////////////////////////////////////*/ 
const firstLink = document.querySelector('#lang a');

firstLink.addEventListener('click', function() {
    const navElement = document.getElementById('lang');
    navElement.classList.toggle('active');
});
/*//////////////////////////////////////////////////*/ 
});