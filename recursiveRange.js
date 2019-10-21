const recursiveRange = num => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
};

recursiveRange(10);
