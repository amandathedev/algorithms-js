const rotateLeft = (arr, num) => {
  let newArray = [];
  let leftPointer = 0;
  let rightPointer = num;
  let i = num;

  while (leftPointer < rightPointer) {
    //     for(let i = num; i < arr.length; i++) {
    while (i < arr.length) {
      newArray.push(arr[i]);
      i++;
    }
    newArray.push(arr[leftPointer]);
    leftPointer++;
  }
  return newArray;
};

rotateLeft([1, 2, 3, 4, 5], 3);
// Expected output: [4, 5, 1, 2, 3]
