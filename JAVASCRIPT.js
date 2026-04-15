let count = 0;
let interval = null;

const countDisplay = document.getElementById("count");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Start counting
startBtn.addEventListener("click", function () {
  if (interval === null) {
    interval = setInterval(() => {
      count++;
      countDisplay.textContent = count;
    }, 1000);
  }
});

// Stop counting
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});