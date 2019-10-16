const giveChange = bills => {
  let register = { 5: 0, 10: 0, 20: 0 };

  for (let k of bills) {
    if (k === 5) {
      register[5] += 1;
    } else {
      let change = k - 5;
      register[k] += 1;
      if (register[5] < 1) {
        return false;
      } else {
        if (change === 5) {
          register[5] -= 1;
        } else {
          if (register[10] >= 1) {
            register[10] -= 1;
            register[5] -= 1;
          } else {
            if (register[5] >= 3) {
              register[5] -= 3;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};

giveChange([5, 5, 5, 10, 20]);
