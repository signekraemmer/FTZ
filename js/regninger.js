
// popup START //
try {

  let regningContent = document.getElementById("scanPicture");

  regningContent.addEventListener("click", showRegnPopup);

  document.getElementById("closeRegninger").addEventListener("click", showRegnPopup);


} catch (e) {
  console.log(e);
} finally {
  console.log("showing regninger works");
}

function showRegnPopup() {
let regning = document.getElementsByClassName('popupRegninger');

regning[0].classList.toggle("popupActive");
}

// popup END //

// Liste funktion START - Listen er inspireret af jsfiddle.net, men er ændret rigtig meget //

document.getElementById("closeRegninger").addEventListener('click', newBill);
function newBill() {
  let vaerksted = document.getElementById('vaerkstedsNavn').value;
  let pris = document.getElementById('vaerkstedPris').value;
  console.log(vaerksted);
  console.log(pris);

if (vaerksted == "" || pris == "") {
console.log("error");
alert("Husk at udfylde både værksted og pris");
}

else {
  let newListItem = document.createElement('li');

  newListItem.innerHTML = vaerksted + '<span class="prisen">' + pris + " kr." + '</span>';

 document.querySelector('.regningList').appendChild(newListItem);

 setTimeout(function(){ alert("Du har succesfuldt uploadet en regning"); }, 300);
}
 }

// Liste funktion SLUT //
