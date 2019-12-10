//
document.getElementById("signupBtn").addEventListener("click", checkInputs);

// This variable gets the inputfields
let inp = document.getElementsByClassName("formInput");

//Checks the rest of the inputfields
function checkInputs() {
  // Minus by 1 to avoid counting the checkbox
//  for (let i = 0; i < inp.length; i++) {
    if (inp[0].value == "") {

      alert("Indtast venligst " + inp[0].placeholder);
    }

    else if (inp[1].value == "") {

      alert("Indtast venligst " + inp[1].placeholder);
    }

    else if (inp[2].value == "") {

      alert("Indtast venligst " + inp[2].placeholder);
    }

    else if (inp[3].value == "") {

      alert("Indtast venligst " + inp[3].placeholder);
    }

    else {
      window.location.href = "frontpage.html";
    }
  //}
}
