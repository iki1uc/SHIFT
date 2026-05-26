// CUBE‑LIVE · SOLL-Version
// ID: CUBE‑LIVE / FILE: live.js / ROLE: Echtzeit-Motor (Kernkompetenz)

// 1) Kontext lesen (LIVE entscheidet nichts, LIVE reagiert nur)
const CUBE_ID = "CUBE-LIVE";
const ROLE = "Echtzeit-Motor";

const MODE = localStorage.getItem("MODE") || "AB";
const GRAV = localStorage.getItem("GRAV") || "0";
let STATE = localStorage.getItem("STATE") || "idle";

// 2) Kernkompetenz: LIVE setzt den aktuellen Zustand
function liveSetState(newState) {
  STATE = newState;
  localStorage.setItem("STATE", newState);
}

// 3) Kernfunktion: Realtime-Reaktion
function liveCore(input) {
  return {
    in: input,
    out: `LIVE(${input})`,
    mode: MODE,
    grav: GRAV,
    state: STATE
  };
}

// 4) Ausgabe (neutral, wissenschaftlich, klar)
function live_out(data) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑LIVE – Echtzeit (SOLL)</div>
    <div class="out-ist"><b>IN:</b> ${data.in}</div>
    <div class="out-soll"><b>OUT:</b> ${data.out}</div>
    <div class="out-mode"><b>MODE:</b> ${data.mode}</div>
    <div class="out-grav"><b>GRAV:</b> ${data.grav}</div>
    <div class="out-state"><b>STATE:</b> ${data.state}</div>
  `;
}
