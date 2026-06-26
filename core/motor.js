// SHIFT: Motor Core

const motor = [
  { name: "IKI", time: () => 800 + Math.random() * 400 },
  { name: "1",   time: () => 900 + Math.random() * 300 },
  { name: "UC",  time: () => 1000 + Math.random() * 500 }
];

let pos = 0;
let listeners = [];
let running = false;

export function onMotorStep(fn) {
  listeners.push(fn);
}

function broadcast(stepName) {
  listeners.forEach(fn => fn(stepName));
}

export function runMotor() {
  if (!running) return;
  
  const step = motor[pos];
  const duration = typeof step.time === "function" ? step.time() : step.time;

  broadcast(step.name);

  setTimeout(() => {
    pos = (pos + 1) % motor.length;
    runMotor();
  }, duration);
}

export function startMotor() {
  running = true;
  runMotor();
}

export function stopMotor() {
  running = false;
}
