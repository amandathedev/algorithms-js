// function happyNumber(num){
//   let isHappy = false;
//   let tempSum = 0;
//   let numbers = []
//   let squaredNums = []
//   //   take each digit in the number
//   let splitNums = num.toString().split("")
//   for (let i = 0; i < splitNums.length; i++) {
//     numbers.push(parseInt(splitNums[i]))
//     console.log(numbers)
//   }
//   //   square each digit
//   for (let i = 0; i < numbers.length; i++){
//     squaredNums.push(Math.pow(numbers[i], 2))
//     console.log(squaredNums)
//     tempSum += squaredNums[i]
//     console.log(tempSum)
//   }

//   if(tempSum !== 1){
//     happyNumber(tempSum)
//   } else {
//   isHappy = true
//   }
//   happyNumber(tempSum)

// return isHappy

//   get the sum of the squared digits
//   repeat the process with the digits in the squared sum
//   repeat until the number equals 1 or doesn't equal 1 and loops repeatedly
//   return true if it equals 1 or false if it never does

// }

// happyNumber(19)

function happyNumber2(num) {
  let seen = {};
  while (num !== 1 && seen[num] !== true) {
    seen[num] = true;
    //     console.log(num)
    num = sumSquare(num);
  }
  return num === 1 ? true : false;
}

function sumSquare(numString) {
  return numString
    .toString()
    .split("")
    .reduce(function(sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}

// happyNumber2(19)

// let seen = {}
// function happyNumber3(num){
//   if(num === 1) return true
//   if(seen[num]) return false

//   let arr = num.toString().split('')
//   let total = 0
//   for(let i = 0; i < arr.length; i++){
//     total += (parseInt(arr[i]) * arr[i])
//   }

//   seen[total] = true
// console.log(seen)

//   happyNumber3(total)

// }

// happyNumber3(19)

function happyNumber3(num) {
  let seen = {};
  let tempNum = 0;

  if (num === 1) return true;

  if (seen[num]) return false;

  while (num !== 1 && !seen[num]) {
    seen[num] = true;
    let newNum = num.toString().split("");
    for (let i = 0; i < newNum.length; i++) {
      tempNum += parseInt(newNum[i] * newNum[i]);
    }

    let arr = num.toString().split("");
    console.log(arr);

    happyNumber3(tempNum);
    return tempNum === 1 ? true : false;
  }
}

// happyNumber3(19)
