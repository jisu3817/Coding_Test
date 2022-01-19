const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
const value = parseInt(input[0]);
const answer = [];

for (let i = 1; i < value; i += 1) {
  const decompose = parseInt(i.toString()
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur))) + i; 

  if (decompose === value) answer.push(i);
}

if (answer.length) console.log(Math.min.apply(null, answer));
else console.log(0);