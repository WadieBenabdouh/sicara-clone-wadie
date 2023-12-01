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

//Nos centres d'expertises
let accordionBtnTwo = document.getElementById("accordionBtn-two");
let innerTwo = document.getElementById("inner-two")
let caretTwo = document.getElementById("caret-two")

accordionBtnTwo.onclick = () => {
    innerTwo.classList.toggle("is-open");
    caretTwo.classList.toggle("active");
}
//Nos centres d'expertises END

// Nos Partenaires
let accordionBtnThree = document.getElementById("accordionBtn-three");
let innerThree = document.getElementById("inner-three");
let caretThree = document.getElementById("caret-three")

accordionBtnThree.onclick = () => {
    innerThree.classList.toggle("is-open")
    caretThree.classList.toggle("active");
}

// Nos Partenaires END

//---------MOBILE NAV LIST---------//