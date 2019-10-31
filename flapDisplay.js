var flapDisplay = function(lines, rotors) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789".split(
    ""
  );
  let x = lines.toString().split("");
  let indeces = [];

  x.map(letter => {
    for (let i = 0; i < characters.length; i++) {
      if (letter === characters[i]) {
        indeces.push(i);
      }
    }
  });

  let realRotors = rotors[0];
  let count = 0;
  for (let i = 0; i < indeces.length; i++) {
    count += realRotors[i];
    indeces[i] += count;
  }

  let result = [];

  indeces.map(x => {
    if (x < characters.length) {
      result.push(characters[x]);
    } else {
      let y = x % characters.length;
      result.push(characters[y]);
    }
  });

  return [result.join("")];
};

// flapDisplay(["CAT"], [[1, 13, 27]])
