const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input);

const secArr = [300, 60, 10];
const cntArr = [0, 0, 0];

if (num % 10 != 0) {
    console.log("-1");
}
else {
    for (let i = 0; i < 3; i++) { 
        cntArr[i] = parseInt(num / secArr[i]);
        num %= secArr[i];
    }
    console.log(cntArr.join(' '));
}

