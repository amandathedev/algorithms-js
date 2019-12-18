// oddOccurrences
function solution(A) {
  let counter = {};

  for (let i = 0; i < A.length; i++) {
    let digit = A[i];
    counter[digit] = (counter[digit] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] % 2 !== 0) {
      return key;
    }
  }
}

solution([9, 2, 9, 2, 7, 8, 7, 8, 9, 4, 9]);
