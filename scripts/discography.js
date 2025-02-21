/* HEADER */

const hamburger = document.querySelector(".hamburger"); /* hamburger menu expand and close */
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



/* DISCOGRAPHY PAGE */


const albums = document.querySelectorAll('.album');
var albumText = document.getElementsByClassName("album-text");

albums.forEach(album =>{ /* clicks expand albums and apply brightness/blur */
    album.addEventListener('click',()=>{
        if (album.classList.contains('active')) {
            removeActionClasses();
            resetBrightness();
            //document.body.style.overflow = 'scroll'
        } else {
            resetBrightness();
            removeActionClasses();
            album.classList.add('active');
            lowerBrightness();
            //document.body.style.overflow = 'hidden'
        }
    })
})

function removeActionClasses(){
    albums.forEach(album =>{
        album.classList.remove('active')
    })
}

function lowerBrightness(){
    albums.forEach(album =>{
        if (! album.classList.contains('active')) {
            album.style.filter = "brightness(45%)";
            /*album.style.filter = "brightness(15%) blur(3px)";*/
            /*album.style.filter = "blur(5px)";*/
        }
    })
}

function resetBrightness(){
    albums.forEach(album => {
        album.style.filter = "brightness(1)";
    })
}

window.addEventListener("load", removeActionClasses());
