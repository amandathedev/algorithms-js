const minSubArrayLen = (arr, num) => {
  let min = Infinity;
  let i = 0;
  let j = 1;
  let total = arr[i] + arr[j];

  if ((arr[i] || arr[-1]) > num) {
    return 1;
  }

  while (i < arr.length - 1) {
    //     console.log(i)
    if (total < num) {
      j++;
      total += arr[j];
    } else {
      min = Math.min(min, j - i + 1);
      total -= arr[i];
      i++;
    }
  }
  return min;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
