function solution(name, yearning, photo) {
  const result = [];
  const nameMap = name.reduce((acc, cur, idx) => {
    acc.set(cur, yearning[idx]);
    return acc;
  }, new Map());

  for (const arr of photo) {
    let sum = 0;
    for (const item of arr) {
      sum += nameMap.get(item) || 0;
    }
    result.push(sum);
  }
  return result;
}
