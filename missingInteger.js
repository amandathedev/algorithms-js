// Missing integer
function solution(A) {
  // A = [1, 3, 6, 4, 1, 2]
  let sortedArr = A.sort((a, b) => a - b);
  // sortedArr = [ 1, 1, 2, 3, 4, 6 ]

  // If the largest number is a negative number
  if (sortedArr[sortedArr.length - 1] < 0) {
    // then 1 is the next positive integer
    return 1;
    // If the smallest number is greater than 1
  } else if (sortedArr[0] > 1) {
    // then 1 is the first positive integer
    return 1;
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      let num = sortedArr[i];
      // if the difference between the current number and the next number is greater than 1
      if (sortedArr[i + 1] - num > 1) {
        // Then the number after i is the missing number
        return sortedArr[i] + 1;
      }
    }
    // Otherwise return the next number after the largest number
    return sortedArr[sortedArr.length - 1] + 1;
  }
}

// solution([1, 3, 6, 4, 1, 2]) //should return 5
// solution([-1, -2, -3]) // should return 1
// solution([1, 2, 3]) // should return 4
solution([10, 8, 4]); // should return 1
