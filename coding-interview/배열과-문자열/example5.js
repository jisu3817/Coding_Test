'use strict';

/*
< 문제 - 하나 빼기 >
문자열을 편집하는 방법에는 세 가지 종류가 있다. 문자 삽입, 문자 삭제, 문자 교체, 문자열 두 개가 주어졌을 때,
문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수를 작성하라. 
*/

const inputs = [
  ['pale', 'ple'],
  ['pales', 'pale'],
  ['pale', 'bale'],
  ['pale', 'bake']
];

const result = inputs.map(input => {
  if (input[0].length === input[1].length) return sameLenCheck(input);
  else if (input[0].length + 1 === input[1].length) return differentLenCheck(input[1], input[0]);
  else if (input[0].length === input[1].length + 1) return differentLenCheck(input[0], input[1]);
  else return false;
});

function sameLenCheck(input) {
  let cnt = 0;

  for (let i = 0; i < input[0].length; i += 1) {
    if (!input[0].includes(input[1][i])) cnt += 1;
  }
 
  if (cnt > 1) return false;
  else return true;
};

function differentLenCheck(longStr, shortStr) {
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < longStr && inx2 < shortStr) {
    if (longStr[idx1] !== shortStr[idx2]) {
      if (idx1 > idx2) return false;
      else idx1 += 1;
    } 
    else {
      idx1 += 1;
      idx2 += 1;
    }
  }
  return true;
};

console.log(result);
