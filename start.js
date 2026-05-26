
// SHIFT-System Instanz

if (!localStorage.getItem("PREV")) localStorage.setItem("PREV", "index");
if (!localStorage.getItem("NEXT")) localStorage.setItem("NEXT", "SHIFT");

const script = document.createElement("script");
script.src = "shift.js";
document.head.appendChild(script);

script.onload = () => {
  const result = shiftCore("start");
  shift_out(result);
};
