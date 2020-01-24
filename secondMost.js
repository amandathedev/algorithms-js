const secondMost = arr => {
  let counter = {};
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] ? (counter[arr[i]] += 1) : (counter[arr[i]] = 1);
  }

  let sorted = Object.entries(counter).sort((a, b) => {
    return b[1] - a[1];
  });

  //   for(let key in counter){
  //     sorted.push(key, counter[key])
  //   }

  for (let j = 0; j < 2; j++) {
    results.push(Number(sorted[j][0]));
  }

  return results.pop();
};

// secondMost([1, 2, 3, 3, 2, 2, 2, 2, 3, 3, 1, 4, 4, 3, 3, 2, 2, 3, 3, 1])
