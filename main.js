// BURGER MENU UTILITIES
let mobileNav = document.getElementById("menu-toggle");

mobileNav.onclick = () => {
    mobileNav.classList.toggle("is-active")
}

//MOBILE NAV LIST 
let accordionBtnOne = document.getElementById("accordionBtn-one");
let innerOne = document.getElementById("inner-one");

accordionBtnOne.onclick = () => {
    innerOne.classList.toggle("is-open")
}