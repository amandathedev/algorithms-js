function recursivePalindrome(word) {
  if (word.length === 1 || 0) {
    return true;
  } else {
    if (word[0] === word[word.length - 1]) {
      let newWord = word.slice(1, -1);
      return recursivePalindrome(newWord);
    } else {
      return false;
    }
  }
}

// recursivePalindrome('race')
