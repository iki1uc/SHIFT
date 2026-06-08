export async function runEffect(containerId, textFile) {
  const container = document.getElementById(containerId);

  // externe Datei laden
  const text = await fetch(textFile).then(r => r.text());
  const sentences = text.trim().split("\n");

  async function dropSentence(sentence, index) {
    const words = sentence.split(" ");
    const line = document.createElement("div");
    container.appendChild(line);

    for (let w of words) {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = w + " ";
      line.appendChild(span);

      await new Promise(r => setTimeout(r, 120));
      span.classList.add("landed");
    }

    // vorherige Zeile unsichtbar machen
    if (index > 0) {
      const prev = container.children[index - 1];
      prev.style.opacity = 0;
    }
  }

  // Ablauf: Satz für Satz
  for (let i = 0; i < sentences.length; i++) {
    await dropSentence(sentences[i], i);
  }

  // wenn alle gelandet sind → alle sichtbar + rot
  for (let line of container.children) {
    line.style.opacity = 1;
    for (let w of line.children) {
      w.classList.add("final");
    }
  }
}
