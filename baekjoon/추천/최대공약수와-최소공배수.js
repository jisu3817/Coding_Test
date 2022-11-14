const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const num1 = input[0];
const num2 = input[1];

let result = 0;

for (let i = 1; i <= Math.min(num1, num2); i += 1) {
  if (num1 % i === 0 && num2 % i === 0) {
    result = i;
  }
}

console.log(result);
console.log(result * (num1 / result) * (num2 / result));
