// Create an array from a string
let string = "Hello";
let arr = [...string];
console.log(string)[("H", "e", "l", "l", "o")];

// Copy an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2)[(1, 2, 3)];

// Like concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

arr1 = [...arr1, ...arr2];

console.log(arr1); // [ 1, 2, 3, 4, 5 ]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr2, ...arr1];

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]
console.log(arr3); // [ 4, 5, 6, 1, 2, 3 ]

// Expand
let arr1 = ["a", "b"];
let arr2 = [...arr1, "c", "d"];
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]

// Math operations
let arr = [1, 2, 3, 0.5, -1];
console.log(Math.max(...arr)); // 3

// Destructuring
// You can use destructuring and the rest operator together to extract the information into variables as you'd like them:
// The remaining properties are assigned to the variable after the spread operator!
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4, c: 5 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4, c: 5 }

arr1.push(...arr2); // Adds arr2 items to end of array
arr1.unshift(...arr2); //Adds arr2 items to beginning of array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

arr1.unshift(...arr2);
console.log(arr1); // [ 4, 5, 6, 1, 2, 3 ]

var arr1 = ["two", "three"];
var arr2 = ["one", ...arr1, "four", "five"];
console.log(arr2); // ["one", "two", "three", "four", "five"]

doStuff(...args);

let obj1 = { dog: 2, cat: 3, elephant: 4 };
let obj2 = { house: "red", car: "blue" };

let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
// { dog: 2, cat: 3, elephant: 4, house: 'red', car: 'blue' }
