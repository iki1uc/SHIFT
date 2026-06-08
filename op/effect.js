export async function runEffect(containerId, textFile) {
  const container = document.getElementById(containerId);

  const text = await fetch(textFile).then(r => r.text());
  const sentences = text.trim().split("\n");

  async function dropSentence(sentence, index) {
    const words = sentence.split(" ");
    const line = document.createElement("div");
    container.appendChild(line);

    // ZEITKORRIDOR (in ms)
    const corridor = 800;

    // jedes Wort bekommt eine eigene Zeit im Korridor
    const timings = words.map(() => Math.random() * corridor);

    // Wörter erzeugen (unsichtbar)
    const spans = words.map(w => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = w + " ";
      line.appendChild(span);
      return span;
    });

    // Wörter erscheinen im Korridor
    for (let i = 0; i < spans.length; i++) {
      await new Promise(r => setTimeout(r, timings[i]));
      spans[i].style.opacity = 1;
    }

    // ERGEBNIS‑VERZÖGERUNG
    await new Promise(r => setTimeout(r, corridor));

    // jetzt erst: landed (rot → schwarz)
    for (let span of spans) {
      span.classList.add("landed");
    }

    // vorherige Zeile unsichtbar
    if (index > 0) {
      container.children[index - 1].style.opacity = 0;
    }
  }

  // Sätze nacheinander
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
