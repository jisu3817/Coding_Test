const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const add = input[0].split('-').map(str => {
  return str.split('+').map(Number).reduce((acc, cur) => acc + cur);
});

const result = add.reduce((acc, cur) => acc - cur);


console.log(result);