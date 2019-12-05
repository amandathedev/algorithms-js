// Frequency counter

const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
  }

  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];
    if (!counter[letter]) {
      return false;
    } else {
      counter[letter] -= 1;
    }
  }
  return true;
};

validAnagram("star", "rats");
