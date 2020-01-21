function triangle(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      //         console.log("before", arr[i][j])
      arr[i][j] += Math.min(arr[i + 1][j], arr[i + 1][j + 1]);
      //         console.log("after", arr[i][j])
    }
  }
  return arr[0][0];
}

// triangle([[2], [3,4], [6,5,7], [4,1,8,3]])

const minTriangle = arr => {
  //   Start second row from the bottom and move up
  for (let i = arr.length - 2; i >= 0; i--) {
    // Start at the beginning of each subarray and move right
    for (let j = 0; j < arr[i].length; j++) {
      //       For each number, add whichever number is smaller of the two numbers below it that it can travel to
      arr[i][j] += Math.min(arr[i + 1][j], Math.min(arr[i + 1][j + 1]));
    }
  }
  //   After the loop is complete, the top number is now equal to the minimum path
  return arr[0][0];
};

// minTriangle([[7], [8,10], [4,1,0], [12,14,15,17]])

const newTriangle = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.min(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }
  return arr[0][0];
};

newTriangle([[7], [8, 10], [4, 1, 0], [12, 14, 15, 17]]);

const triangle2 = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.min(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }
  return arr[0][0];
};

triangle2([[7], [8, 10], [4, 1, 0], [12, 14, 15, 17]]);
