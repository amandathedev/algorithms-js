const postfixCalculator = input => {
  let numbersArr = [];
  let operands = ["+", "-", "*", "/"];

  for (let char of input) {
    if (!operands.includes(char)) {
      numbersArr.push(Number(char));
      //       console.log(numbersArr)
    } else if (input[char] === "+") {
      numbersArr.push(numbersArr.pop() + numbersArr.pop());
    }
  }
  //   return numbersArr
};

postfixCalculator("22+");
