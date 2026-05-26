function shiftSinn(data) {
  return {
    essenz: data.out,
    richtung: data.schiene.next,
    zeit: data.eich.uhrzeit,
    datum: data.eich.datum,
    kern: `${data.cube} / ${data.role}`
  };
}

