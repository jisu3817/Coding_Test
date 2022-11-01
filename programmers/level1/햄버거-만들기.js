function solution(ingredient) {
  let arrayList = [];
  let cnt = 0;

  for (let i = 0; i < ingredient.length; i += 1) {
    arrayList.push(ingredient[i]);

    if (
      arrayList[arrayList.length - 1] === 1 &&
      arrayList[arrayList.length - 2] === 3 &&
      arrayList[arrayList.length - 3] === 2 &&
      arrayList[arrayList.length - 4] === 1
    ) {
      cnt += 1;

      arrayList.splice(-4);
    }
  }

  return cnt;
}
