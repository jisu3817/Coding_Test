const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0].split('').map(Number);

if (!N.includes(0)) console.log(-1);
else {
  const add = N.reduce((acc, cur) =>  acc + cur);
  if (add % 3 !== 0) console.log(-1);
  else {
    console.log(N.sort((a, b) => b - a).join(''));
  }
};