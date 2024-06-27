const f = () => {
  const N_CHARS = 26;
  let sum = 0;
  for (var i = 0; i < N_CHARS; i++) {
    const firstChoice = i + 1;
    const otherChoicesUp = N_CHARS - firstChoice;
    for (var j = 0; j < otherChoicesUp; j++) {
      const secondChoice = firstChoice + j + 1;
      if (secondChoice < 1 || secondChoice > 26) {
        throw new Error("Not allowed!");
      }
      const otherChoicesDown = secondChoice - 1;
      if (otherChoicesDown < 1) {
        throw new Error("Not allowed!");
      }
      sum += otherChoicesDown;
    }
  }
  console.log(sum, sum * 2);
}

f();