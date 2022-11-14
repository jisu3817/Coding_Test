const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift();
input.pop();

const resultArr = input.map((arr) => {
  const inputArr = arr
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return inputArr[2];
});

console.log(resultArr.join(" "));
