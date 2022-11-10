const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const N = parseInt(input[0]);
const K = parseInt(input[1]);

let cnt = 0;
let result = 0;

for (let i = 1; i <= N; i += 1) {
  if (N % i === 0) {
    cnt += 1;
  }
  if (cnt === K) {
    result = i;
    break;
  }
}

console.log(result);
