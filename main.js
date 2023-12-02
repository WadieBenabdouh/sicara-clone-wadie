// BURGER MENU UTILITIES
let mobileNavBtn = document.getElementById("menu-toggle");
let mobileNavPage = document.getElementById("mobile-nav-page")

mobileNavBtn.onclick = () => {
    mobileNavBtn.classList.toggle("is-active")
    mobileNavPage.classList.toggle("is-active")
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

//Blogs
let accordionBtnFour = document.getElementById("accordionBtn-four");
let innerFour = document.getElementById("inner-four");
let caretFour = document.getElementById("caret-four")

accordionBtnFour.onclick = () => {
    innerFour.classList.toggle("is-open")
    caretFour.classList.toggle("active");
}
//Blogs END

//Search field
let searchIcon = document.getElementById("searchIcon");
let searchInput = document.getElementById("mobile-nav-search");

searchIcon.onclick = () => {
    searchInput.classList.toggle("visible")
}
//Search field END

//---------MOBILE NAV LIST END---------//