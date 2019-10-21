const defang = address => {
  let defanged = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] != ".") {
      defanged += address[i];
    } else {
      defanged += "[.]";
    }
  }
  return defanged;
};

defang("1.1.1.1");
