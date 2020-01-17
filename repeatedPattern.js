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

function repeatedPattern(str) {
  let substring = "";
  let i = 0;
  let l = 0;

  while (i < str.length / 2) {
    substring += str[i];
    l++;
    let j = i + 1;
    while (j < str.length) {
      let temp = str.slice(j, j + l);
      if (temp !== substring) {
        break;
      }
      j += l;
    }
    i++;
    if (j === str.length) return true;
  }
  return false;
}

// repeatedPattern('a')

function repeat(s) {
  return s
    .repeat(2)
    .slice(1, -1)
    .includes(s);
}

// repeat('abcabc')
