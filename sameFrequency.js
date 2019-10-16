const sameFrequency = (num1, num2) => {
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");

  let counter = {};

  for (let k of arr1) {
    counter[k] ? (counter[k] += 1) : (counter[k] = 1);
  }

  for (let k of arr2) {
    counter[k] ? (counter[k] -= 1) : (counter[k] = 1);
  }

  for (let k in counter) {
    if (counter[k] !== 0) {
      return false;
    } else {
      return true;
    }
  }

  return [arr1, arr2, counter];
};

sameFrequency(122, 212);
