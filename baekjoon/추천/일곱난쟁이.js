const fs = require("fs");
const inputArr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

inputArr.pop();

const sortedInput = inputArr.sort((a, b) => a - b);

const excessHeightSum = sortedInput.reduce((acc, cur) => acc + cur) - 100;

let check1, check2;
for (let i = 0; i < sortedInput.length - 1; i += 1) {
  for (let j = i + 1; j < sortedInput.length; j += 1) {
    if (sortedInput[i] + sortedInput[j] === excessHeightSum) {
      [check1, check2] = [i, j];
      break;
    }
  }
}

for (let i = 0; i < 9; i += 1) {
  if (i !== check1 && i !== check2) console.log(result[i].toString());
}
