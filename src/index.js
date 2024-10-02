import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';

AOS.init({
    duration:2000
})



let menuexpand = false;


menu_btn.addEventListener("click",(e)=>{    
    if(menuexpand)
    {
        menu.classList.add("hidden")
        menu.classList.remove("block")
        e.target.classList.remove("fa-xmark")
        e.target.classList.add("fa-bars")
        menuexpand = false
    }
    else{
        menu.classList.remove("hidden")
        menu.classList.add("block")
        e.target.classList.add("fa-xmark")
        e.target.classList.remove("fa-bars")
        menuexpand = true
    }
})


function loadContent(page) {
    const contentDiv = document.getElementById('content'); 
    if (page == 'about') {
        fetch('./pages/about.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data
            });
    }
    else{
        fetch('./pages/main.html')
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data
            });
    }
}

function resetMenu(){
    menu.classList.add("hidden")
    menu.classList.remove("block")
    menu_btn.classList.remove("fa-xmark")
    menu_btn.classList.add("fa-bars")
    menuexpand = false
}

const navs = document.querySelectorAll('.navigation')

navs.forEach(nav=>{
    nav.addEventListener("click",(e)=>{
        e.preventDefault()
        const hash = e.target.textContent
        switch (hash) {
            case "Home":
                window.location.href = "#"
                resetMenu()
                break;
            case "About Us":
                window.location.href = "#about"
                resetMenu()
                break;
            default:
                break;
        }
    })
})

function router() {
    const hash = window.location.hash.substring(1) || '/';
    loadContent(hash === '/' ? '' : hash);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

