const flatten = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      newArr.push(arr[i]);
    } else {
      newArr = newArr.concat(flatten(arr[i]));
    }
  }
  return newArr;
};

// array may contain nested arrays or primitive elements
// strings, number, boolean, null
// return new array with only the primitive elements

// [2, 1, 2, 3, 1, "hello", 4, 5, 6, null]
// console.log(flatten([2, [1, 2, 3], 1, "hello", [4, 5, 6], null]))

// ([2, 1, 2, 3, [], 1, "hello", [4, 5, 6], null]))

// Array.isArray(arr[i])
