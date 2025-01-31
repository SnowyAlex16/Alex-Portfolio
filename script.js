

const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')


menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function DownloadCV() {
    const url = `Alexandre Kouda.pdf`;
    window.open(url);
}
function toGraphicsYt1{
    const url = 'https://youtu.be/l84rPQ4s50o';
    window.open(url);
}
function toItch{
    const url = 'https://the-scoofy.itch.io/brewmaster-seige'
    window.open(url)
}
function toCYt{
    const url = 'https://youtu.be/ieL8A9HKIfQ'
    window.open(url);
}