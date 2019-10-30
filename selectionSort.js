const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let lowestNum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[lowestNum]) {
        lowestNum = j;
      }
      console.log(array);
      [array[j], array[lowestNum]] = [array[lowestNum], array[j]];
    }
    //     console.log(array)
  }
};

selectionSort([2, 10, 28, 15, 3, 7]);
