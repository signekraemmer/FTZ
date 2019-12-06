console.log("main.js loaded ");

document.getElementsByClassName("burger")[0].addEventListener("click", burgerListSlide);

function burgerListSlide() {
  console.log("success");
  document.getElementsByClassName("burgerList")[0].classList.toggle("burgerActive");
}
