var HOURHAND = document.getElementById('hour');
var MINUTEHAND = document.getElementById('minute');
var SECONDHAND = document.getElementById('second');

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

console.log('Hi! The time now is :' + hour + ':' + minute + ':' + second);

// 11:11:15

// 15 * (360 degree in a minute / 60 second in a minute)
// (11 + 15/60) * (360 degree in an hour / 60 minutes in an hour)
// (11 + 11/60 + 15/360) *(360 degree for 12 hours /)
const alpha = 360 / 60;
/* SECONDHAND.style.transform = 'rotate(' + second * alpha + 'deg)'; */

var deltaSec = 360 / 6;
var deltaMin = deltaSec / 60;
var deltaHr = deltaMin / 60;

function moveThoseArms() {
  document.getElementById('currentTime').innerText = now;
  SECONDHAND.style.transform = 'rotate(' + second * alpha + 'deg)';
}

setInterval(moveThoseArms, 1000);
