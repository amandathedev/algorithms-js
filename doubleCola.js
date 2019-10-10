let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
function whoIsNext(names, r) {
  for (let i = 1; i < r; i++) {
    let x = names.shift();
    names.push(x, x);
  }

  return names[0];
}

whoIsNext(names, 52);
