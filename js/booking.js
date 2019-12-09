let dt = new Date();

function RenderDate() {
  dt.setDate(1);
  let day = dt.getDay();
  let today = new Date();
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1,  0).getDate();

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
    numb += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
  }
  console.log(day);
  for (i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      numb += "<div class='today'>" + i + "</div>";
    }
    else {
      numb += "<div>" + i + "</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = numb;
}


function moveDate(swit) {
  if (swit == 'prev') {
    dt.setMonth(dt.getMonth() - 1);
    RenderDate();
  }
  else if(swit == 'next') {
    dt.setMonth(dt.getMonth() + 1);
  }
  RenderDate();
}
