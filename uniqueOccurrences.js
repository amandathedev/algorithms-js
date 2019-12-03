var uniqueOccurrences = function(arr) {
  const obj = {};
  arr.forEach(val => (obj[val] = (obj[val] || 0) + 1));
  const val = Object.values(obj).sort((a, b) => a - b);
  for (let i = 0; i < val.length - 1; i++) {
    if (val[i] === val[i + 1]) return false;
  }
  return true;
};
