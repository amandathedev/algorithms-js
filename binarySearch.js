const binarySearch = (array, value) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let middle = Math.floor((leftPointer + rightPointer) / 2);

  while (leftPointer < rightPointer) {
    if (array[middle] === value) {
      return middle;
    } else if (value < array[middle]) {
      middle--;
      leftPointer++;
    }
  }
};

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
