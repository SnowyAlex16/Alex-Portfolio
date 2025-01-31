const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')


menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function toGraphicsYt(){
    window.open('https://youtu.be/l84rPQ4s50o')
}