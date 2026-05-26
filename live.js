// CUBE‑LIVE · SOLL-Version + System-Integration
// ID: CUBE‑LIVE / ROLE: Echtzeit-Motor

const CUBE_ID = "CUBE-LIVE";
const ROLE = "Echtzeit-Motor";

let STATE = localStorage.getItem("STATE") || "idle";

// --- System-Integration ---

function liveGetSchiene() {
  return {
    prev: localStorage.getItem("PREV") || "unknown",
    now: "LIVE",
    next: localStorage.getItem("NEXT") || "unknown"
  };
}

function liveGetGrav() {
  return localStorage.getItem("GRAV") || "0";
}

function liveGetCluster() {
  return localStorage.getItem("MODE") || "AB";
}

function liveChain(next) {
  localStorage.setItem("PREV", "LIVE");
  localStorage.setItem("NEXT", next);
}

// --- Kernkompetenz ---

function liveSetState(newState) {
  STATE = newState;
  localStorage.setItem("STATE", newState);
}

function liveCore(input) {
  return {
    in: input,
    out: `LIVE(${input})`,
    mode: liveGetCluster(),
    grav: liveGetGrav(),
    state: STATE,
    schiene: liveGetSchiene()
  };
}

function live_out(data) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑LIVE – Echtzeit (SOLL)</div>
    <div class="out-ist"><b>IN:</b> ${data.in}</div>
    <div class="out-soll"><b>OUT:</b> ${data.out}</div>
    <div class="out-mode"><b>MODE:</b> ${data.mode}</div>
    <div class="out-grav"><b>GRAV:</b> ${data.grav}</div>
    <div class="out-state"><b>STATE:</b> ${data.state}</div>
    <div class="out-schiene"><b>SCH:</b> ${data.schiene.prev} → LIVE → ${data.schiene.next}</div>
  `;
}
