const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const phoneA = input[0].split('').map(Number);
const phoneB = input[1].split('').map(Number);

const phoneSum = [];
let sum = 0;

phoneA.map((num, idx) => {
  phoneSum.push(num);
  phoneSum.push(phoneB[idx]);
});

let result = [];

function add(arr) {
  const newArr = [];

  return arr.map((value, idx) => newArr.push(value + arr[idx + 1]));
}

while (phoneSum.length > 2) {
  if (!result.length) {
    result = add(phoneSum);
  } else result = add(result);
}

console.log(result);
