// SHIFT: Motor Core (erweitert)

const motor = [
  { name: "IKI", time: () => 800 + Math.random() * 400 },
  { name: "1",   time: () => 900 + Math.random() * 300 },
  { name: "UC",  time: () => 1000 + Math.random() * 500 }
];

let pos = 0;

function runMotor() {
  const step = motor[pos];
  const duration = typeof step.time === "function" ? step.time() : step.time;

  broadcast(step.name); // SHINE/SEEÜ Hook

  setTimeout(() => {
    pos = (pos + 1) % motor.length;
    runMotor();
  }, duration);
}

runMotor();
