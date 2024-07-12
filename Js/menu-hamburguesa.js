



let menu = document.getElementById('hamburger');
let containerLinks = document.querySelector('.nav-bar');
const hamburgerInput = document.querySelector('.hamburger input');
const links = document.querySelectorAll('.header-link');



menu.addEventListener('click', function () {


  containerLinks.classList.toggle('nav-bar')
  containerLinks.classList.toggle('nav-bar-active')



});


links.forEach(link => {
  link.addEventListener('click', () => {
    containerLinks.classList.remove('nav-bar-active');
    containerLinks.classList.add('nav-bar');
    hamburgerInput.checked = false; // Deseleccionamos el input checkbox
  });
});
