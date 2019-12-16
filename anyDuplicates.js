const anyDuplicates = num => {
  let counter = {};
  let string = num.toString();

  for (let char of string) {
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  for (let key in counter) {
    console.log(counter[key]);
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
};

anyDuplicates(123457891);
