let running = false;
let interval = null;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const statusBox = document.getElementById("status");

startBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    statusBox.textContent = "Status: läuft...";
    interval = setInterval(() => {}, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  statusBox.textContent = "Status: gestoppt";
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  statusBox.textContent = "Status: bereit";
});
