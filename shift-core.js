function shiftSinn(data) {
  return {
    essenz: data.out,
    richtung: data.schiene.next,
    zeit: data.eich.uhrzeit,
    datum: data.eich.datum,
    kern: `${data.cube} / ${data.role}`
  };
}

function shiftCore(input) {
  const schiene = shiftGetSchiene();
  const eich = EICH();

  const frame = {
    cube: CUBE_ID,
    role: ROLE,
    in: input,
    state: STATE,
    schiene,
    eich,
    out: `SHIFT(${input})`
  };

  frame.sinn = shiftSinn(frame);

  return frame;
}
