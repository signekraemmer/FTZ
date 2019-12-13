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


// Nav bar and burger menu linking
document.getElementsByClassName("logo")[0].firstElementChild.addEventListener("click", redirectFrontpage);

function redirectFrontpage() {
  window.location.assign("frontpage.html")
}

let menuPoints = document.getElementsByClassName("magicBox")[0].getElementsByTagName("p");

for (let i = 0; i < menuPoints.length; i++) {
  menuPoints[i].addEventListener("click", redirectBurger);
}

function redirectBurger() {

  switch (this.innerHTML.toLowerCase()) {

    case "mine biler":
      window.location.assign("carinfo.html");
      break;

    case "find bil":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "værksteder":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "bookninger":
      window.location.assign("booking.html");
      break;

    case "forsikringer":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "regninger":
      window.location.assign("regninger.html");
      break;

    case "vejhjælp":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "indstillinger":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "support":
      alert(this.innerHTML + " doesn't exist yet");
      break;

    case "log ud":
      window.location.assign("frontpage.html");
      break;

    default:
    console.log("Your menu point apperantly doesn't exist, sorry.");
  }
}
