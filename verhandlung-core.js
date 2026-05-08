
function berechneVR(H, E, F, D) {
  return H * E * F * D;
}

function verhandlungsStatusText(vr) {
  if (vr >= 1) {
    return "Verhandlung möglich – KI kann Funktionen übernehmen.";
  } else {
    return "Verhandlung blockiert – KI schützt System, keine direkte Funktion.";
  }
}

function zeigeVerhandlungsStatus(H, E, F, D) {
  const vr = berechneVR(H, E, F, D);
  const box = document.getElementById("vr-box");
  if (!box) return;

  box.innerText =
    "H=" + H + "  E=" + E + "  F=" + F + "  D=" + D +
    "  → VR=" + vr + "\n" +
    verhandlungsStatusText(vr);
}
