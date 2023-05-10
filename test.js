let timer;
let clockText = document.getElementById('countdown');
timer = setInterval(() => {
  let now = new Date();
  let hour = 23 - now.getHours();
  let minutes = 59 - now.getMinutes();
  let seconds = 59 - now.getSeconds();
  let millisends = 1000 - now.getMilliseconds();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
   clockText.textContent = `\xa0\xa0 ${hour}:${minutes}:${seconds}:${millisends}`;
}, 10)
function pause(){
  clearInterval(timer);
}
