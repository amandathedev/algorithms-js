const newPalindrome = word => {
  let reverse = [...word].reverse().join("");
  if (word === reverse) {
    return true;
  } else {
    return false;
  }
};

newPalindrome("racecar");
