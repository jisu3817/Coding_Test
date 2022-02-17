'use strict';

/*
< 문제 >
문자열 두 개가 주어졌을 대 이 둘이 서로 순열 관계에 있는지 확인하는 메서드를 작성하라. 
*/

const input1 = 'god';
const input2 = 'dog';

const result1 = input1.split('').sort().join('');
const result2 = input2.split('').sort().join('');

if (result1 === result2) console.log('두 문자열은 순열 관계에 있습니다.');
else console.log('두 문자열을 순열 관계가 아닙니다.');