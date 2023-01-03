const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// N * N 크기
const N = Number(input.shift());
// 0과 1로 이루어진 이중 배열 리스트
const arr = input.map((item) => item.split("").map(Number));
// 인덱스 === 각 단지
const result = [];
// 방문 체크
const visitedRecords = {};

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (arr[i][j] === 1 && !visitedRecords[[i, j]]) {
      // dfs()실행 시 큐가 끝나면 결과 값을 result에 push
      result.push(dfs(i, j));
    }
  }
}

function dfs(x, y) {
  // 연결리스트 시작점을 큐에 삽입
  const queue = [[x, y]];
  // 큐에서 빼온 값의 상화좌우 방문할 때마다 중복 방지를 위한 object
  const visited = {};

  // 이미 방문 했음을 체크
  visited[[x, y]] = true;
  visitedRecords[[x, y]] = true;

  // 상하좌우 하기위한 배열
  const xIdx = [0, 0, 1, -1];
  const yIdx = [1, -1, 0, 0];

  let cnt = 1;
  // 큐에 삽입된 값이 없어질 때까지 반복
  while (queue.length) {
    for (let i = 0; i < queue.length; i += 1) {
      // 큐에서 값을 뺌
      const target = queue.shift();

      // 상하좌우 계산
      for (let j = 0; j < 4; j += 1) {
        const queueX = target[0] + xIdx[j];
        const queueY = target[1] + yIdx[j];

        if (
          queueX >= 0 &&
          queueY >= 0 &&
          queueX < N &&
          queueY < N &&
          arr[queueX][queueY] === 1 &&
          !visited[[queueX, queueY]]
        ) {
          visited[[queueX, queueY]] = true;
          visitedRecords[[queueX, queueY]] = true;
          cnt += 1;
          queue.push([queueX, queueY]);
        }
      }
    }
  }
  return cnt;
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((item) => console.log(item));
