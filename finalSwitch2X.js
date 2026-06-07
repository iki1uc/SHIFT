function finalSwitch1X(box){
  if(!box) return;

  // Start: ROT
  box.style.color = "#f00";

  // Übergang ROT → SCHWARZ
  setTimeout(() => {
    box.style.transition = "color 0.8s ease";
    box.style.color = "#000";
  }, 200);
}
