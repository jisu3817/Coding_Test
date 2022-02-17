'use strict';

/*
< 문제 >
문자열이 주어졌을 때 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라. 
자료구조를 추가로 사용하지 않고 풀 수 있는 알고리즘 또한 고민하라. 
*/

const input = 'abc';

const result = input.split('').filter((str, idx) => idx !== input.indexOf(str));

if (result.length) console.log('문자열에 같은 문자가 중복되어 있습니다.');
else console.log('문자열에 중복된 문자가 없습니다.');