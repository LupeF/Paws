const burgerCont = document.getElementById('burger-container');
const navBtn = document.getElementById('hamburger-btn');
const mobileDiv = document.getElementById('mobile-menu');

navBtn.addEventListener('click', () =>{
    navBtn.style.display = 'none';
    mobileDiv.innerHTML = `
        <div class="menu-styles">
            <a href="#">About</a>
            <a href="#">Adopt</a>
            <a href="#">Location</a>
            <a href="#">Contact</a>
        </div>
    `
    const links = document.querySelector('.menu-styles');
    links.classList.add('transition');
});

