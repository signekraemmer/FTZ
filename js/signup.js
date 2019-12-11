//
document.getElementById("signupBtn").addEventListener("click", checkInputs);

// This variable gets the inputfields
let inp = document.getElementsByClassName("formInput");

//Checks the rest of the inputfields
function checkInputs() {
  // Minus by 1 to avoid counting the checkbox
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

    else if (inp[2].value != inp[3].value) {

      alert("Password matcher ikke")
    }

    else {
      document.getElementById("signupBtn").innerHTML = '<img src="../images/ikoner/flueben.png" alt="flueben ikon">Succes!';
  setTimeout(function(){ window.location.href = "frontpage.html";}, 1500);

    }
}

for (let i = 0; i < inp.length; i++) {

}
