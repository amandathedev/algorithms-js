const balancedStrings = string => {
  let lCount = 0;
  let rCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "L") {
      lCount++;
    } else {
      rCount++;
    }
  }
  console.log(lCount, rCount);
};

// balancedStrings("RLRRLLRLRL")
