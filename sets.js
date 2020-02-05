let myArr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let arrSet = new Set(myArr);
console.log(arrSet); // Set { 1, 2, 3, 4, 5, 6 }

let myStr = "hello";
let strSet = new Set(myStr);
console.log(strSet); // Set { 'h', 'e', 'l', 'o' }

let arr2 = ["hello", "hello", 2, 2, [1], 1, [3], [3], { a: 1 }, { a: 1 }];
let set2 = new Set(arr2);
console.log(set2); // Set { 'hello', 2, [ 1 ], 1, [ 3 ], [ 3 ], { a: 1 }, { a: 1 } }
