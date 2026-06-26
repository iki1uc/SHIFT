// IKI → 1 → UC Motor
// Klarer Ablauf, klare Zeiten, klare Zustände

const motor = [
  { name: "IKI", time: 1000 },
  { name: "1",   time: 1000 },
  { name: "UC",  time: 1000 }
];

let pos = 0;

function runMotor() {
  const step = motor[pos];

  console.log("Aktiv:", step.name);

  setTimeout(() => {
    pos = (pos + 1) % motor.length;
    runMotor();
  }, step.time);
}

runMotor();

