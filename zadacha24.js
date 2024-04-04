// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
  const latinAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let result = [];
  let lettersOnly = text.replace(/[^\w]/g, "").toUpperCase();
  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k < latinAlphabet.length; k++) {
      if (lettersOnly[i] === latinAlphabet[k]) {
        result.push(k + 1);
      }
    }
  }

  return result.join(" ");
}

alphabetPosition("aaaa bbb cc");
