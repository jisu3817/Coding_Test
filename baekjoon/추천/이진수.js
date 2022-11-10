const fs = require("fs");
const inputArr = fs.readFileSync("/dev/stdin").toString().split("\n");

inputArr.shift();

const result = [];
for (const target of inputArr) {
  const binaryNum = parseInt(target).toString(2).split("").reverse();

  let idx = 0;

  while (idx < binaryNum.length) {
    if (binaryNum[idx] == 1) {
      result.push(idx);
    }
    idx += 1;
  }
}

console.log(result.join(" "));
