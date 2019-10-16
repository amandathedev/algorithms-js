const minSubArrayLen = (arr, num) => {
  let min = Infinity;
  let i = 0;
  let j = 1;
  let total = arr[i] + arr[j];

  if ((arr[i] || arr[-1]) > num) {
    return 1;
  }

  while (i < arr.length - 1) {
    if (total < num) {
      if (j < arr.length - 1) {
        j++;
        total += arr[j];
      } else {
        return min === Infinity ? 0 : min;
      }
    } else {
      min = Math.min(min, j - i + 1);
      total -= arr[i];
      i++;
    }
  }
  return min;
};
