function moveZeros(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      num.splice(i, 1);
      num.push(0);
    }
  }
  return num;
}

moveZeros([0, 1, 0, 3, 12]);
// [1,3,12,0,0] Expected
