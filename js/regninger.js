console.log("regninger loaded");

alert("hey");
document.querySelector('input[type="button"]').addEventListener('click', function() {
  //could use el - what is just an identifier and it refers to an element,
  // a DOM element, which is a convention in that library.
  var listen = document.createElement('li');
  var newLists = document.createElement('li');
  listen.newLists = newLists;
  listen.innerHTML = newLists;
 document.querySelector('.regningList').appendChild(listen);
});

document.querySelector('section').addEventListener('click', function(event) {
 if (event.target.tagName.toLowerCase() === 'li') {
   alert(event.target.id);
 }
});
