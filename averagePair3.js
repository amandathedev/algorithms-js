const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === num) {
      return `${arr[start]} and ${arr[end]} have an average of ${num}`;
    } else if (average > num) {
      end--;
    } else {
      start++;
    }
  }
  return `None of these number pairs have an average of ${num}`;
};

averagePair([-2, 0, 1, 2, 4, 5, 6, 7], 5.5);
