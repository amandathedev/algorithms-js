// max skyline

const skyline = grid => {
  let newGrid = [];
  let maxX = 0;
  let maxY = 0;
  let totalIncrease = 0;
  let newBuilding = 0;
  let increase = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxX = Math.max(maxX, grid[0][i]);
      maxY = Math.max(maxY, grid[j][0]);
      newBuilding = Math.min(maxX, maxY);
      increase = newBuilding - grid[0][i];
    }
  }

  totalIncrease += increase;
  newGrid.push(newBuilding);

  //   console.log(maxI)
  //   console.log(maxJ)
  //   console.log(newBuilding)
  console.log(newGrid);
  console.log(totalIncrease);
};

// skyline([
//   [3, 0, 8, 4],
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0]
// ])
