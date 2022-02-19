'use strict';

/*
< 문제 - 문자열 회전 >
한 단어가 다른 문자열에 포함되어 있는지 판별하는 isSubstring이라는 메서드가 있다고 하자. 
s1과 s2의 두 문자열이 주어졌고, s2가 s1을 회전시킨 결과인지 판별하고자 한다. 
isSubstring 메서드를 한 번만 호출해서 판별할 수 있는 코드를 작성하라. 
*/

const s1 = 'waterbottle';
const s2 = 'erbottlewtt';

function isSubstring(s1, s2) {
  const result = s1.split('').filter(str => !s2.includes(str)).length;

  return result ? false : true;
};

if (s1.length !== s2.length) console.log(false);
else console.log(isSubstring(s1, s2));



