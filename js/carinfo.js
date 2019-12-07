console.log("carinfo.js loaded successfully!");

// This variable holds all the created notes
let notes = document.getElementsByClassName("noteCircle");

// Click on car element
document.getElementById("carLeft").addEventListener("click", cursorPosition);

// Get cursor position
function cursorPosition() {
  let posX = event.clientX;
  let posY = event.clientY;
  console.log("X = " + posX + " --- " + "Y = " + posY);
  createNote(posX, posY);
}

// Create Dot at cursor position
// Create note embedded inside Dot
function createNote(posX, posY) {
  // Get's the height of the navbar
  let topbar = document.getElementsByClassName("logo");

  // Subtracts the navbar height, to account for the offset
  posY = posY - topbar[0].offsetHeight;
  // HTML note variable
  let newNote = '<div class="noteCircle" style="top:' + posY + 'px; left:' + posX + 'px;"><div class="noteInfo"></div></div>';

  // Inserts a new note inside the defined container
  let noteContainer = document.getElementsByClassName("noteContainer")[0];
  noteContainer.innerHTML += newNote;

  // TODO: This can probably be done when the note is spawned.
  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", openNote);
  }
}

// Click on a note
// TODO: ADD A QUERY https://flaviocopes.com/add-click-event-to-dom-list/
// console.log(notes);

// for (let i = 0; i < notes.length; i++) {
//   notes[i].addEventListener("click", openNote);
// }

// Open the note
function openNote() {
  console.log("OpenNote");
  notes[0].classList.toggle("active");
  // TODO: Need to do exactly this, but at the specific note which is clicked
}

// Make the note able to have user input and save it
