const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const ropeNum = parseInt(input.shift());

const ropes = input.map(Number).sort((a, b) => a - b).map((rope, idx) => {
  return rope * (ropeNum - idx);
});

console.log(Math.max(...ropes));


