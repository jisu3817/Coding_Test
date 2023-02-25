const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const squareSize = input.shift().split(" ");

// 가로
const width = Number(squareSize[0]);
// 세로
const height = Number(squareSize[1]);

let visited = [];
let result = 0;

for (let i = 0; i < width; i += 1) {
  for (let j = 0; j < height; j += 1) {
    if (input[i][j] === "L") {
      result = Math.max(result, dfs(i, j));
    }
  }
}

function dfs(x, y) {
  const queue = [[x, y]];

  for (let i = 0; i < width; i += 1) {
    visited[i] = new Array(height).fill(0);
  }

  visited[x][y] = 1;

  const xIdx = [0, 0, 1, -1];
  const yIdx = [1, -1, 0, 0];

  while (queue.length) {
    const target = queue.shift();

    for (let p = 0; p < 4; p += 1) {
      const xIdxMove = target[0] + xIdx[p];
      const yIdxMove = target[1] + yIdx[p];

      if (
        xIdxMove >= 0 &&
        yIdxMove >= 0 &&
        xIdxMove < width &&
        yIdxMove < height &&
        input[xIdxMove][yIdxMove] === "L" &&
        !visited[xIdxMove][yIdxMove]
      ) {
        visited[xIdxMove][yIdxMove] = visited[target[0]][target[1]] + 1;
        queue.push([xIdxMove, yIdxMove]);
      }
    }
  }

  return Math.max(...visited.flat());
}
console.log(result - 1);
