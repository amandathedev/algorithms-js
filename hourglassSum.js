const hourglassSum = array => {
  let highestSum = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let total =
        array[i][j] +
        array[i][j + 1] +
        array[i][j + 2] +
        array[i + 1][j + 1] +
        array[i + 2][j] +
        array[i + 2][j + 1] +
        array[i + 2][j + 2];
      highestSum = Math.max(highestSum, total);
    }
    //     console.log(highestSum)
  }
  return highestSum;
};

// hourglassSum(
//   [[1, 1, 1, 0, 0, 0],
//    [0, 1, 0, 0, 0, 0],
//    [1, 1, 1, 0, 0, 0],
//    [0, 0, 2, 4, 4, 0],
//    [0, 0, 0, 2, 0, 0],
//    [0, 0, 1, 2, 4, 0]
//   ])
