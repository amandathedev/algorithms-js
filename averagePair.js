const averagePair = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let total = (arr[start] + arr[end]) / 2;
    if (total === num) {
      return true;
    } else if (total > num) {
      end--;
    } else {
      start++;
    }
  }
  return false;
};

// averagePair([1, 2, 3], 2.5)
averagePair([-1, 0, 3, 4, 5, 6], 4.1);
