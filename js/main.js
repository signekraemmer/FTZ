console.log("main.js loaded ");

document.getElementsByClassName("burger")[0].addEventListener("click", burgerListSlide);

function burgerListSlide() {
  document.getElementsByClassName("magicBox")[0].classList.toggle("burgerActive");
}

let seaBox = document.getElementsByClassName('searchBox')[0];
let searchIcon = document.getElementById("activateSearchBox");

searchIcon.addEventListener('click', openSearch);

function openSearch() {
  seaBox.classList.toggle("searchActive");
}
