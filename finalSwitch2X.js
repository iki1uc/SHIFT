function finalSwitch2X(box){
  if(!box) return;

  // Start: ROT (aktueller Zustand)
  box.style.color = "#f00";
  box.style.textShadow = "0 0 12px #f00";

  setTimeout(() => {
    // Übergang: ROT → DUNKEL
    box.style.opacity = "0.4";
    box.style.textShadow = "0 0 6px #600";

    setTimeout(() => {
      // Einschlag 1: SCHWARZ
      box.style.opacity = "1.0";
      box.style.color = "#000";
      box.style.textShadow = "0 0 12px #000";

      setTimeout(() => {
        // Einschlag 2: SCHWARZ 2X
        box.style.textShadow = "0 0 22px #000, 0 0 42px #000";

        setTimeout(() => {
          // Stabilisieren
          box.style.textShadow = "0 0 6px #000";
        }, 260);

      }, 180);

    }, 140);

  }, 120);
}
