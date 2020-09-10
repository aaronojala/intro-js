var HOURHAND = document.getElementById('hour');
var MINUTEHAND = document.getElementById('minute');
var SECONDHAND = document.getElementById('second');

function moveThoseArms() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  console.log('Hi! The time now is :' + hour + ':' + minute + ':' + second);

  const alpha = 360 / 60;

  var secondArmPosition = alpha * second;
  var minuteArmPosition = alpha * minute + (second / 60) * alpha;
  var hourArmPosition = alpha * 5 * hour + (minute / 60) * alpha * 5;

  document.getElementById('currentTime').innerText = now;
  SECONDHAND.style.transform = 'rotate(' + secondArmPosition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minuteArmPosition + 'deg)';
  HOURHAND.style.transform = 'rotate(' + hourArmPosition + 'deg)';
}

setInterval(moveThoseArms, 1000);
