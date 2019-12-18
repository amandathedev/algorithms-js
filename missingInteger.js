// Missing integer
function solution(A) {
  let sortedArr = A.sort((a, b) => a - b);
  //   console.log(sortedArr)

  //   If the largest number is less than zero
  if (sortedArr[sortedArr.length - 1] < 0) {
    //  Then 1 is the next positive integer
    return 1;
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      let num = sortedArr[i];
      // If the difference between the number and the one after it is greater than one
      if (sortedArr[i + 1] - num > 1) {
        // then the number after i is the missing integer
        return i + 1;
      }
    }
    //  Otherwise (no gaps, positive numbers) return the next integer after the largest
    return sortedArr[sortedArr.length - 1] + 1;
  }
}

// solution([1, 3, 6, 4, 1, 2]) //should return 5
// solution([-1, -2, -3]) // should return 1
// solution([1, 2, 3]) // should return 4
