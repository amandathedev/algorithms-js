const numJewelsInStones = (j, s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (j.includes(s[i])) {
      count += 1;
    }
  }
  return count;
};

numJewelsInStones("aA", "aAAbbbb");
