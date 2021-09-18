const input = 
    require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .slice(0, -1);

const carNum = parseInt(input[0]);
const inCar = {};
const out = [];
let cnt = 0;

for (let i = 1; i < carNum + 1; i += 1) {
    inCar[input[i]] = i;
}

for (let i = carNum + 1; i < input.length; i += 1) {
    out.push(input[i]);
}

for (let k = 0; k < out.length; k += 1) {
    const kOutRank = inCar[out[k]];
    for (let j = k + 1; j < out.length; j += 1) {
        const jOutRank = inCar[out[j]];

        if (kOutRank > jOutRank) {
            cnt++;
            break;
        }
    }
}
console.log(cnt);

