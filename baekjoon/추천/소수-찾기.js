const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const inputArr = input[1].split(" ").map(Number);

function div(item) {
  for (let i = 2; i < item; i += 1) {
    if (item % i === 0) return false;
  }
  return true;
}

const result = inputArr.filter((item) => {
  return item !== 1 && div(item);
}).length;

console.log(result);
