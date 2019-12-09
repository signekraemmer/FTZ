console.log("main.js loaded ");

document.getElementsByClassName("burger")[0].addEventListener("click", burgerListSlide);

function burgerListSlide() {
  document.getElementsByClassName("magicBox")[0].classList.toggle("burgerActive");

let seaBox = document.getElementsByClassName('searchBox')[0];
seaBox.addEventListener('click', openSearch);

function openSearch() {
  console.log("Open search");
  seaBox.style.width = "300px";
}
function openSearch() {

}
