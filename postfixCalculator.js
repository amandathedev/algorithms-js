const postfixCalculator = input => {
  let numbersArr = [];
  let operands = ["+", "-", "*", "/"];

  for (let char of input) {
    if (!operands.includes(char)) {
      numbersArr.push(char);
    }
    // else if (input.pop())
  }
  return numbersArr;
};

postfixCalculator("22+");
