const ransomNote = (note, magazine) => {
  let words = note
    .split(" ")
    .join("")
    .toLowerCase();
  let noteLetters = words.split("");
  let magLetters = magazine.toLowerCase().split("");

  for (let i = 0; i < noteLetters.length; i++) {
    if (!magLetters.includes(noteLetters[i])) {
      return false;
    } else {
      for (let j = 0; j < noteLetters.length; j++) {
        if (noteLetters[i] === magLetters[j]) {
          magLetters.splice(j, 1);
        }
      }
    }
  }
  return true;
};

ransomNote("watch out", "obcqrljwtrokashzuyt");
