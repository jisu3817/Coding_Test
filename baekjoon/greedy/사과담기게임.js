const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = parseInt(input[0]) + 1;
let sit = input[1].split('');

if (sit.includes('L')) {
    const L = sit.filter(a => a === 'L').length / 2;
    console.log(num - L);
}
else console.log(num - 1);

