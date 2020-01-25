const sum = (...args) => {
    let s = 0;
    for (let i = 0; i < args.length; i++) {
        s += args[i];
    }
    return s;
}
 
console.log(sum(2, 3));         // 5
console.log(sum(-10, 1));       // -9
console.log(sum(1, 1, 1, 1));   // 4
console.log(sum());             // 0