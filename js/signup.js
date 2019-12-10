//
document.getElementById("signupBtn").addEventListener("click", checkInputs);

// This variable gets the inputfields
let inp = document.getElementsByTagName("input");

//Checks the rest of the inputfields
function checkInputs() {
  for (let i = 0; i < inp.length; i++) {
    if (inp[i].value == "") {

      alert("Indtast venligst " + inp[i].placeholder);

    } else {
      window.location.href = "frontpage.html";
    }
  }
}
