function secondProblem(N) {
  const result = [];
  let sum = 0;
  result.push(Math.min.apply(null, N));

  for (let i = 0; i < N.length; i++) {
    sum += N[i];
  }
  result.push(sum);
  result.push(Math.max.apply(null, N));

  return result;
}

console.log(secondProblem([3]));
console.log(secondProblem([-5, 2, 13, 23, 100, 4]));