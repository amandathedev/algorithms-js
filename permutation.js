const permutations = arr => {
  let result = [];

  const shuffle = (current, remaining) => {
    if (remaining.length <= 0) {
      result.push(current.slice());
    } else {
      for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i]);
        shuffle(
          current.slice(),
          remaining.slice(0, i).concat(remaining.slice(i + 1))
        );
        current.pop();
      }
    }
  };
  shuffle([], arr);
  return result;
};

permutations([1, 2, 3]);
