const burgerCont = document.getElementById('burger-container');
const navBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('nav ul');

burgerCont.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
})


