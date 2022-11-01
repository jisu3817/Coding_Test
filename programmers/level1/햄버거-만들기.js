/**
 * 처음에는 slice, split, indexOf 등의 메서드를 사용하려 했으나
 * o(n)의 시간복잡도를 가지고 있어 테스트 시 시간초과로 실패하였음.
 */
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
