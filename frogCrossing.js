function frogCrossing(arr, x) {
  let tracker = {};
  let allTrue = false;

  for (let i = x; i > 0; i--) {
    tracker[i] = 1;
  }
  let found = 0;
  for (let j = 0; j < arr.length; j++) {
    if (tracker[arr[j]]) {
      tracker[arr[j]] = true;
    }
    if (trackerChecker(tracker) === true) {
      found = j;
      break;
    }
  }
  return found;
}

function trackerChecker(tracker) {
  for (const k in tracker) {
    if (tracker[k] === 1) {
      return false;
    }
  }
  return true;
}

frogCrossing([1, 2, 4, 7, 6, 3, 2, 2, 5, 4, 5, 11], 5);
