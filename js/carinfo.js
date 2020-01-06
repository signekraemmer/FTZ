console.log("carinfo.js loaded successfully!");

// This variable holds all the created notes
let notes = document.getElementsByClassName("noteCircle");
let notesInfo = document.getElementsByClassName("noteInfo");

// Click on car element
document.getElementById("carLeft").addEventListener("click", cursorPosition);

// Get cursor position
function cursorPosition() {
  let posX = event.clientX;
  let posY = event.clientY;
  console.log("X = " + posX + " --- " + "Y = " + posY);
  createNote(posX, posY);
}

  // Create Circle at cursor position
  // Create note embedded inside Circle
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

  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("mouseover", openNote);
  }

  for (let i = 0; i < notes.length; i++) {
    notesInfo[i].addEventListener("mouseout", closeNote);
    notesInfo[i].addEventListener("click", editNote);
  }
}


// TODO: Make a pop-up confirming they want to make a new bubble, and they just didnt miss the one they tried to click.
// Click on a note
// TODO: ADD A QUERY https://flaviocopes.com/add-click-event-to-dom-list/
// console.log(notes);

// for (let i = 0; i < notes.length; i++) {
//   notes[i].addEventListener("click", openNote);
// }

function closeNote() {
  console.log("CloseNote");
  this.classList.toggle("active");
}

// Open the note
function openNote() {
  console.log("OpenNote");
  // Crazy hyped over "this". The "this" is the element you clicked on, and it's able to identify it like so.
  // WARNING: It doesn't work because it takes the child of the note not the circle. Distiguish using if else and on the class .contains()
if (this.firstElementChild == null) {
  // this.classList.toggle("active");
  console.log("No Note");
}

else {

  this.firstElementChild.classList.add("active");
}
}

function editNote() {
  console.log("Editing note");
}

  // TODO: Remove the "active" class from non-focused notes? This could cover the if-else requirement.
  // TODO: Make the note able to have user input and save it
