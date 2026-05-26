
// CUBE‑LIVE · Echtzeit-Motor
// ID: CUBE‑LIVE / FILE: live.js / ROLE: Realtime-Ausführung

const CUBE_ID = "CUBE-LIVE";
const ROLE = "Echtzeit-Motor";

// Kontext lesen
const MODE = localStorage.getItem("MODE") || "AB";
const GRAV = localStorage.getItem("GRAV") || "0";
const STATE = localStorage.getItem("STATE") || "idle";

// Kernfunktion
function liveCore(input) {
  return {
    in: input,
    mode: MODE,
    grav: GRAV,
    state: STATE,
    out: `LIVE(${input})`
  };
}

// Realtime-Ausgabe
function live_out(data) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑LIVE – Echtzeit</div>
    <div class="out-ist"><b>IN:</b> ${data.in}</div>
    <div class="out-soll"><b>OUT:</b> ${data.out}</div>
    <div class="out-mode"><b>MODE:</b> ${data.mode}</div>
    <div class="out-grav"><b>GRAV:</b> ${data.grav}</div>
    <div class="out-state"><b>STATE:</b> ${data.state}</div>
  `;
}
