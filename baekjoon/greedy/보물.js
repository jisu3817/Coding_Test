const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrLen = Number(input[0]);
const arrA = input[1].split(' ').sort((a, b) => a - b).map((value) => Number(value));
const arrB = input[2].split(' ').sort((a, b) => b - a).map((value) => Number(value));

let result = 0;
// const result = arrA.reduce((acc, cur, idx) => acc + cur * arrB[idx]);
for(let i = 0; i<arrLen; i++){
  result += arrA[i] * arrB[i]
}


console.log(result);

// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x)); 
// let answer = 0;
// const N = +input[0][0];
// const A = input[1].sort((a,b)=>{return a-b});
// const B = input[2].sort((a,b)=>{return b-a});

// for(let i = 0; i<N; i++){
//   answer+=A[i]*B[i]
// }

// console.log(answer)
// for (let i = 0; i < arrLen; i += 1) {
//   let maxIdx = 0;
//   const max = arrB.filter((value, idx) => {
//     if (Math.max(...arrB) === value) {
//       maxIdx = idx;
//       return value;
//     }
//   });

//   result += arrA[i] * max;

//   arrB.splice(maxIdx, 1);
// };
