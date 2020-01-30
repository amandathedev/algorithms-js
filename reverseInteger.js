const reverseInteger = num => {
  let digits = num
    .toString()
    .split("")
    .reverse();
  return Number(digits.join(""));
};

reverseInteger(12345);
