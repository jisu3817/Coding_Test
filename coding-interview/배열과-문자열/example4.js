'use strict';

/*
< 문제 >
주아진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라. 
회문이란 앞으로 읽으나 뒤로 읽으나 같은 단어 혹인 구절을 의미하며,순열이란 문자열을 재배치하는 것을 뜻한다. 
회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다. 
 */

const input = 'Tact Coa';

const inputArr = input.replace(/(\s*)/g, '').toLowerCase().split('');

const result = inputArr.filter((value, idx) => {
  return idx !== inputArr.indexOf(value);
})
