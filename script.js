import axios from "axios"
import download from "downloadjs"

const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')


menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function toGraphicsYt(){
    const url = 'https://youtu.be/l84rPQ4s50o';
    window.open(url);
}
function toGraphicsYt(){
    const url = 'https://youtu.be/l84rPQ4s50o';
    window.open(url);
}
function toGraphicsYt(){
    const url = 'https://youtu.be/l84rPQ4s50o';
    window.open(url);
}
export const DownloadCV = async () => {
    const url = `https://www.googleapis.com/drive/v3/files/${import.meta.env.VITE_DOCUMENT_ID}/export?key=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(url, { responseType: 'blob', params: { 'mimeType': 'application/pdf' } })
    try {
        download(response.data, 'Alexandre Kouda.pdf', 'application/pdf')
    } catch (error) {
        console.debug(`Error getting file: ${error}`)
    }
}