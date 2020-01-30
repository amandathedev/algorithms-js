const reverseString = str => {
  let arr = [...string];
  let reverse = arr.reverse().join("");
  return reverse;
};

reverseString("this is facing the wrong way");
