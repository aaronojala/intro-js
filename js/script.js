var HOURHAND = document.getElementById("hour");
var MINUTEHAND = document.querySelector(".minute");
var SECONDHAND = document.getElementsByName("second");

function time() {
  var now = new Date();
  var hr = now.getHours();
  var minutes = now.getMinutes();
  var sec = now.getSeconds();
  var tick = 360 / 60;
}
