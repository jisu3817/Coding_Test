const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);
let pay = 1000 - num; 
const iterable = [500, 100, 50, 10, 5, 1];
let cnt = 0;

for (let money of iterable) {
	cnt += parseInt(pay / money);
	pay %= money;
}

console.log(cnt);

