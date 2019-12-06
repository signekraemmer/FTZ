console.log("carinfo.js loaded successfully!");

// Click on car element
document.getElementById("carLeft").addEventListener("click", cursorPosition);

// Get cursor position
function cursorPosition() {
  let posX = event.clientX;
  let posY = event.clientY;
  console.log("X = " + posX + " --- " + "Y = " + posY);
  createNote(posX, posY);
}

function createNote(posX, posY) {
  console.log(posX + " + " + posY);
  // Get's the height of the navbar
  let h1 = document.getElementsByClassName("logo");
  let circle = document.getElementsByClassName("noteCircle");
  console.log(circle);
  circle[0].style.left = posX + "px";
  // Subtracts the navbar height, to account for the offset
  circle[0].style.top = posY - h1[0].offsetHeight + "px";
}

// Create Dot at cursor position
// Create note embedded inside Dot
// Make the note able to have user input and save it
