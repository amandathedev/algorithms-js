const isThisAPalindromeOrWhat = word => {
  let start = 0;
  let end = word.length - 1;

  while (start <= end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

// isThisAPalindromeOrWhat("cat");
