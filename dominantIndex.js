function dominantIndex(arr) {
  let sortedArr = arr.sort();
  console.log(sortedArr);
  let bigNum = sortedArr[sortedArr.length - 1];
  let second = sortedArr[sortedArr.length - 2];
  //   console.log(bigNum, second)

  if (bigNum / 2 < second) {
    return false;
  } else {
    return sortedArr.length - 1;
  }
}

// dominantIndex([1, 0])
