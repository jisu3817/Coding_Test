const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const start = parseInt(input[0]);
const end = parseInt(input[1]);

let repeatNum = 1;
let arr = [];
let isRepeat = true;

while (isRepeat) {
  for (let i = 1; i <= repeatNum; i += 1) {
    arr.push(repeatNum);

    if (arr.length >= end) {
      isRepeat = false;
    }
  }
  repeatNum += 1;
}

console.log(arr.slice(start - 1, end).reduce((acc, cur) => acc + cur));
