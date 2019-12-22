function palindromeCheck(word) {
  if (word.length === 1 || 0) {
    return true;
  } else {
    if (word[0] === word[word.length - 1]) {
      let newWord = word.slice(1, -1);
      return palindromeCheck(newWord);
    } else {
      return false;
    }
  }
}
