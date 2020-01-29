const evenDigits = nums => {
  let count = 0
  
  for(let x of nums){
    let digits = Array.from(String(x), Number);
    console.log(digits)
    if(digits.length % 2 === 0){
      count++
    }
  }
  return count
}

evenDigits([12, 343, 2, 6, 7896, 930, 1231, 23])