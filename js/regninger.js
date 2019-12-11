
// popup START //
try {

  let regningContent = document.getElementById("scanPicture");

  regningContent.addEventListener("click", showRegn);

  document.getElementById("closeRegninger").addEventListener("click", showRegn);


} catch (e) {
  console.log(e);
} finally {
  console.log("showing regninger works");
}

function showRegn() {
let regning = document.getElementsByClassName('popupRegninger');

regning[0].classList.toggle("popupActive");
}

// popup END //

// Liste funktion START //

document.querySelector('input[type="button"]').addEventListener('click', newBill);
document.getElementById("closeRegninger").addEventListener('click', newBill);
function newBill() {
  let vaarksted = document.getElementById('vaerkstedsNavn').value;
  let pris = document.getElementById('vaerkstedPris').value;
  console.log(vaarksted);
console.log(pris);
  //could use el - what is just an identifier and it refers to an element,
  // a DOM element, which is a convention in that library.
  let newListItem = document.createElement('li');
  newListItem.innerHTML = vaarksted + '<b style="color: #002f67;">.......................................</b>' + pris + ' kr.';

 document.querySelector('.regningList').appendChild(newListItem);
}

// document.querySelector('section').addEventListener('click', function(event) {
//  if (event.target.tagName.toLowerCase() === 'li') {
//    alert(event.target.id);
//  }
// });

// Liste funktion SLUT //
