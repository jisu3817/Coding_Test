'use strict';

/*
< 문제 - 회문 순열 >
주아진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라. 
회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹인 구절을 의미하며,순열이란 문자열을 재배치하는 것을 뜻한다. 
회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다. 
 */

const input = 'ttae';

const inputArr = input.replace(/(\s*)/g, '').toLowerCase().split('');

let cnt = 0;
let result = true;
const hash = {};

inputArr.forEach(value => {
  if (value in hash) hash[value] += 1;
  else hash[value] = 1;
});

// 짝수
if (!(inputArr.length % 2)) {
  const oddLen = Object.values(hash).filter((value) => {
    if (value % 2) return value;
  }).length;

  if (oddLen) result = false;
} 
// 홀수
else {
  const oneStr = Object.values(hash).filter((value) => value === 1).length;
  const oddLen = Object.values(hash).filter((value) => {
    if ((value % 2) && value !== 1) return value;
  }).length;

  if ((oneStr > 1) || oddLen) result = false;
}

console.log(result);