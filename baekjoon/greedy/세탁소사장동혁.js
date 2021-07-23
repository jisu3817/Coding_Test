const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testNum = parseInt(input[0]);
const testArr = [];

const coin = [25, 10, 5, 1];
let cnt = 0;

let result = [];

for (let i = 1; i < testNum + 1; i++) testArr.push(parseInt(input[i]));

for (let j = 0; j < testNum; j++) {

    for (let k = 0; k < coin.length; k++) {
        cnt = parseInt(testArr[j] / coin[k]);
        result.push(cnt);
        testArr[j] %= coin[k];
    }

    console.log(result.join(' '));
    result = [];
}

