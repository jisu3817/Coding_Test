const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrLen = Number(input[0]);
const arrA = input[1].split(' ').sort((a, b) => a - b).map((value) => Number(value));
const arrB = input[2].split(' ').sort((a, b) => b - a).map((value) => Number(value));

let result = 0;

for(let i = 0; i < arrLen; i++) {
  result += arrA[i] * arrB[i]
}
 
console.log(result);
