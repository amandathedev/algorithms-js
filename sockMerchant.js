const sockMerchant = arr => {
  let count = {};
  let totalPairs = 0;

  for (let k of arr) {
    count[k] ? (count[k] += 1) : (count[k] = 1);
  }

  for (let k in count) {
    let x = Math.floor(count[k] / 2);
    totalPairs += x;
  }
  return totalPairs;
};

sockMerchant([1, 2, 1, 2, 1, 3, 2]);
