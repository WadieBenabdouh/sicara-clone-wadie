// BURGER MENU UTILITIES
let mobileNavBtn = document.getElementById("menu-toggle");
let mobileNavPage = document.getElementById("mobile-nav-page");

mobileNavBtn.onclick = () => {
    mobileNavBtn.classList.toggle("is-active");
    mobileNavPage.classList.toggle("is-active");
    mainArticle.classList.toggle("hidden");
    sicaraGpt.classList.toggle("hidden");
    deployPage.classList.toggle("hidden");
}

//---------MOBILE NAV LIST---------//

//NOS OFFRES
let accordionBtnOne = document.getElementById("accordionBtn-one");
let innerOne = document.getElementById("inner-one");
let caretOne = document.getElementById("caret-one");

accordionBtnOne.onclick = () => {
    accordionBtnOne.classList.toggle("clicked");
    innerOne.classList.toggle("is-open");
    caretOne.classList.toggle("active");
}
//NOS OFFRES END

//Nos centres d'expertises
let accordionBtnTwo = document.getElementById("accordionBtn-two");
let innerTwo = document.getElementById("inner-two");
let caretTwo = document.getElementById("caret-two");

accordionBtnTwo.onclick = () => {
    accordionBtnTwo.classList.toggle("clicked");
    innerTwo.classList.toggle("is-open");
    caretTwo.classList.toggle("active");
}
//Nos centres d'expertises END

// Nos Partenaires
let accordionBtnThree = document.getElementById("accordionBtn-three");
let innerThree = document.getElementById("inner-three");
let caretThree = document.getElementById("caret-three")

accordionBtnThree.onclick = () => {
    accordionBtnThree.classList.toggle("clicked");
    innerThree.classList.toggle("is-open")
    caretThree.classList.toggle("active");
}

// Nos Partenaires END

//Blogs
let accordionBtnFour = document.getElementById("accordionBtn-four");
let innerFour = document.getElementById("inner-four");
let caretFour = document.getElementById("caret-four");

accordionBtnFour.onclick = () => {
    accordionBtnFour.classList.toggle("clicked");
    innerFour.classList.toggle("is-open");
    caretFour.classList.toggle("active");
}
//Blogs END

//Search field
let searchIcon = document.getElementById("searchIcon");
let searchInput = document.getElementById("mobile-nav-search");
let closeSearch = document.getElementById("close-search");

searchIcon.onclick = () => {
    searchInput.classList.toggle("visible");
    searchIcon.classList.toggle("requested");
    closeSearch.classList.toggle("active")
}

closeSearch.onclick = () => {
    searchInput.classList.remove("visible")
    searchIcon.classList.remove("requested")
    closeSearch.classList.remove("active")
}

//Search field END
//---------MOBILE NAV LIST END---------//

//----------mainArticle-----------//
let mainArticle = document.getElementById("mainArticle");
//----------mainArticle END-----------//


//--------SICARA GPT----------//
let sicaraGpt = document.getElementById("sicaraGpt");
//--------SICARA GPT END----------//

//---------DEPLOY-------------//
let deployPage = document.getElementById("deployPage");
//---------DEPLOY END-------------//