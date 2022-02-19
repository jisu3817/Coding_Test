'use strict';

 /*
 < 문제 - 문자열 압축 >
 반복되는 문자의 개수를 세는 방식의 기본적인 문자열 압축 메서드를 작성하라.
 예를 들어 문자열 aabcccccaaa를 압축하면 a2b1c5a3이 된다. 
 만약 '압축된' 문자열의 길이가 기존 문자열의 길이보다 길다면 기존 문자열을 반환해야 한다.
 문자열은 대소문자 알파벳으로만 이루어져 있다. 
 */

 const input = 'aabcccaaa';
 let result = '';
 let cnt = 0;

for (let i = 0; i < input.length; i += 1) {
  if (input[i] === input[i + 1]) {
    cnt += 1;
  }
  else if (input[i] === input[i - 1]) {
    cnt += 1;
    result += input[i] + cnt;
    cnt = 0;
  }
  else {
    result += input[i] + 1;
    cnt = 0;
  }
 }

 console.log(result);