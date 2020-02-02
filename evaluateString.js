const evaluateString = str => {
  let operands = ["+", "-", "*", "/"];
  let arr = [...str];

  for (let i = 0; i < operands.length; i++) {
    let operatorIndex = str.indexOf(operands[i]);
  }

  //   let ascii = str.charCodeAt(2)

  let first = Number(str.slice(0, 2).trim());
  let second = Number(str.slice(3 + 1).trim());
  let operator = str[2];

  if (str[2] === "+") {
    return first + second;
  } else if (str[2] === "*") {
    return first * second;
  } else if (str[2] === "-") {
    return first - second;
  } else {
    return first / second;
  }
};

// evaluateString('20 - 3')
