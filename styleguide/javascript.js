//FOR BURGER MENU
function burgerClick(x) {
  x.classList.toggle("change");
    openNav();
}

function openNav() {
  document.getElementById("burgerPopout").classList.toggle("active");
}
