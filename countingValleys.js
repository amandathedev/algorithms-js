const countingValleys = (num, string) => {
  let seaLevelDiff = 0;
  let valleyCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "U") {
      seaLevelDiff += 1;
    } else if (string[i] === "D") {
      if (seaLevelDiff === 0) {
        valleyCount += 1;
      }
      seaLevelDiff -= 1;
    }
  }
  return valleyCount;
};

// countingValleys(8, "UDDDUDUU")
