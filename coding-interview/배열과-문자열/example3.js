'use strict';

/*
< 문제 >
문자열에 들어 있는 모든 공백을 '%20'으로 바꿔주는 메서드를 작성하라. 
최종적으로 모든 문자를 다담을 수 있을 만큼 충분한 공간이 이미 확보되어 있으며 
문자열의 최종 길이가 함께 주어진다고 가정해도 된다. (배열을 이용하도록 한다.)
*/

const input = 'Mr John Smith';

const result = input.split('').map((str, idx) => {
  if (str === ' ') {
    return '%20';
  }
  else return str;
}).join('');

console.log(result);