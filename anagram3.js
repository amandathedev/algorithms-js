const anagramCheck = (word1, word2) => {
  let counter = {};

  if (word1.length !== word2.length) {
    return false;
  } else {
    for (let char of word1) {
      counter[char] ? (counter[char] += 1) : (counter[char] = 1);
    }

    for (let char of word2) {
      counter[char] ? (counter[char] -= 1) : false;
    }

    for (let key in counter) {
      if (counter[key] !== 0) {
        return false;
      }
    }
  }
  return true;
};
