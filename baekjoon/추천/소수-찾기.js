const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const inputArr = input[1].split(" ").map(Number);

let cnt = 0;
for (const item of inputArr) {
  let num = 2;
  let isDiv = true;
  while (num < item) {
    if (num % item === 0) {
      isDiv = false;
      break;
    }
  }

  if (isDiv) {
    cnt += 1;
  }
}

if (inputArr.includes(1)) {
  console.log(cnt - 1);
} else {
  console.log(cnt);
}
