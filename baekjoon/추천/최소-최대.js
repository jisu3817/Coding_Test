const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];

const numArr = input[1].split(" ").map(Number);

result.push(Math.min.apply(null, numArr));
result.push(Math.max.apply(null, numArr));

console.log(result.join(" "));
