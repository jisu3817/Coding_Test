const fs = require("fs");
const inputArr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

inputArr.pop();

const sortedInput = inputArr.sort((a, b) => a - b);

const excessHeightSum = sortedInput.reduce((acc, cur) => acc + cur) - 100;

for (let i = 0; i < sortedInput.length - 1; i += 1) {
  for (let j = i + 1; j < sortedInput.length; j += 1) {
    if (sortedInput[i] + sortedInput[j] === excessHeightSum) {
      sortedInput.splice(j);
      sortedInput.splice(i);
      break;
    }
  }
}

console.log(sortedInput.join("\n"));
