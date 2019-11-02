const jumpClouds = array => {
  let jumpCount = 0;
  let i = 0;

  while (i < array.length - 1) {
    if (array[i + 2] === 0) {
      i += 2;
    } else {
      i++;
    }
    jumpCount++;
    console.log(jumpCount, i);
  }
  return jumpCount;
};

// jumpClouds([0, 0, 1, 0, 0, 1, 0])
