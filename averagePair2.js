// Find the pair of numbers in the array whose average is equal to the number given
const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start] + arr[end] / 2;
    if (temp === num) {
      return `${arr[start]} and ${arr[end]} have an average of ${num}`;
    } else if (temp > num) {
      end--;
    } else {
      start++;
    }
  }
  return `None of these number pairs have an average of ${num}`;
};

// averagePair([1, 2, 3], 2.5)
averagePair([-2, 0, 1, 2, 4, 5, 6, 7], 5.5);
// averagePair([-1, 0, 3, 4, 5, 6], 4.1);
