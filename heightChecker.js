const heightChecker = heights => {
  //   let sortedHeights = heights.sort()
  let sortedHeights = heights.slice();
  sortedHeights.sort((a, b) => a - b);
  console.log(sortedHeights);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count += 1;
      console.log(count);
    }
  }
  return count;
};

heightChecker([1, 1, 4, 2, 1, 3]);
