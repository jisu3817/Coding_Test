const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const firstLine = input[0].split(" ");
const N = parseInt(firstLine[0]);
let K = parseInt(firstLine[1]);
const coin = [];
let cnt = 0;

for (let i = N; i > 0; i--) coin.push(parseInt(input[i]));

for (let money of coin) {
	cnt += parseInt(K / money);
	K %= money;
}
console.log(cnt);

