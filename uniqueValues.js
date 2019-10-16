const uniqueValues = arr => {
  let leftPointer = 0;
  let rightPointer = 1;
  let count = 1;

  while (rightPointer < arr.length) {
    //     If left pointer != right pointer, add add 1 to count
    if (arr[leftPointer] === arr[rightPointer]) {
      leftPointer++;
      rightPointer++;
    } else {
      count += 1;
      leftPointer++;
      rightPointer++;
    }
  }
  return count;
};

uniqueValues([1, 1, 2, 2, 3, 5]);
