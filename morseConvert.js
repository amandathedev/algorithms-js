const morseConvert = text => {
  let morseAlphabet = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];

  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let alphaObj = Object.assign(
    ...alphabet.map((k, i) => ({ [k]: morseAlphabet[i] }))
  );

  let letters = [...text.toLowerCase()];
  let answer = "";

  for (let char of letters) {
    if (!alphaObj[char]) {
      answer += "";
    } else {
      answer += alphaObj[char] + " ";
    }
  }

  return answer;
};

morseConvert("hello world");
