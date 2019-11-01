const minimumBribes = arr => {
  let totalBribes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - (i + 1) > 2) {
      console.log("Too chaotic");
    }

    for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
      if (arr[j] > arr[i]) {
        totalBribes += 1;
      }
    }
  }
  console.log(totalBribes);
};

// minimumBribes([2, 5, 1, 3, 4])
// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
