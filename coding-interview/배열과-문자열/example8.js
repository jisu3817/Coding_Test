"use strict";

/*
< 문제 - 0 행렬 >
M * N 행렬의 한 원소가 0일 경우, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘을 작성하라.
*/

const input = [
  [1, 3, 3, 4, 2],
  [3, 4, 3, 3, 4],
  [3, 0, 2, 2, 1]
];

let x, y = 0;

input.map((arr, idx) => {
  const isIncludeZero = arr.indexOf(0);

  if (isIncludeZero !== -1) {
    x = isIncludeZero;
    y = idx;
  };
});


const result = input.map((arr, idx1) => {
  return arr.map((value, idx2) => {
    if (idx1 === y || idx2  === x) return value = 0;
    else return value
  })
})

console.log(result);