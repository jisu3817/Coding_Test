let input = require('fs').readFileSync('/dev/stdin').toString();
const value = Number(input);

function factorial(value) {
    if (value === 0) return 0;
    if (value === 1) return 1;

    return factorial(value - 1) + factorial(value - 2);
}

console.log(factorial(value));

