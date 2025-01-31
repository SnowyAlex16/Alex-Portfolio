const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')


menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function toGraphicsYt(){
    const url = 'https://youtu.be/l84rPQ4s50o';
    window.open(url);
}
function toCV(){
    const url = 'https://docs.google.com/document/d/18w2xyYNUsTJJupOg8Nsbd_FfKeeK_IYH/edit?usp=sharing&ouid=116188126036407737934&rtpof=true&sd=true';
    window.open(url);
}
function toDiss(){
    const url = 'https://drive.google.com/file/d/1okVDHRQdytqc1sTtHdhVvCZ2LE1suTuO/view?usp=sharing';
    window.open(url);
}
function toCYt(){
    const url = 'https://youtu.be/ieL8A9HKIfQ';
    window.open(url);
}
function toItch(){
    const url = 'https://the-scoofy.itch.io/brewmaster-seige';
    window.open(url);
}