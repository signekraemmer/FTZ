
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
  let pris = document.getElementById('vaerkstedPris').value;
  console.log(vaerksted);
  console.log(pris);

if (vaerksted == "" || pris == "") {
console.log("error");
alert("Hej din ged");
}

else {
  let newListItem = document.createElement('li');

  newListItem.innerHTML = vaerksted + '<span class="prisen">' + pris + " kr." + '</span>';

 document.querySelector('.regningList').appendChild(newListItem);


   setTimeout(function(){ alert("hejj"); }, 2000);
}


 }




// document.querySelector('section').addEventListener('click', function(event) {
//  if (event.target.tagName.toLowerCase() === 'li') {
//    alert(event.target.id);
//  }
// });

// Liste funktion SLUT //
