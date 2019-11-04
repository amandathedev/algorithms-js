const mostFrequentInt = arr => {
  let counter = {};

  for (let key in counter) {
  }
  for (let i of arr) {
    counter[i] ? (counter[i] += 1) : counter[i];
  }
  return counter;
};

// mostFrequentInt([2, 5, 3, 7, 8, 2, 1, 9, 10, 11, 5, 5, 4, 5])
