// звичайний таймер 
window.onload = () => {
  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;
  let intervalId;

intervalId = setInterval(startTimer, 10);
function startTimer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
}
if (second == 60) {
    second = 0;
    minute++;
}
document.getElementById('hour').innerHTML = returnData(hour);
document.getElementById('minute').innerText = returnData(minute);
document.getElementById('second').innerText = returnData(second);
document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
return input > 10 ? input : `0${input}`
}
  document.getElementById('btn').addEventListener('click', () => {
    stop();
  });

  // function reset() {totalSeconds = 0;
  //   document.getElementById("hour").innerHTML = '0';
  //   document.getElementById("minute").innerHTML = '0';
  //   document.getElementById("seconds").innerHTML = '0';
  // }
     // якщо треба зупинти таймер там куди дійшов таймер(треба на 20 строчці змінити reset на stop)
  function stop() {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("countdown").innerHTML;
}
}