const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input[0].split(' ');
const M = parseInt(firstLine[1]);
const cards = input[1].split(' ').map((element) => Number(element));
let answer = 0;

function getCombination(cards, selectNum) {
    const results = [];
    if (selectNum === 1) return cards.map((value) => [value]);
    cards.forEach((fixed, idx, arr) => {
        const nonFixed = arr.slice(idx + 1);
        const combinations = getCombination(nonFixed, selectNum - 1);
        const conneted = combinations.map((combination) => [fixed, ...combination]);
        results.push(...conneted);
    })
    return results;
}

getCombination(cards, 3).forEach((element) => {
    let sum = element[0] + element[1] + element[2];
    let gap = M - sum;
    if(gap >= 0 && answer <= sum){
       return answer = sum;
    }
 });
 console.log(answer);

