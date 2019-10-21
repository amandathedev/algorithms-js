const linearSearch = (arr, value) => {
  //   Loop through array and check if the current array element is equal to the value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  //   If it is, return the index at which it was found
  //   If the value is never found, return -1
  return -1;
};

linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 6);
