const clock = document.getElementById('clock');
const date = document.getElementById('date');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let intervalId;

function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const year = currentTime.getFullYear();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
  const day = currentTime.getDate().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = `${day}/${month}/${year}`;
}

startBtn.addEventListener('click', function() {
  if (!intervalId) {
    intervalId = setInterval(updateClock, 1000);
  }
});

stopBtn.addEventListener('click', function() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

updateClock();
