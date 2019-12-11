//
document.getElementById("signupBtn").addEventListener("click", checkInputs);

// This variable gets the inputfields
let inp = document.getElementsByClassName("formInput");

// Gets the checkbox object into a variable
let box = document.getElementById("checkbox");
box.addEventListener("click", checkedOrNot);

// Checks if the checkbox is checked or not, and assigns the proper value as so
function checkedOrNot() {
  if (box.value == "notChecked") {
    box.value = "checked";
  }
  else {
    box.value = "notChecked";
  }
}


//Checks the rest of the inputfields
function checkInputs() {
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
    else if (inp[4].value == "") {

      alert("Venligst læs " + inp[3].placeholder);
    }

    else if (inp[2].value != inp[3].value) {

      alert("Password matcher ikke")
    }

    else {
      document.getElementById("signupBtn").innerHTML = '<img src="../images/ikoner/flueben.png" alt="flueben ikon">Succes!';
  setTimeout(function(){ window.location.href = "frontpage.html";}, 1500);

    }
}

//for (let i = 0; i < inp.length; i++) {

//}
