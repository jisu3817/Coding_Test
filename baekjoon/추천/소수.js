const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const M = parseInt(input[0]);
const N = parseInt(input[1]);

let primeNumArr = [];

function hasRemain(item) {
  for (let i = 2; i < item; i += 1) {
    if (item % i === 0) return false;
  }
  return true;
}

for (let i = M; i <= N; i += 1) {
  if (i === 1) continue;
  if (hasRemain(i)) primeNumArr.push(i);
}

if (!primeNumArr.length) console.log(-1);
else {
  console.log(primeNumArr.reduce((acc, cur) => acc + cur));
  console.log(primeNumArr[0]);
}
