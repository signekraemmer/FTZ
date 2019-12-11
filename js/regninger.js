
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
  let vaerksted = document.getElementById('vaerkstedsNavn').value;
  let pris = document.getElementById('vaerkstedPris').value + ' kr.';
  console.log(vaerksted);
  console.log(pris);

  let newListItem = document.createElement('li');
  newListItem.innerHTML = vaerksted + pris;

 document.querySelector('.regningList').appendChild(newListItem);
}

// document.querySelector('section').addEventListener('click', function(event) {
//  if (event.target.tagName.toLowerCase() === 'li') {
//    alert(event.target.id);
//  }
// });

// Liste funktion SLUT //
