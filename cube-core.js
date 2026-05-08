
// Zentrale Kontaktfunktion – für ALLE Cubes, auf ALLEN Seiten
function cubeKontakt(cubeID, projekt) {
  const bereit =
    cubeID + " → Bereitschaft 100% → Ressourcen stabil → Leitung frei → Projekt: " +
    projekt + " → Bereit zur Arbeitseinleitung.";

  const anker = document.getElementById("cube-anker");
  const status = document.getElementById("cube-status");

  if (!anker || !status) {
    console.error("Anker oder Status nicht gefunden – HTML-Seite ohne Cube-Layout.");
    return;
  }

  anker.textContent = bereit;

  const start =
    cubeID + " → Arbeit eingeleitet → Prozess läuft…";

  status.textContent = start;

  cubeJob(cubeID);
}

// Zentrale Job-Funktion – jeder Cube eigener Job, aber überall gleich definiert
function cubeJob(cubeID) {
  switch (cubeID) {
    case "CUBE_0":
      console.log("Cube 0: System-Initialisierung läuft.");
      break;
    case "CUBE_1":
      console.log("Cube 1: RAW-Prozess gestartet.");
      break;
    case "CUBE_2":
      console.log("Cube 2: SAFE-Analyse aktiv.");
      break;
    case "CUBE_3":
      console.log("Cube 3: ADMIN-Verwaltung arbeitet.");
      break;
    case "CUBE_4":
      console.log("Cube 4: Harmonie-Abgleich läuft.");
      break;
    case "CUBE_5":
      console.log("Cube 5: Klärungsprozess aktiv.");
      break;
    default:
      console.warn("Unbekannter Cube:", cubeID);
  }
}
