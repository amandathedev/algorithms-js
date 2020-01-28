const postfixCalculator = input => {
  let numbersArr = [];
  let operands = ["+", "-", "*", "/"];

  for (let char of input) {
    if (!operands.includes(char)) {
      numbersArr.push(char);
    }
  }
  return numbersArr;
};

postfixCalculator("22+");
