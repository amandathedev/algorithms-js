var firstUniqChar = function(s) {
  let obj = {};
  let removedObj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!removedObj[char])
      if (obj[char] || obj[char] === 0) {
        delete obj[char];
        removedObj[char] = true;
      } else {
        obj[char] = i;
      }
  }
  let min = Infinity;
  for (const key in obj) {
    min = Math.min(min, obj[key]);
  }
  return min === Infinity ? -1 : min;
};

function firstUniqChar(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let j = 0; j < s.length; j++) {
    let char = s[j];
    if (obj[char] === 1) return j;
  }
  return -1;
}
