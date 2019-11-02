const repeatedString = (s, n) => {
  let aCount = 0;

  if (s.length > n) {
    for (let i = 0; i < n; i++) {
      if (s[i] === "a") {
        aCount += 1;
      }
      return aCount;
    }
  } else {
    let remainder = n % s.length;
    console.log(remainder);
    let times = Math.ceil(n / s.length);
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        aCount++;
      }
    }
    aCount = aCount *= times;
    if (remainder === 0) {
      return aCount;
    } else {
      for (let i = 0; i < remainder; i++) {
        if (s[i] === "a") {
          aCount++;
        }
        return aCount;
      }
    }
  }
  return aCount;
};

// repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570)
