// BURGER MENU UTILITIES
let mobileNav = document.getElementById("menu-toggle");

mobileNav.onclick = () => {
    mobileNav.classList.toggle("is-active")
}

//---------MOBILE NAV LIST---------//

//NOS OFFRES
let accordionBtnOne = document.getElementById("accordionBtn-one");
let innerOne = document.getElementById("inner-one");
let caretOne = document.getElementById("caret-one")

accordionBtnOne.onclick = () => {
    innerOne.classList.toggle("is-open")
    caretOne.classList.toggle("active")
}
//NOS OFFRES END

//---------MOBILE NAV LIST---------//