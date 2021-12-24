const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
const timeTaken = input[1].split(' ').map(Number);

timeTaken.pop();
const arr = [];

timeTaken.sort((a, b) => a - b).map((time, idx) => {
    if (idx === 0) arr.push(time);
    else arr.push(arr[idx - 1] + time);
});

const answer = arr.reduce((arr, cur) => arr + cur);

console.log(answer);