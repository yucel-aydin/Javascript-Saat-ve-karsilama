let userName = window.prompt("Lütfen adınızı giriniz...");
if (userName) {
  document.getElementById("myName").innerText = userName;
}

var myClock = document.getElementById("myClock");

function showTime() {
  var days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  m = checkTime(m);
  s = checkTime(s);
  myClock.innerText = h + ":" + m + ":" + s + " " + days[d.getDay()-1];
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(showTime, 1000);
