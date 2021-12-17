function firstProblem(N) {
  const newArr = N.split(" ");
  const rePeatNum = newArr[0];
  const rePeatString = newArr[1];
  let result = '';

  for (let i = 0; i < rePeatNum; i += 1) {
    result += rePeatString;
  }

  return result;
}

console.log(firstProblem('4 안녕'));