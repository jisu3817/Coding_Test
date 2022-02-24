'use strict';

/*
< 문제 - 회문 순열 >
주아진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라. 
회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹인 구절을 의미하며,순열이란 문자열을 재배치하는 것을 뜻한다. 
회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다. 
 */

//첫 번째 풀이
const input = 'ttaa';
const inputArr = input.replace(/(\s*)/g, '').toLowerCase().split('');

let cnt = 0;
let result = true;
const hash = {};

inputArr.forEach(value => {
  if (value in hash) hash[value] += 1;
  else hash[value] = 1;
});

if (!(inputArr.length % 2)) {
  const oddLen = Object.values(hash).filter((value) => {
    if (value % 2) return value;
  }).length;

  if (oddLen) result = false;
} 

else {
  const oneStr = Object.values(hash).filter((value) => value === 1).length;
  const oddLen = Object.values(hash).filter((value) => (value % 2 && value !== 1)).length;

  if ((oneStr > 1) || oddLen) result = false;
  else result = true;
}

console.log(result);


//두 번째 풀이 (// 굳이 짝수와 홀수를 구분해서 구할 필요가 없다. 길이가 짝수인데 홀수 개수의 문자가 존재한다면 위 조건에서 걸릴 것!)
const input = 'ttaa';
const inputArr = input.replace(/(\s*)/g, '').toLowerCase().split('');

let cnt = 0;
let result = true;
const hash = {};

inputArr.forEach(value => {
  if (value in hash) hash[value] += 1;
  else hash[value] = 1;
});

const oneStr = Object.values(hash).filter((value) => value === 1).length;
const oddLen = Object.values(hash).filter((value) => (value % 2 && value !== 1)).length;

if ((oneStr > 1) || oddLen) result = false;
else result = true;


console.log(result);


// 세 번째 풀이 (시간 복잡도 개선)
let cntOdd = 0;
const input = 'tact coac';
const hash = {};

const inputArr = input.replace(/(\s*)/g, '')
  .toLowerCase()
  .split('')
  .forEach(str => {
    if (str in hash) hash[str] += 1;
    else hash[str] = 1;

    if (hash[str] % 2) cntOdd += 1;
    else cntOdd -= 1;
});

console.log(hash);
console.log(cntOdd <= 1);
