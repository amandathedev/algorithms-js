function repeatedSubstringPattern(str) {
  let left = 0;
  let right = 1;
  let substring = str[left];
  let secondString = "";

  while (right < str.length / 2) {
    substring += str[right];
    right++;
    //     console.log(substring)
  }

  left = right;
  right = str.length;
  console.log(left);
  console.log(right);

  secondString = str.slice(left, right);

  if (substring === secondString) {
    return true;
  } else {
    //     split again?
    return false;
  }
}

// repeatedSubstringPattern('ababab')
// not working
