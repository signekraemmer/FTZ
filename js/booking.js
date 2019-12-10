//Henriette - taget inspiration fra YouTube
let dt = new Date();

function RenderDate() {
  dt.setDate(1); //Starts counting days at 1 (1)
  let day = dt.getDay();
  let today = new Date();
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1,  0).getDate(); //Findes last date of month

  let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

  let months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
  ];

  document.getElementById("month").innerHTML = months[dt.getMonth()];

  let numb = "";

  for (x = day; x > 0; x--){
    numb += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>"; //Class prev-date makes previous date a color
  }

  for (i = 1; i <= endDate; i++) { // Todays date
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      numb += "<div class='today'>" + i + "</div>"; //Class today makes todays date a color
    }
    else {
      numb += "<div>" + i + "</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = numb;
}

function moveDate(swit) {
  if (swit == 'prev') { //Previous month
    dt.setMonth(dt.getMonth() - 1);
  }
  else if(swit == 'next') { //Next month
    dt.setMonth(dt.getMonth() + 1);
  }
  RenderDate();
}
RenderDate();
