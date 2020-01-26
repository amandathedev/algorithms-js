const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log(sum(2, 3)); // 5
console.log(sum(2, 3, 4)); // 9
console.log(sum(2, 3, 4, 5)); // 14

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(2, 3)); // 5
console.log(sum(-10, 1)); // -9
console.log(sum(1, 1, 1, 1)); // 4
console.log(sum()); // 0

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(2, 3)); // 5
console.log(sum(2, 3, 4)); // 9
console.log(sum(2, 3, 4, 5)); // 14
