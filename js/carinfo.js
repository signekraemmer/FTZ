console.log("carinfo.js loaded successfully!");

// Click on car element
// document.getElementById("carLeft").addEventListener("click", createNote);

// Get cursor position
function cursorPosition(event) {
  console.log("Getting coords");
  let posX = event.clickX;
  let posY = event.clickY;
  console.log("pos X = " + posX + " /// " + "pos Y = " + posY);
}

function createNote(event) {
  console.log("Ur click works");
  cursorPosition(event);
}
// Create Dot at cursor position
// Create note embedded inside Dot
// Make the note able to have user input and save it
