const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numArr = input[1].split(" ").map((num) => +num);
const operatorArr = input[2].split(" ").map((operator) => +operator);

let min = 1000000000;
let max = -1000000000;

function dfs(numIdx, value) {
  const initValue = value;

  if (numIdx === input[0] - 1) {
    if (value > max) max = value;
    if (value < min) min = value;
    return;
  }

  for (let i = 0; i < operatorArr.length; i += 1) {
    if (operatorArr[i] > 0) {
      switch (i) {
        case 0:
          value += numArr[numIdx + 1];
          break;
        case 1:
          value -= numArr[numIdx + 1];
          break;
        case 2:
          value *= numArr[numIdx + 1];
          break;
        case 3:
          if (value > 0) {
            value = Math.floor(value / numArr[numIdx + 1]);
          } else {
            value = Math.floor(-value / numArr[numIdx + 1]);
            if (value > 0) value = -value;
          }
      }

      operatorArr[i] -= 1;
      dfs(numIdx + 1, value);

      operatorArr[i] += 1;
      value = initValue;
    }
  }
  return;
}

dfs(0, numArr[0]);

console.log(`${max}\n${min}`);
