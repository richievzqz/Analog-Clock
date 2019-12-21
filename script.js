const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let secondDeg = (hr / 60) * 360;
let minuteDeg = ((min / 60) + (sec / 3600)) * 360;
let hourDeg = (((hr - 12) / 12 ) + (min / 720)) * 360;

function getTime() {
  secondDeg = secondDeg+6;
  minuteDeg = minuteDeg+(6/60);
  hourDeg = hourDeg+(3/360);

  HOURHAND.style.transform = "rotate(" + hourDeg + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minuteDeg + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondDeg + "deg)";

};

var interval = setInterval(getTime, 1000);
