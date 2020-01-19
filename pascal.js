const pascalTriangle = num => {
  let bigArr = [];
  let i = 1;

  while (i <= num) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (j === 0) {
        arr.push(1);
      } else if (j === i - 1) {
        arr.push(1);
      } else {
        let total = bigArr[i - 2][j] + bigArr[i - 2][j - 1];
        arr.push(total);
      }
    }
    bigArr.push(arr);
    i++;
  }
  return bigArr;
};

pascalTriangle(5);
